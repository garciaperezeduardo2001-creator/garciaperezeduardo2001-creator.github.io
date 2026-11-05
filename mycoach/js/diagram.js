/* Motor de diagramas: dibuja una vista aérea del campo (105 x 68 m) en SVG.
   Coordenadas en metros: x = 0 (portería izquierda) → 105 (portería derecha), y = 0 (banda superior) → 68.
   Elementos de un diagrama (todos opcionales):
   v  : [x, y, ancho, alto]  vista (si falta se calcula sola)
   z  : zonas  [x, y, w, h, color?, etiqueta?]
   l  : líneas discontinuas [x1, y1, x2, y2]
   p  : jugadores [equipo, x, y, texto?]   equipo: A rojo, B azul, N comodín, P portero, E entrenador
   c  : conos [x, y, color?]
   pk : picas [x, y]
   h  : vallas [x, y, vertical?]
   esc: escaleras [x, y, largo, vertical?]
   mg : miniporterías [x, y, orientación 'L'|'R'|'U'|'D']
   g  : porterías móviles [x, y, orientación]
   b  : balones [x, y]
   a  : flechas [tipo, x1, y1, x2, y2, curva?]  tipo: pase | mov | cond | tiro
   t  : textos [x, y, texto, tamaño?]
*/
(function () {
  const L = 105, W = 68;
  const TEAM = {
    A: ['#dc2626', '#fff'], B: ['#1d4ed8', '#fff'], N: ['#facc15', '#1f2937'],
    P: ['#111827', '#facc15'], E: ['#ffffff', '#111827'], C: ['#f97316', '#fff']
  };
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

  function pitch(lw) {
    const s = [];
    for (let i = 0; i < 14; i++) s.push(`<rect x="${i * 7.5}" y="0" width="7.5" height="${W}" fill="${i % 2 ? '#16a34a' : '#15803d'}"/>`);
    const ln = `fill="none" stroke="rgba(255,255,255,.85)" stroke-width="${lw}"`;
    s.push(`<g ${ln}>
      <rect x="0" y="0" width="${L}" height="${W}"/>
      <line x1="52.5" y1="0" x2="52.5" y2="${W}"/>
      <circle cx="52.5" cy="34" r="9.15"/>
      <rect x="0" y="13.84" width="16.5" height="40.32"/><rect x="0" y="24.84" width="5.5" height="18.32"/>
      <rect x="88.5" y="13.84" width="16.5" height="40.32"/><rect x="99.5" y="24.84" width="5.5" height="18.32"/>
      <path d="M16.5 26.69 A9.15 9.15 0 0 1 16.5 41.31"/><path d="M88.5 26.69 A9.15 9.15 0 0 0 88.5 41.31"/>
      <path d="M0 1 A1 1 0 0 0 1 0"/><path d="M104 0 A1 1 0 0 0 105 1"/><path d="M0 67 A1 1 0 0 1 1 68"/><path d="M104 68 A1 1 0 0 1 105 67"/>
      <rect x="-2" y="30.34" width="2" height="7.32" fill="rgba(255,255,255,.18)"/><rect x="105" y="30.34" width="2" height="7.32" fill="rgba(255,255,255,.18)"/>
    </g>`);
    s.push(`<g fill="rgba(255,255,255,.85)"><circle cx="52.5" cy="34" r="${lw * 1.6}"/><circle cx="11" cy="34" r="${lw * 1.6}"/><circle cx="94" cy="34" r="${lw * 1.6}"/></g>`);
    return s.join('');
  }

  function goal(x, y, o, w, dep, lw) {
    // o = hacia dónde mira la boca de la portería
    const h = w / 2; let r;
    if (o === 'L' || o === 'R') { const dx = o === 'L' ? dep : -dep; r = `M${x + dx} ${y - h} L${x} ${y - h} L${x} ${y + h} L${x + dx} ${y + h}`; return `<path d="${r}" fill="rgba(255,255,255,.25)" stroke="#fff" stroke-width="${lw * 1.6}"/><line x1="${x + dx}" y1="${y - h}" x2="${x + dx}" y2="${y + h}" stroke="#fff" stroke-width="${lw}" stroke-dasharray="${lw * 2}"/>`; }
    const dy = o === 'U' ? dep : -dep; r = `M${x - h} ${y + dy} L${x - h} ${y} L${x + h} ${y} L${x + h} ${y + dy}`;
    return `<path d="${r}" fill="rgba(255,255,255,.25)" stroke="#fff" stroke-width="${lw * 1.6}"/><line x1="${x - h}" y1="${y + dy}" x2="${x + h}" y2="${y + dy}" stroke="#fff" stroke-width="${lw}" stroke-dasharray="${lw * 2}"/>`;
  }

  function arrow(a, k, players, id) {
    let [type, x1, y1, x2, y2, cv] = a; cv = cv || 0;
    const r = 0.85 * k;
    const near = (x, y) => players.some(p => Math.hypot(p[1] - x, p[2] - y) < 0.6);
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
    if (near(x1, y1)) { x1 += ux * r * 1.05; y1 += uy * r * 1.05; }
    if (near(x2, y2)) { x2 -= ux * r * 1.25; y2 -= uy * r * 1.25; }
    const mx = (x1 + x2) / 2 - uy * cv, my = (y1 + y2) / 2 + ux * cv;
    const st = { pase: ['#fff', 0.22, ''], mov: ['#fde047', 0.2, `stroke-dasharray="${0.55 * k} ${0.4 * k}"`], cond: ['#fff', 0.18, ''], tiro: ['#fbbf24', 0.34, ''] }[type] || ['#fff', .2, ''];
    const w = st[1] * k;
    let d;
    if (type === 'cond') {
      const pts = [], n = Math.max(8, Math.round(len / (0.7 * k)) * 2), amp = 0.35 * k;
      for (let i = 0; i <= n; i++) {
        const t = i / n, bx = (1 - t) ** 2 * x1 + 2 * (1 - t) * t * mx + t * t * x2, by = (1 - t) ** 2 * y1 + 2 * (1 - t) * t * my + t * t * y2;
        const tx = 2 * (1 - t) * (mx - x1) + 2 * t * (x2 - mx), ty = 2 * (1 - t) * (my - y1) + 2 * t * (y2 - my), tl = Math.hypot(tx, ty) || 1;
        const o = (i === 0 || i >= n - 1) ? 0 : (i % 2 ? amp : -amp);
        pts.push(`${(bx - ty / tl * o).toFixed(2)} ${(by + tx / tl * o).toFixed(2)}`);
      }
      d = 'M' + pts.join(' L');
    } else d = `M${x1.toFixed(2)} ${y1.toFixed(2)} Q${mx.toFixed(2)} ${my.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`;
    return `<path d="${d}" fill="none" stroke="${st[0]}" stroke-width="${w}" ${st[2]} stroke-linejoin="round" marker-end="url(#ah-${type}-${id})"/>`;
  }

  window.fieldBBox = bbox;
  window.drawField = function (d, opt = {}) {
    d = d || {};
    const id = ++uid;
    let [vx, vy, vw, vh] = d.v || bbox(d);
    const AR = 1.5;
    if (vw / vh < AR) { const nw = vh * AR; vx -= (nw - vw) / 2; vw = nw; } else { const nh = vw / AR; vy -= (nh - vh) / 2; vh = nh; }
    // Mantener la vista dentro del campo (con un pequeño margen) cuando sobra espacio
    const cl = (v, w, max) => w >= max + 8 ? v : Math.min(Math.max(v, -4), max + 4 - w);
    vx = cl(vx, vw, L); vy = cl(vy, vh, W);
    const k = vw / 40;
    const lw = Math.max(0.12, k * 0.14);
    const o = [];
    o.push(`<svg class="field" viewBox="${vx.toFixed(2)} ${vy.toFixed(2)} ${vw.toFixed(2)} ${vh.toFixed(2)}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${opt.label || 'Diagrama de la tarea'}">`);
    const mk = (t, c) => `<marker id="ah-${t}-${id}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3.6" markerHeight="3.6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="${c}"/></marker>`;
    o.push(`<defs>${mk('pase', '#fff')}${mk('mov', '#fde047')}${mk('cond', '#fff')}${mk('tiro', '#fbbf24')}</defs>`);
    o.push(`<rect x="${vx - 50}" y="${vy - 50}" width="${vw + 100}" height="${vh + 100}" fill="#166534"/>`);
    o.push(pitch(lw));
    (d.z || []).forEach(z => {
      const [x, y, w, h, col, lab] = z;
      o.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${col || '#fff'}" fill-opacity="${col ? .28 : .1}" stroke="${col || '#fff'}" stroke-width="${lw * 1.3}" stroke-dasharray="${k * .9} ${k * .5}"/>`);
      if (lab && !opt.mini) o.push(`<text x="${x + w / 2}" y="${y + h - k * .5}" font-size="${k * 1.1}" text-anchor="middle" fill="#fff" fill-opacity=".85" font-weight="700" font-family="system-ui,sans-serif">${lab}</text>`);
    });
    (d.l || []).forEach(l => o.push(`<line x1="${l[0]}" y1="${l[1]}" x2="${l[2]}" y2="${l[3]}" stroke="#fff" stroke-opacity=".8" stroke-width="${lw * 1.2}" stroke-dasharray="${k * .6} ${k * .5}"/>`));
    (d.esc || []).forEach(e => {
      const [x, y, len, vert] = e, wd = 0.8; const n = Math.round(len / 0.5);
      let s = `<rect x="${x}" y="${y}" width="${vert ? wd : len}" height="${vert ? len : wd}" fill="none" stroke="#facc15" stroke-width="${lw}"/>`;
      for (let i = 1; i < n; i++) s += vert ? `<line x1="${x}" y1="${y + i * .5}" x2="${x + wd}" y2="${y + i * .5}" stroke="#facc15" stroke-width="${lw * .8}"/>` : `<line x1="${x + i * .5}" y1="${y}" x2="${x + i * .5}" y2="${y + wd}" stroke="#facc15" stroke-width="${lw * .8}"/>`;
      o.push(s);
    });
    (d.g || []).forEach(g => o.push(goal(g[0], g[1], g[2], 7.32, 2, lw)));
    (d.mg || []).forEach(g => o.push(goal(g[0], g[1], g[2], Math.max(2, 1.2 * k), Math.max(.8, .5 * k), lw)));
    (d.h || []).forEach(h => { const s = 0.5 * k; o.push(h[2] ? `<rect x="${h[0] - s * .18}" y="${h[1] - s}" width="${s * .36}" height="${s * 2}" fill="#fb923c" stroke="#7c2d12" stroke-width="${lw * .5}"/>` : `<rect x="${h[0] - s}" y="${h[1] - s * .18}" width="${s * 2}" height="${s * .36}" fill="#fb923c" stroke="#7c2d12" stroke-width="${lw * .5}"/>`); });
    (d.pk || []).forEach(p => o.push(`<circle cx="${p[0]}" cy="${p[1]}" r="${.32 * k}" fill="#fde047" stroke="#713f12" stroke-width="${lw * .6}"/>`));
    (d.c || []).forEach(c => { const s = 0.42 * k; o.push(`<path d="M${c[0]} ${c[1] - s} L${c[0] + s * .9} ${c[1] + s * .7} L${c[0] - s * .9} ${c[1] + s * .7} z" fill="${c[2] || '#f97316'}" stroke="rgba(0,0,0,.35)" stroke-width="${lw * .5}"/>`); });
    const pl = d.p || [];
    (d.a || []).forEach((a, i) => o.push(arrow(a, k, pl, id).replace('<path ', `<path data-a="${i}" `)));
    pl.forEach((p, i) => {
      const [t, x, y, lab] = p, col = TEAM[t] || TEAM.A, r = 0.85 * k;
      o.push(`<g data-p="${i}"><circle cx="${x}" cy="${y + r * .12}" r="${r}" fill="rgba(0,0,0,.28)"/><circle cx="${x}" cy="${y}" r="${r}" fill="${col[0]}" stroke="${t === 'P' ? '#facc15' : '#fff'}" stroke-width="${lw * 1.2}"/>`
        + ((lab || t === 'P') && !opt.mini ? `<text x="${x}" y="${y + r * .38}" font-size="${r * (String(lab || 'P').length > 1 ? .85 : 1.1)}" text-anchor="middle" fill="${col[1]}" font-weight="800" font-family="system-ui,sans-serif">${lab || 'P'}</text>` : '') + '</g>');
    });
    (d.b || []).forEach((b, i) => o.push(`<g data-b="${i}"><circle cx="${b[0]}" cy="${b[1]}" r="${.36 * k}" fill="#fff" stroke="#111" stroke-width="${lw * .7}"/></g>`));
    if (!opt.mini) (d.t || []).forEach(t => o.push(`<text x="${t[0]}" y="${t[1]}" font-size="${k * (t[3] || 1.15)}" text-anchor="middle" fill="#fff" font-weight="800" font-family="system-ui,sans-serif" paint-order="stroke" stroke="rgba(0,0,0,.55)" stroke-width="${k * .25}">${t[2]}</text>`));
    o.push('</svg>');
    return o.join('');
  };

  // Animación: recorre las flechas en orden moviendo jugadores y balón
  window.animateField = function (box, d, onEnd) {
    const svg = box.querySelector('svg'); if (!svg || !(d.a && d.a.length)) { onEnd && onEnd(); return () => { }; }
    const k = svg.viewBox.baseVal.width / 40;
    const P = (d.p || []).map(p => [p[1], p[2]]), B = (d.b || []).map(b => [b[0], b[1]]);
    const P0 = P.map(p => p.slice()), B0 = B.map(b => b.slice());
    const gp = i => svg.querySelector(`[data-p="${i}"]`), gb = i => svg.querySelector(`[data-b="${i}"]`);
    const arrows = [...svg.querySelectorAll('[data-a]')];
    arrows.forEach(a => a.style.opacity = .18);
    const near = (arr, x, y, max) => { let bi = -1, bd = max; arr.forEach((p, i) => { const dd = Math.hypot(p[0] - x, p[1] - y); if (dd < bd) { bd = dd; bi = i; } }); return bi; };
    const set = (g, cur, orig) => g && g.setAttribute('transform', `translate(${(cur[0] - orig[0]).toFixed(2)} ${(cur[1] - orig[1]).toFixed(2)})`);
    let step = 0, raf = 0, stop = false, temp = null;
    const run = () => {
      if (stop) return;
      if (step >= d.a.length) { onEnd && onEnd(); return; }
      const [type, x1, y1, x2, y2, cv = 0] = d.a[step];
      const len = Math.hypot(x2 - x1, y2 - y1) || 1, ux = (x2 - x1) / len, uy = (y2 - y1) / len;
      const cx = (x1 + x2) / 2 - uy * cv, cy = (y1 + y2) / 2 + ux * cv;
      const at = t => [(1 - t) ** 2 * x1 + 2 * (1 - t) * t * cx + t * t * x2, (1 - t) ** 2 * y1 + 2 * (1 - t) * t * cy + t * t * y2];
      const pi = type === 'mov' || type === 'cond' ? near(P, x1, y1, 4) : -1;
      let bi = type === 'mov' ? -1 : near(B, x1, y1, type === 'cond' ? 3 : 5);
      if (bi < 0 && type !== 'mov') { // balón temporal
        temp = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        temp.setAttribute('r', .36 * k); temp.setAttribute('fill', '#fff'); temp.setAttribute('stroke', '#111'); temp.setAttribute('stroke-width', k * .1);
        svg.appendChild(temp);
      }
      const bOff = bi >= 0 && pi >= 0 ? [B[bi][0] - P[pi][0], B[bi][1] - P[pi][1]] : [0, 0];
      arrows[step] && (arrows[step].style.opacity = 1);
      const dur = Math.min(1600, Math.max(650, len * 45)), t0 = performance.now();
      const frame = now => {
        if (stop) return;
        const t = Math.min(1, (now - t0) / dur), e = t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2, q = at(e);
        if (pi >= 0) { P[pi] = q; set(gp(pi), q, P0[pi]); }
        if (bi >= 0) { B[bi] = type === 'cond' ? [q[0] + bOff[0] * (1 - e), q[1] + bOff[1] * (1 - e)] : q; set(gb(bi), B[bi], B0[bi]); }
        if (temp) { temp.setAttribute('cx', q[0]); temp.setAttribute('cy', q[1]); }
        if (t < 1) raf = requestAnimationFrame(frame);
        else { arrows[step] && (arrows[step].style.opacity = .55); if (temp) { temp.remove(); temp = null; } step++; setTimeout(run, 250); }
      };
      raf = requestAnimationFrame(frame);
    };
    setTimeout(run, 300);
    return () => { stop = true; cancelAnimationFrame(raf); if (temp) temp.remove(); };
  };

  window.legendHTML = function () {
    const dot = (c, s) => `<i class="lg-dot" style="background:${c};border-color:${s || '#fff'}"></i>`;
    return `<div class="legend">
      <span>${dot('#dc2626')}Equipo A</span><span>${dot('#1d4ed8')}Equipo B</span><span>${dot('#facc15')}Comodín</span><span>${dot('#111827', '#facc15')}Portero</span>
      <span><svg width="26" height="8"><line x1="1" y1="4" x2="20" y2="4" stroke="currentColor" stroke-width="2"/><path d="M19 0 L26 4 L19 8z" fill="currentColor"/></svg>Pase</span>
      <span><svg width="26" height="8"><line x1="1" y1="4" x2="20" y2="4" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4 3"/><path d="M19 0 L26 4 L19 8z" fill="#ca8a04"/></svg>Desplazamiento</span>
      <span><svg width="26" height="8"><path d="M1 4 L4 1 L7 7 L10 1 L13 7 L16 1 L19 4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M19 0 L26 4 L19 8z" fill="currentColor"/></svg>Conducción</span>
      <span><svg width="26" height="8"><line x1="1" y1="4" x2="20" y2="4" stroke="#f59e0b" stroke-width="3"/><path d="M19 0 L26 4 L19 8z" fill="#f59e0b"/></svg>Tiro</span>
      <span><svg width="12" height="12"><path d="M6 1 L11 11 L1 11z" fill="#f97316"/></svg>Cono</span>
    </div>`;
  };
})();
