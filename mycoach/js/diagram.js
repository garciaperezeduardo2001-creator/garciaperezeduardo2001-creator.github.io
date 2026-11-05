/* Motor de diagramas: dibuja una vista aérea del campo (105 x 68 m) en SVG y anima las tareas.
   Coordenadas en metros: x = 0 (portería izquierda) → 105 (portería derecha), y = 0 (banda superior) → 68.
   Elementos de un diagrama (todos opcionales):
   v  : [x, y, ancho, alto]  vista (si falta se calcula sola)
   z  : zonas  [x, y, w, h, color?, etiqueta?]
   l  : líneas discontinuas [x1, y1, x2, y2]
   p  : jugadores [equipo, x, y, texto?]   equipo: A rojo, B azul, N comodín, P portero, E entrenador, C naranja
   c  : conos [x, y, color?]
   pk : picas [x, y]
   h  : vallas [x, y, vertical?]
   esc: escaleras [x, y, largo, vertical?]
   mg : miniporterías [x, y, orientación 'L'|'R'|'U'|'D'] (hacia dónde mira la boca)
   g  : porterías móviles [x, y, orientación]
   b  : balones [x, y]
   a  : flechas [tipo, x1, y1, x2, y2, curva?, paso?]  tipo: pase | mov | cond | tiro
        «paso» es opcional: las flechas con el mismo paso se animan a la vez. Si falta, se calcula solo:
        los desplazamientos sin balón se mueven a la vez que la siguiente acción con balón.
   t  : textos [x, y, texto, tamaño?]
*/
(function () {
  const L = 105, W = 68;
  const TEAM = {
    A: ['#e11d48', '#fff', '#fb7185', '#9f1239'], B: ['#2563eb', '#fff', '#60a5fa', '#1e3a8a'], N: ['#facc15', '#1f2937', '#fde68a', '#a16207'],
    P: ['#111827', '#facc15', '#4b5563', '#000000'], E: ['#ffffff', '#111827', '#ffffff', '#9ca3af'], C: ['#f97316', '#fff', '#fdba74', '#9a3412']
  };
  const ARW = { pase: { c: '#ffffff', w: .22, dash: '' }, mov: { c: '#fde047', w: .2, dash: 'd' }, cond: { c: '#ffffff', w: .17, dash: '' }, tiro: { c: '#fb923c', w: .34, dash: '' } };
  let uid = 0;

  function bbox(d) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    const add = (x, y) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); };
    (d.z || []).forEach(z => { add(z[0], z[1]); add(z[0] + z[2], z[1] + z[3]); });
    (d.p || []).forEach(p => add(p[1], p[2]));
    ['c', 'pk', 'h', 'b', 'mg', 'g', 't'].forEach(k => (d[k] || []).forEach(e => add(e[0], e[1])));
    (d.esc || []).forEach(e => { add(e[0], e[1]); add(e[0] + (e[3] ? 0 : e[2]), e[1] + (e[3] ? e[2] : 0)); });
    (d.a || []).forEach(a => { add(a[1], a[2]); add(a[3], a[4]); });
    (d.l || []).forEach(a => { add(a[0], a[1]); add(a[2], a[3]); });
    if (!isFinite(x0)) return [-4, -4, L + 8, W + 8];
    const m = Math.max(3, Math.max(x1 - x0, y1 - y0) * 0.08);
    return [x0 - m, y0 - m, x1 - x0 + 2 * m, y1 - y0 + 2 * m];
  }

  // Agrupa las flechas en pasos de animación
  function steps(d) {
    const a = d.a || [], out = [];
    if (a.some(x => x[6] != null)) {
      const m = new Map(); a.forEach((x, i) => { const k = x[6] ?? (i + 1000); if (!m.has(k)) m.set(k, []); m.get(k).push(i); });
      return [...m.keys()].sort((p, q) => p - q).map(k => m.get(k));
    }
    let pend = [];
    a.forEach((x, i) => { if (x[0] === 'mov') pend.push(i); else { out.push([...pend, i]); pend = []; } });
    if (pend.length) { if (out.length) out[out.length - 1].push(...pend); else out.push(pend); }
    return out;
  }

  function geom(a, k, players) {
    let [type, x1, y1, x2, y2, cv] = a; cv = cv || 0;
    const r = 0.85 * k;
    const near = (x, y) => players.some(p => Math.hypot(p[1] - x, p[2] - y) < 0.6);
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
    if (near(x1, y1)) { x1 += ux * r * 1.05; y1 += uy * r * 1.05; }
    if (near(x2, y2)) { x2 -= ux * r * 1.25; y2 -= uy * r * 1.25; }
    const mx = (x1 + x2) / 2 - uy * cv, my = (y1 + y2) / 2 + ux * cv;
    const at = t => [(1 - t) ** 2 * x1 + 2 * (1 - t) * t * mx + t * t * x2, (1 - t) ** 2 * y1 + 2 * (1 - t) * t * my + t * t * y2];
    let path;
    if (type === 'cond') {
      const pts = [], n = Math.max(8, Math.round(len / (0.7 * k)) * 2), amp = 0.35 * k;
      for (let i = 0; i <= n; i++) {
        const t = i / n, [bx, by] = at(t);
        const tx = 2 * (1 - t) * (mx - x1) + 2 * t * (x2 - mx), ty = 2 * (1 - t) * (my - y1) + 2 * t * (y2 - my), tl = Math.hypot(tx, ty) || 1;
        const o = (i === 0 || i >= n - 1) ? 0 : (i % 2 ? amp : -amp);
        pts.push(`${(bx - ty / tl * o).toFixed(2)} ${(by + tx / tl * o).toFixed(2)}`);
      }
      path = 'M' + pts.join(' L');
    } else path = `M${x1.toFixed(2)} ${y1.toFixed(2)} Q${mx.toFixed(2)} ${my.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`;
    return { type, path, at, len };
  }

  function pitch(lw, id, mini) {
    const s = [];
    s.push(`<rect x="0" y="0" width="${L}" height="${W}" fill="#1f8a43"/>`);
    for (let i = 0; i < 14; i++) if (i % 2) s.push(`<rect x="${i * 7.5}" y="0" width="7.5" height="${W}" fill="#25994c"/>`);
    if (!mini) s.push(`<rect x="0" y="0" width="${L}" height="${W}" fill="url(#vg-${id})"/>`);
    const ln = `fill="none" stroke="rgba(255,255,255,.88)" stroke-width="${lw}" stroke-linecap="round"`;
    s.push(`<g ${ln}>
      <rect x="0" y="0" width="${L}" height="${W}"/>
      <line x1="52.5" y1="0" x2="52.5" y2="${W}"/>
      <circle cx="52.5" cy="34" r="9.15"/>
      <rect x="0" y="13.84" width="16.5" height="40.32"/><rect x="0" y="24.84" width="5.5" height="18.32"/>
      <rect x="88.5" y="13.84" width="16.5" height="40.32"/><rect x="99.5" y="24.84" width="5.5" height="18.32"/>
      <path d="M16.5 26.69 A9.15 9.15 0 0 1 16.5 41.31"/><path d="M88.5 26.69 A9.15 9.15 0 0 0 88.5 41.31"/>
      <path d="M0 1 A1 1 0 0 0 1 0"/><path d="M104 0 A1 1 0 0 0 105 1"/><path d="M0 67 A1 1 0 0 1 1 68"/><path d="M104 68 A1 1 0 0 1 105 67"/>
    </g>`);
    const net = mini ? 'rgba(255,255,255,.25)' : `url(#net-${id})`;
    s.push(`<rect x="-2" y="30.34" width="2" height="7.32" fill="${net}" stroke="#fff" stroke-width="${lw}"/><rect x="105" y="30.34" width="2" height="7.32" fill="${net}" stroke="#fff" stroke-width="${lw}"/>`);
    s.push(`<g fill="rgba(255,255,255,.9)"><circle cx="52.5" cy="34" r="${lw * 1.6}"/><circle cx="11" cy="34" r="${lw * 1.6}"/><circle cx="94" cy="34" r="${lw * 1.6}"/></g>`);
    if (!mini) [[0, 0], [L, 0], [0, W], [L, W]].forEach(([x, y]) => s.push(`<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 1.4}" stroke="#fff" stroke-width="${lw * .8}"/><path d="M${x} ${y - 1.4} l${x ? -1.1 : 1.1} .35 l${x ? 1.1 : -1.1} .35z" fill="#facc15"/>`));
    return s.join('');
  }

  function goal(x, y, o, w, dep, lw, fill) {
    const h = w / 2;
    if (o === 'L' || o === 'R') {
      const dx = o === 'L' ? dep : -dep, x0 = Math.min(x, x + dx);
      return `<rect x="${x0}" y="${y - h}" width="${dep}" height="${w}" fill="${fill}"/><path d="M${x + dx} ${y - h} L${x} ${y - h} L${x} ${y + h} L${x + dx} ${y + h}" fill="none" stroke="#fff" stroke-width="${lw * 1.7}" stroke-linejoin="round"/>`;
    }
    const dy = o === 'U' ? dep : -dep, y0 = Math.min(y, y + dy);
    return `<rect x="${x - h}" y="${y0}" width="${w}" height="${dep}" fill="${fill}"/><path d="M${x - h} ${y + dy} L${x - h} ${y} L${x + h} ${y} L${x + h} ${y + dy}" fill="none" stroke="#fff" stroke-width="${lw * 1.7}" stroke-linejoin="round"/>`;
  }

  window.fieldBBox = bbox;
  window.fieldSteps = steps;

  window.drawField = function (d, opt = {}) {
    d = d || {};
    const id = ++uid, mini = !!opt.mini;
    let [vx, vy, vw, vh] = d.v || bbox(d);
    const AR = 1.5;
    if (vw / vh < AR) { const nw = vh * AR; vx -= (nw - vw) / 2; vw = nw; } else { const nh = vw / AR; vy -= (nh - vh) / 2; vh = nh; }
    const cl = (v, w, max) => w >= max + 8 ? v : Math.min(Math.max(v, -4), max + 4 - w);
    vx = cl(vx, vw, L); vy = cl(vy, vh, W);
    const k = vw / 40, lw = Math.max(0.12, k * 0.14);
    const o = [];
    o.push(`<svg class="field" viewBox="${vx.toFixed(2)} ${vy.toFixed(2)} ${vw.toFixed(2)} ${vh.toFixed(2)}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${opt.label || 'Diagrama de la tarea'}" data-k="${k.toFixed(4)}">`);
    const mk = (t, c) => `<marker id="ah-${t}-${id}" viewBox="0 0 10 10" refX="6.5" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 L2.2 5 z" fill="${c}"/></marker>`;
    let defs = mk('pase', ARW.pase.c) + mk('mov', ARW.mov.c) + mk('cond', ARW.cond.c) + mk('tiro', ARW.tiro.c);
    if (!mini) {
      defs += `<radialGradient id="vg-${id}" cx="50%" cy="50%" r="75%"><stop offset="60%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity=".22"/></radialGradient>`;
      defs += `<pattern id="net-${id}" width=".5" height=".5" patternUnits="userSpaceOnUse"><rect width=".5" height=".5" fill="rgba(255,255,255,.12)"/><path d="M0 0 L.5 .5 M.5 0 L0 .5" stroke="rgba(255,255,255,.55)" stroke-width=".05"/></pattern>`;
      Object.entries(TEAM).forEach(([t, c]) => { defs += `<radialGradient id="pl${t}-${id}" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="${c[2]}"/><stop offset="55%" stop-color="${c[0]}"/><stop offset="100%" stop-color="${c[3]}"/></radialGradient>`; });
      defs += `<radialGradient id="ball-${id}" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff"/><stop offset="80%" stop-color="#e5e7eb"/><stop offset="100%" stop-color="#9ca3af"/></radialGradient>`;
      defs += `<linearGradient id="cone-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".45"/><stop offset="100%" stop-color="#000" stop-opacity=".15"/></linearGradient>`;
    }
    o.push(`<defs>${defs}</defs>`);
    o.push(`<rect x="${vx - 50}" y="${vy - 50}" width="${vw + 100}" height="${vh + 100}" fill="#14632f"/>`);
    o.push(pitch(lw, id, mini));
    (d.z || []).forEach(z => {
      const [x, y, w, h, col, lab] = z;
      o.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${k * .35}" fill="${col || '#fff'}" fill-opacity="${col ? .26 : .09}" stroke="${col || '#fff'}" stroke-opacity=".95" stroke-width="${lw * 1.3}" stroke-dasharray="${k * .9} ${k * .5}" stroke-linecap="round"/>`);
      if (lab && !mini) o.push(`<text x="${x + w / 2}" y="${y + h - k * .5}" font-size="${k * 1.1}" text-anchor="middle" fill="#fff" fill-opacity=".9" font-weight="800" font-family="system-ui,sans-serif" paint-order="stroke" stroke="rgba(0,0,0,.35)" stroke-width="${k * .18}">${lab}</text>`);
    });
    (d.l || []).forEach(l => o.push(`<line x1="${l[0]}" y1="${l[1]}" x2="${l[2]}" y2="${l[3]}" stroke="#fff" stroke-opacity=".8" stroke-width="${lw * 1.2}" stroke-dasharray="${k * .6} ${k * .5}" stroke-linecap="round"/>`));
    (d.esc || []).forEach(e => {
      const [x, y, len, vert] = e, wd = 0.8, n = Math.round(len / 0.5);
      let s = `<rect x="${x}" y="${y}" width="${vert ? wd : len}" height="${vert ? len : wd}" fill="rgba(250,204,21,.12)" stroke="#facc15" stroke-width="${lw}"/>`;
      for (let i = 1; i < n; i++) s += vert ? `<line x1="${x}" y1="${y + i * .5}" x2="${x + wd}" y2="${y + i * .5}" stroke="#facc15" stroke-width="${lw * .8}"/>` : `<line x1="${x + i * .5}" y1="${y}" x2="${x + i * .5}" y2="${y + wd}" stroke="#facc15" stroke-width="${lw * .8}"/>`;
      o.push(s);
    });
    const netFill = mini ? 'rgba(255,255,255,.25)' : `url(#net-${id})`;
    (d.g || []).forEach(g => o.push(goal(g[0], g[1], g[2], 7.32, 2, lw, netFill)));
    (d.mg || []).forEach(g => o.push(goal(g[0], g[1], g[2], Math.max(2, 1.2 * k), Math.max(.8, .5 * k), lw, netFill)));
    (d.h || []).forEach(h => { const s = 0.5 * k, t = s * .3; o.push(h[2]
      ? `<g><rect x="${h[0] - t / 2 + k * .08}" y="${h[1] - s + k * .1}" width="${t}" height="${s * 2}" fill="rgba(0,0,0,.25)"/><rect x="${h[0] - t / 2}" y="${h[1] - s}" width="${t}" height="${s * 2}" rx="${t / 3}" fill="#fb923c" stroke="#7c2d12" stroke-width="${lw * .4}"/></g>`
      : `<g><rect x="${h[0] - s + k * .08}" y="${h[1] - t / 2 + k * .1}" width="${s * 2}" height="${t}" fill="rgba(0,0,0,.25)"/><rect x="${h[0] - s}" y="${h[1] - t / 2}" width="${s * 2}" height="${t}" rx="${t / 3}" fill="#fb923c" stroke="#7c2d12" stroke-width="${lw * .4}"/></g>`); });
    (d.pk || []).forEach(p => o.push(`<g><circle cx="${p[0] + k * .1}" cy="${p[1] + k * .12}" r="${.34 * k}" fill="rgba(0,0,0,.28)"/><circle cx="${p[0]}" cy="${p[1]}" r="${.34 * k}" fill="#fde047" stroke="#713f12" stroke-width="${lw * .6}"/><circle cx="${p[0]}" cy="${p[1]}" r="${.12 * k}" fill="#713f12"/></g>`));
    (d.c || []).forEach(c => { const s = 0.44 * k, col = c[2] || '#f97316';
      o.push(`<g><path d="M${c[0] + k * .1} ${c[1] - s + k * .14} L${c[0] + s * .9 + k * .1} ${c[1] + s * .7 + k * .14} L${c[0] - s * .9 + k * .1} ${c[1] + s * .7 + k * .14} z" fill="rgba(0,0,0,.25)"/><path d="M${c[0]} ${c[1] - s} L${c[0] + s * .9} ${c[1] + s * .7} L${c[0] - s * .9} ${c[1] + s * .7} z" fill="${col}" stroke="rgba(0,0,0,.35)" stroke-width="${lw * .45}" stroke-linejoin="round"/>`
        + (mini ? '' : `<path d="M${c[0] - s * .45} ${c[1] + s * .05} L${c[0] + s * .45} ${c[1] + s * .05}" stroke="#fff" stroke-opacity=".85" stroke-width="${s * .22}"/><path d="M${c[0]} ${c[1] - s} L${c[0] + s * .9} ${c[1] + s * .7} L${c[0] - s * .9} ${c[1] + s * .7} z" fill="url(#cone-${id})"/>`) + '</g>'); });
    const pl = d.p || [];
    const st = steps(d), stepOf = {}; st.forEach((g, i) => g.forEach(j => { stepOf[j] = i + 1; }));
    const badges = [];
    (d.a || []).forEach((a, i) => {
      const g = geom(a, k, pl), S = ARW[g.type] || ARW.pase, w = S.w * k;
      const dash = S.dash ? `stroke-dasharray="${0.6 * k} ${0.42 * k}"` : '';
      o.push(`<g data-a="${i}">`
        + (mini ? '' : `<path d="${g.path}" fill="none" stroke="rgba(0,0,0,.38)" stroke-width="${w * 2.1}" ${dash} stroke-linecap="round" stroke-linejoin="round"/>`)
        + `<path d="${g.path}" fill="none" stroke="${S.c}" stroke-width="${w}" ${dash} stroke-linecap="round" stroke-linejoin="round" marker-end="url(#ah-${g.type}-${id})"/></g>`);
      if (!mini && opt.steps !== false && st.length > 1) {
        const n = stepOf[i], [bx, by] = g.at(.42), rr = .55 * k;
        if (!badges.some(b => b.n === n && Math.hypot(b.x - bx, b.y - by) < rr * 2)) badges.push({ n, x: bx, y: by, i });
      }
    });
    pl.forEach((p, i) => {
      const [t, x, y, lab] = p, col = TEAM[t] || TEAM.A, r = 0.85 * k;
      const fill = mini ? col[0] : `url(#pl${TEAM[t] ? t : 'A'}-${id})`;
      o.push(`<g data-p="${i}"><ellipse cx="${x + r * .18}" cy="${y + r * .32}" rx="${r * 1.02}" ry="${r * .9}" fill="rgba(0,0,0,.3)"/><circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${t === 'P' ? '#facc15' : '#fff'}" stroke-width="${lw * 1.25}"/>`
        + ((lab || t === 'P') && !mini ? `<text x="${x}" y="${y + r * .38}" font-size="${r * (String(lab || 'P').length > 1 ? .85 : 1.1)}" text-anchor="middle" fill="${col[1]}" font-weight="800" font-family="system-ui,sans-serif">${lab || 'P'}</text>` : '') + '</g>');
    });
    (d.b || []).forEach((b, i) => { const r = .36 * k;
      o.push(`<g data-b="${i}"><ellipse class="bs" cx="${b[0] + r * .3}" cy="${b[1] + r * .45}" rx="${r}" ry="${r * .8}" fill="rgba(0,0,0,.35)"/><g class="bb"><circle cx="${b[0]}" cy="${b[1]}" r="${r}" fill="${mini ? '#fff' : `url(#ball-${id})`}" stroke="#111" stroke-width="${lw * .6}"/>`
        + (mini ? '' : `<circle cx="${b[0]}" cy="${b[1]}" r="${r * .32}" fill="#1f2937"/>`) + '</g></g>'); });
    badges.forEach(b => { const rr = .52 * k; o.push(`<g data-s="${b.n}" class="stepb"><circle cx="${b.x}" cy="${b.y}" r="${rr}" fill="#0f172a" fill-opacity=".85" stroke="#fff" stroke-width="${lw * .7}"/><text x="${b.x}" y="${b.y + rr * .42}" font-size="${rr * 1.15}" text-anchor="middle" fill="#fff" font-weight="800" font-family="system-ui,sans-serif">${b.n}</text></g>`); });
    if (!mini) (d.t || []).forEach(t => o.push(`<text x="${t[0]}" y="${t[1]}" font-size="${k * (t[3] || 1.15)}" text-anchor="middle" fill="#fff" font-weight="800" font-family="system-ui,sans-serif" paint-order="stroke" stroke="rgba(0,0,0,.55)" stroke-width="${k * .25}">${t[2]}</text>`));
    o.push('</svg>');
    return o.join('');
  };

  /* Animación por pasos.
     const ctl = animateField(contenedor, d, { onState(estado) {}, speed: 1, loop: false });
     ctl.play() · ctl.pause() · ctl.next() · ctl.restart() · ctl.setSpeed(x) · ctl.setLoop(b) · ctl.stop() */
  window.animateField = function (box, d, opts = {}) {
    const svg = box.querySelector('svg');
    const NS = 'http://www.w3.org/2000/svg';
    const groups = steps(d);
    const noop = { play() { }, pause() { }, next() { }, restart() { }, setSpeed() { }, setLoop() { }, setReact() { }, stop() { }, steps: 0 };
    if (!svg || !groups.length) { opts.onState && opts.onState({ step: 0, total: 0, playing: false, done: true, caption: '' }); return noop; }
    const k = +svg.getAttribute('data-k') || svg.viewBox.baseVal.width / 40;
    const pl = d.p || [];
    const P0 = pl.map(p => [p[1], p[2]]), B0 = (d.b || []).map(b => [b[0], b[1]]);
    let P, B, step, playing = false, raf = 0, timer = 0, speed = opts.speed || 1, loop = !!opts.loop, react = opts.react !== false, temps = [], trails = null, fx = null;
    const gp = i => svg.querySelector(`[data-p="${i}"]`), gb = i => svg.querySelector(`[data-b="${i}"]`);
    const arrows = [...svg.querySelectorAll('[data-a]')], badges = [...svg.querySelectorAll('[data-s]')];
    const NAMES = { pase: 'pase', mov: 'desmarque', cond: 'conducción', tiro: 'tiro' };
    const caption = i => { if (i < 0 || i >= groups.length) return ''; const n = [...new Set(groups[i].map(j => NAMES[d.a[j][0]] || ''))].filter(Boolean); const s = n.join(' + '); return s.charAt(0).toUpperCase() + s.slice(1); };
    const near = (arr, x, y, max, skip) => { let bi = -1, bd = max; arr.forEach((p, i) => { if (skip && skip.has(i)) return; const dd = Math.hypot(p[0] - x, p[1] - y); if (dd < bd) { bd = dd; bi = i; } }); return bi; };
    const setP = (i, cur, s = 1) => { const g = gp(i); if (!g) return; const o = P0[i]; g.setAttribute('transform', s === 1 ? `translate(${(cur[0] - o[0]).toFixed(2)} ${(cur[1] - o[1]).toFixed(2)})` : `translate(${cur[0].toFixed(2)} ${cur[1].toFixed(2)}) scale(${s.toFixed(3)}) translate(${(-o[0]).toFixed(2)} ${(-o[1]).toFixed(2)})`); };
    const setB = (g, cur, orig) => g && g.setAttribute('transform', `translate(${(cur[0] - orig[0]).toFixed(2)} ${(cur[1] - orig[1]).toFixed(2)})`);
    const state = (extra) => opts.onState && opts.onState({ step, total: groups.length, playing, done: step >= groups.length, caption: caption(Math.min(step, groups.length) - 1), ...extra });
    const colPath = g => { const ps = g.querySelectorAll('path'); return ps[ps.length - 1]; };
    function paint() {
      arrows.forEach((a, i) => { const s = groups.findIndex(g => g.includes(i)); a.style.transition = 'opacity .3s'; a.style.opacity = s < step ? .45 : .14; });
      badges.forEach(b => { const n = +b.getAttribute('data-s'); b.style.transition = 'opacity .3s'; b.style.opacity = n <= step ? .5 : .9; });
    }
    function loft(g, h, spin) {
      if (!g) return; const bb = g.querySelector('.bb'), bs = g.querySelector('.bs');
      if (bb) bb.setAttribute('transform', h ? `translate(0 ${(-h * 1.6 * k).toFixed(2)})` : '');
      if (bs) bs.setAttribute('opacity', (1 - h * .6).toFixed(2));
      if (spin != null && bb) { const dot = bb.querySelectorAll('circle')[1]; if (dot) { const r = .36 * k * .42; dot.setAttribute('transform', `translate(${(Math.cos(spin) * r).toFixed(3)} ${(Math.sin(spin) * r).toFixed(3)})`); } }
    }
    function reset() {
      cancelAnimationFrame(raf); clearTimeout(timer);
      temps.forEach(t => t.remove()); temps = [];
      P = P0.map(p => p.slice()); B = B0.map(b => b.slice());
      P.forEach((p, i) => setP(i, p)); B.forEach((b, i) => { setB(gb(i), b, B0[i]); loft(gb(i), 0, 0); });
      arrows.forEach(a => { const p = colPath(a); a.querySelectorAll('path').forEach(x => { x.style.strokeDasharray = ''; x.style.strokeDashoffset = ''; }); if (p && p.dataset.mk) { p.setAttribute('marker-end', p.dataset.mk); } });
      if (trails) trails.remove(); if (fx) fx.remove();
      trails = document.createElementNS(NS, 'g'); trails.setAttribute('class', 'trails');
      const firstP = svg.querySelector('[data-p]'); svg.insertBefore(trails, firstP || null);
      fx = document.createElementNS(NS, 'g'); svg.appendChild(fx);
      step = 0; paint();
    }
    function tempBall(x, y) {
      const g = document.createElementNS(NS, 'g'), r = .36 * k;
      g.innerHTML = `<ellipse class="bs" cx="${x + r * .3}" cy="${y + r * .45}" rx="${r}" ry="${r * .8}" fill="rgba(0,0,0,.35)"/><g class="bb"><circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="#111" stroke-width="${k * .08}"/><circle cx="${x}" cy="${y}" r="${r * .32}" fill="#1f2937"/></g>`;
      svg.insertBefore(g, fx); temps.push(g); return { g, o: [x, y] };
    }
    // ¿El tiro termina en una portería?
    function goalAt(x, y) {
      const goals = [[0, 34, 4], [105, 34, 4], ...(d.g || []).map(g => [g[0], g[1], 4]), ...(d.mg || []).map(g => [g[0], g[1], Math.max(1.6, k)])];
      return goals.find(g => Math.abs(g[0] - x) < 2.5 + (g[2] > 3 ? 0 : 1) && Math.abs(g[1] - y) < g[2] + 1);
    }
    function celebrate(x, y) {
      const g = document.createElementNS(NS, 'g');
      g.innerHTML = `<circle cx="${x}" cy="${y}" r="${k * .8}" fill="none" stroke="#fde047" stroke-width="${k * .25}"><animate attributeName="r" from="${k * .6}" to="${k * 4}" dur=".9s" fill="freeze"/><animate attributeName="opacity" from="1" to="0" dur=".9s" fill="freeze"/></circle>`
        + `<text x="${x + (x > 52 ? -k * 3 : k * 3)}" y="${y - k * 1.6}" text-anchor="middle" font-size="${k * 1.9}" font-weight="900" font-family="system-ui,sans-serif" fill="#fde047" stroke="rgba(0,0,0,.6)" stroke-width="${k * .3}" paint-order="stroke">¡GOL!<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.4s" fill="freeze"/></text>`;
      fx.appendChild(g); setTimeout(() => g.remove(), 1500);
    }
    function runStep(done) {
      const idx = groups[step];
      const usedP = new Set(), usedB = new Set();
      const moves = idx.map(i => {
        const a = d.a[i], g = geom(a, k, []), type = a[0], ag = arrows[i];
        const pi = type === 'mov' || type === 'cond' ? near(P, a[1], a[2], 4.5, usedP) : -1; if (pi >= 0) usedP.add(pi);
        const passer = type !== 'mov' ? near(P, a[1], a[2], 4.5) : -1;
        let bi = type === 'mov' ? -1 : near(B, a[1], a[2], type === 'cond' ? 3.5 : 6, usedB), tb = null;
        if (bi >= 0) usedB.add(bi); else if (type !== 'mov') tb = tempBall(a[1], a[2]);
        const off = bi >= 0 && pi >= 0 ? [B[bi][0] - P[pi][0], B[bi][1] - P[pi][1]] : [0, 0];
        let tr = null, ring = null;
        if (pi >= 0) {
          tr = document.createElementNS(NS, 'polyline'); tr.setAttribute('fill', 'none'); tr.setAttribute('stroke', (TEAM[pl[pi][0]] || TEAM.A)[0]); tr.setAttribute('stroke-width', (.28 * k).toFixed(2)); tr.setAttribute('stroke-opacity', '.45'); tr.setAttribute('stroke-linecap', 'round'); tr.setAttribute('stroke-dasharray', `${(.3 * k).toFixed(2)} ${(.25 * k).toFixed(2)}`); trails.appendChild(tr);
        }
        const actor = pi >= 0 ? pi : passer;
        if (actor >= 0) { ring = document.createElementNS(NS, 'circle'); ring.setAttribute('r', (1.35 * k).toFixed(2)); ring.setAttribute('fill', 'none'); ring.setAttribute('stroke', '#fde047'); ring.setAttribute('stroke-width', (.18 * k).toFixed(2)); ring.setAttribute('cx', P[actor][0]); ring.setAttribute('cy', P[actor][1]); trails.appendChild(ring); }
        // la flecha se dibuja mientras ocurre la acción
        let rev = null;
        if (ag) {
          ag.style.opacity = 1;
          const cp = colPath(ag);
          if (type !== 'mov' && cp && cp.getTotalLength) {
            const L = cp.getTotalLength(); rev = { L, ps: [...ag.querySelectorAll('path')] };
            if (!cp.dataset.mk) cp.dataset.mk = cp.getAttribute('marker-end') || '';
            cp.removeAttribute('marker-end'); rev.cp = cp;
            rev.ps.forEach(x => { x.style.strokeDasharray = L; x.style.strokeDashoffset = L; });
          }
        }
        return { type, g, pi, bi, tb, off, tr, ring, actor, rev, pts: [], lofted: type === 'pase' && g.len > 22, team: (passer >= 0 ? pl[passer][0] : actor >= 0 ? pl[actor][0] : null), end: [a[3], a[4]] };
      });
      badges.forEach(b => { if (+b.getAttribute('data-s') === step + 1) b.style.opacity = 1; });
      // defensas reactivas: el equipo sin balón se desplaza hacia donde va el balón
      const reacts = [];
      if (react) {
        const bm = [...moves].reverse().find(m => m.type !== 'mov');
        const att = bm && bm.team, defT = att === 'A' ? 'B' : att === 'B' ? 'A' : null;
        if (bm) {
          const [tx, ty] = bm.end;
          P.forEach((p, i) => {
            if (usedP.has(i)) return; const t = pl[i][0];
            if (t === 'P') { if ((p[0] < 22 || p[0] > 83) && Math.hypot(p[0] - tx, p[1] - ty) < 40) { const ny = 34 + Math.max(-2.6, Math.min(2.6, (ty - 34) * .22)); if (Math.abs(ny - p[1]) > .15 && Math.abs(p[1] - 34) < 6) reacts.push({ i, from: p.slice(), to: [p[0], ny] }); } return; }
            if (!defT || t !== defT) return;
            const dd = Math.hypot(tx - p[0], ty - p[1]); if (dd > 16 || dd < 2) return;
            const mv = Math.min(dd * .3, 3, dd - 1.6 * k); if (mv <= .2) return;
            reacts.push({ i, from: p.slice(), to: [p[0] + (tx - p[0]) / dd * mv, p[1] + (ty - p[1]) / dd * mv] });
          });
        }
      }
      const len = Math.max(...moves.map(m => m.g.len));
      const dur = Math.min(1900, Math.max(750, len * 50)) / speed, t0 = performance.now();
      const frame = now => {
        const t = Math.min(1, (now - t0) / dur), e = t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
        moves.forEach(m => {
          const te = m.type === 'tiro' ? Math.min(1, t * 1.6) : e, q = m.g.at(te);
          if (m.pi >= 0) {
            P[m.pi] = q; setP(m.pi, q, 1 + .07 * Math.abs(Math.sin(t * Math.PI * 7)) * Math.sin(Math.PI * t));
            if (m.tr && (!m.pts.length || Math.hypot(m.pts[m.pts.length - 1][0] - q[0], m.pts[m.pts.length - 1][1] - q[1]) > .4)) { m.pts.push(q); m.tr.setAttribute('points', m.pts.map(p => p[0].toFixed(2) + ',' + p[1].toFixed(2)).join(' ')); }
          }
          if (m.ring && m.actor >= 0) { m.ring.setAttribute('cx', P[m.actor][0].toFixed(2)); m.ring.setAttribute('cy', P[m.actor][1].toFixed(2)); m.ring.setAttribute('opacity', (1 - t * .7).toFixed(2)); }
          const bq = m.type === 'cond' ? [q[0] + m.off[0] * (1 - e) + Math.sin(t * 40) * .15 * k, q[1] + m.off[1] * (1 - e)] : q;
          const h = m.lofted ? Math.sin(Math.PI * te) : 0, spin = te * m.g.len * 1.4;
          if (m.bi >= 0) { B[m.bi] = bq; setB(gb(m.bi), bq, B0[m.bi]); loft(gb(m.bi), h, spin); }
          if (m.tb) { setB(m.tb.g, bq, m.tb.o); loft(m.tb.g, h, spin); }
          if (m.rev) { const off = m.rev.L * (1 - te); m.rev.ps.forEach(x => { x.style.strokeDashoffset = off; }); if (te > .92 && m.rev.cp.dataset.mk) m.rev.cp.setAttribute('marker-end', m.rev.cp.dataset.mk); }
        });
        reacts.forEach(r => { const q = [r.from[0] + (r.to[0] - r.from[0]) * e, r.from[1] + (r.to[1] - r.from[1]) * e]; P[r.i] = q; setP(r.i, q); });
        if (t < 1) raf = requestAnimationFrame(frame);
        else {
          moves.forEach(m => {
            if (m.pi >= 0) setP(m.pi, P[m.pi]);
            if (m.ring) { m.ring.style.transition = 'opacity .4s'; m.ring.style.opacity = 0; setTimeout(() => m.ring.remove(), 450); }
            if (m.rev) m.rev.ps.forEach(x => { x.style.strokeDasharray = ''; x.style.strokeDashoffset = ''; });
            if (m.type === 'tiro') { const gl = goalAt(m.end[0], m.end[1]); if (gl) celebrate(m.end[0], m.end[1]); if (m.tb) { m.tb.g.style.transition = 'opacity .6s'; m.tb.g.style.opacity = 0; } }
            if (m.bi >= 0) loft(gb(m.bi), 0);
          });
          step++; paint(); state(); done && done();
        }
      };
      raf = requestAnimationFrame(frame);
    }
    function loopPlay() {
      if (!playing) return;
      if (step >= groups.length) {
        if (loop) { timer = setTimeout(() => { reset(); state(); timer = setTimeout(loopPlay, 400 / speed); }, 1400 / speed); }
        else { playing = false; state(); }
        return;
      }
      runStep(() => { timer = setTimeout(loopPlay, 380 / speed); });
    }
    reset(); state();
    const ctl = {
      steps: groups.length,
      play() { if (playing) return; if (step >= groups.length) reset(); playing = true; state(); timer = setTimeout(loopPlay, 150); },
      pause() { playing = false; clearTimeout(timer); state(); },
      next() { if (playing) ctl.pause(); cancelAnimationFrame(raf); if (step >= groups.length) reset(); runStep(); },
      restart() { const was = playing; playing = false; reset(); state(); if (was) ctl.play(); },
      setSpeed(x) { speed = x; },
      setLoop(b) { loop = b; },
      setReact(b) { react = b; },
      stop() { playing = false; cancelAnimationFrame(raf); clearTimeout(timer); }
    };
    if (opts.autoplay !== false) ctl.play();
    return ctl;
  };

  window.legendHTML = function () {
    const dot = (c, s) => `<i class="lg-dot" style="background:${c};border-color:${s || '#fff'}"></i>`;
    return `<div class="legend">
      <span>${dot('#e11d48')}Equipo A</span><span>${dot('#2563eb')}Equipo B</span><span>${dot('#facc15')}Comodín</span><span>${dot('#111827', '#facc15')}Portero</span>
      <span><svg width="26" height="8"><line x1="1" y1="4" x2="20" y2="4" stroke="currentColor" stroke-width="2"/><path d="M19 0 L26 4 L19 8z" fill="currentColor"/></svg>Pase</span>
      <span><svg width="26" height="8"><line x1="1" y1="4" x2="20" y2="4" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4 3"/><path d="M19 0 L26 4 L19 8z" fill="#ca8a04"/></svg>Desplazamiento</span>
      <span><svg width="26" height="8"><path d="M1 4 L4 1 L7 7 L10 1 L13 7 L16 1 L19 4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M19 0 L26 4 L19 8z" fill="currentColor"/></svg>Conducción</span>
      <span><svg width="26" height="8"><line x1="1" y1="4" x2="20" y2="4" stroke="#fb923c" stroke-width="3"/><path d="M19 0 L26 4 L19 8z" fill="#fb923c"/></svg>Tiro</span>
      <span><svg width="12" height="12"><path d="M6 1 L11 11 L1 11z" fill="#f97316"/></svg>Cono</span>
      <span><svg width="14" height="14"><circle cx="7" cy="7" r="6" fill="#0f172a"/><text x="7" y="10.5" font-size="9" text-anchor="middle" fill="#fff" font-weight="800">1</text></svg>Orden de las acciones</span>
    </div>`;
  };
})();
