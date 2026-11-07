/* Editor de tareas: pizarra táctica + formulario.
   TaskEditor.mount(contenedor, tarea, { onSave(tarea), onCancel() }) */
(function () {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const r1 = v => Math.round(v * 10) / 10;
  const VIEWS = {
    full: { n: 'Campo completo', v: [-4, -4, 113, 76] },
    half: { n: 'Medio campo', v: [48, -3, 60, 74] },
    mid: { n: 'Zona central', v: [27.5, 11, 50, 46] },
    area: { n: 'Área', v: [78, 8, 30, 52] }
  };
  const VIEWS7 = {
    full: { n: 'Campo completo', v: [-3, -3, 66, 46] },
    half: { n: 'Medio campo', v: [27, -2, 36, 44] },
    mid: { n: 'Zona central', v: [15, 6, 30, 28] },
    area: { n: 'Área', v: [42, 4, 21, 32] }
  };
  // Pasa un dibujo de un campo a otro manteniendo su sitio relativo
  function scaleD(d, sx, sy) {
    const sm = (sx + sy) / 2, R = v => Math.round(v * 10) / 10;
    (d.p || []).forEach(p => { p[1] = R(p[1] * sx); p[2] = R(p[2] * sy); });
    ['c', 'pk', 'h', 'b', 'mg', 'g', 't'].forEach(k => (d[k] || []).forEach(e => { e[0] = R(e[0] * sx); e[1] = R(e[1] * sy); }));
    (d.esc || []).forEach(e => { e[0] = R(e[0] * sx); e[1] = R(e[1] * sy); e[2] = R(e[2] * sm); });
    (d.z || []).forEach(z => { z[0] = R(z[0] * sx); z[1] = R(z[1] * sy); z[2] = R(z[2] * sx); z[3] = R(z[3] * sy); });
    (d.a || []).forEach(a => { a[1] = R(a[1] * sx); a[2] = R(a[2] * sy); a[3] = R(a[3] * sx); a[4] = R(a[4] * sy); if (a[5]) a[5] = R(a[5] * sm); });
    (d.l || []).forEach(l => { l[0] = R(l[0] * sx); l[1] = R(l[1] * sy); l[2] = R(l[2] * sx); l[3] = R(l[3] * sy); });
  }
  const TOOLS = [
    ['move', '✋', 'Mover'], ['A', '🔴', 'Equipo A'], ['B', '🔵', 'Equipo B'], ['N', '🟡', 'Comodín'], ['P', '🧤', 'Portero'], ['E', '⚪', 'Entrenador'],
    ['c', '🔺', 'Cono'], ['b', '⚽', 'Balón'], ['pk', '📍', 'Pica'], ['h', '🚧', 'Valla'], ['esc', '🪜', 'Escalera'], ['mg', '🥅', 'Miniportería'], ['g', '🥅', 'Portería'],
    ['z', '▭', 'Zona'], ['pase', '➝', 'Pase'], ['mov', '⇢', 'Desplaz.'], ['cond', '〰', 'Conducción'], ['tiro', '➔', 'Tiro'], ['t', 'T', 'Texto'], ['del', '🗑', 'Borrar']
  ];
  const CONE_COL = ['#f97316', '#facc15', '#22c55e', '#3b82f6', '#ef4444'];
  const CATS = { tt: 'Técnico-táctico', fis: 'Físico condicional', pre: 'Prevención y recuperación', por: 'Porteros', jue: 'Juegos y dinámicas' };
  const MDS = ['MD+1', 'MD+2', 'MD-4', 'MD-3', 'MD-2', 'MD-1'];
  const ED = { P: 'Prebenjamín', B: 'Benjamín', A: 'Alevín', I: 'Infantil', C: 'Cadete', J: 'Juvenil', S: 'Sénior' };
  const CARGAS = ['Activación', 'Tensión', 'Duración', 'Velocidad', 'Recuperación', 'Mixta'];
  const PT_KEYS = ['c', 'pk', 'h', 'b', 'mg', 'g', 't', 'esc'];

  window.TaskEditor = {
    mount(root, task, cb) {
      const t = JSON.parse(JSON.stringify(task));
      const d = t.d = t.d || {};
      ['p', 'z', 'a', 'l', ...PT_KEYS].forEach(k => { d[k] = d[k] || []; });
      if (!d.v) d.v = (window.fieldBBox ? fieldBBox(d) : VIEWS.full.v);
      let tool = 'A', sel = null, drag = null, coneCol = 0, label = '';
      const hist = [];
      const snap = () => { hist.push(JSON.stringify(d)); if (hist.length > 60) hist.shift(); };
      const tipos = [...new Set(TAREAS.map(x => x.tipo))].sort();

      const chk = (name, val, lab, on) => `<label class="ck"><input type="checkbox" name="${name}" value="${val}" ${on ? 'checked' : ''}><span>${lab}</span></label>`;
      const opt = (o, cur) => Object.entries(o).map(([k, v]) => `<option value="${k}" ${k == cur ? 'selected' : ''}>${v}</option>`).join('');
      root.innerHTML = `
      <div class="editor">
        <h1>${cb.title || (task.id ? 'Editar tarea' : 'Nueva tarea')}</h1>
        <div class="tools" id="tools">${TOOLS.map(([k, i, n]) => `<button data-tool="${k}" title="${n}"><span>${i}</span>${n}</button>`).join('')}</div>
        <div class="topts" id="topts"></div>
        <div class="board" id="board"></div>
        <div class="bopts">
          <select id="pitch" aria-label="Campo"><option value="11" ${d.f7 ? '' : 'selected'}>Campo de fútbol 11</option><option value="7" ${d.f7 ? 'selected' : ''}>Campo de fútbol 7</option></select>
          <select id="view"></select>
          <button class="btn" id="undo">↶ Deshacer</button>
          <button class="btn" id="delsel" disabled>Eliminar seleccionado</button>
          <button class="btn ghost" id="wipe">Limpiar</button>
        </div>
        <details class="anp" id="anp"><summary>🎬 Animación a tu gusto <small id="ansum"></small></summary>
          <p class="hint sm">Las flechas se animan en el orden en que las dibujaste. Aquí puedes cambiar el orden, juntar varias en el mismo paso (se mueven a la vez) y decidir si los defensores reaccionan solos.</p>
          <div id="anl" class="anl"></div>
          <div class="acts"><label class="chk"><input type="checkbox" id="anr"> Defensores y portero reaccionan al balón</label>
          <button class="btn" type="button" id="anauto">Orden automático</button><button class="btn pri" type="button" id="anplay">▶ Probar animación</button></div>
        </details>
        <p class="hint sm">Elige una herramienta y toca el campo. Para zonas y flechas, arrastra. Con <b>Mover</b>: arrastra cualquier elemento, el centro de una flecha la curva, una esquina de la zona la redimensiona y tocar una portería la gira o tocar un jugador le pone texto.</p>

        <form id="tf" class="tform" autocomplete="off">
          <label class="full">Nombre de la tarea*<input name="n" required value="${esc(t.n)}" placeholder="Ej.: Rondo 5v2 con transición"></label>
          <label>Categoría<select name="cat">${opt(CATS, t.cat || 'tt')}</select></label>
          <label>Tipo<input name="tipo" list="tipos" value="${esc(t.tipo)}" placeholder="Rondo, Fuerza…"><datalist id="tipos">${tipos.map(x => `<option value="${esc(x)}">`).join('')}</datalist></label>
          <fieldset class="full"><legend>Día recomendado*</legend>${MDS.map(m => chk('md', m, m, (t.md || []).includes(m))).join('')}</fieldset>
          <label>Intensidad<select name="int">${opt({ 1: 'Baja', 2: 'Media', 3: 'Alta', 4: 'Máxima' }, t.int || 2)}</select></label>
          <label>RPE<input name="rpe" value="${esc(t.rpe)}" placeholder="6-7"></label>
          <label>Carga dominante<select name="carga">${CARGAS.map(c => `<option ${c === t.carga ? 'selected' : ''}>${c}</option>`).join('')}</select></label>
          <label>Parte de la sesión<select name="fase">${opt({ cal: 'Calentamiento', pri: 'Parte principal', vc: 'Vuelta a la calma' }, t.fase || 'pri')}</select></label>
          <label>Dificultad<select name="dif">${opt({ 1: 'Básica', 2: 'Media', 3: 'Avanzada' }, t.dif || 2)}</select></label>
          <fieldset class="full"><legend>Categorías de edad</legend>${Object.entries(ED).map(([k, v]) => chk('ed', k, v, (t.ed || 'ICJS').includes(k))).join('')}</fieldset>
          <label>Jugadores<input name="jug" value="${esc(t.jug)}" placeholder="4v4+2"></label>
          <label>Nº de jugadores<input name="np" type="number" min="1" value="${t.np || ''}"></label>
          <label>Largo (m)<input name="ew" type="number" min="1" value="${t.esp ? t.esp[0] : ''}"></label>
          <label>Ancho (m)<input name="eh" type="number" min="1" value="${t.esp ? t.esp[1] : ''}"></label>
          <label>Series<input name="ser" value="${esc(t.ser)}" placeholder="4 x 4'"></label>
          <label>Recuperación<input name="rec" value="${esc(t.rec)}" placeholder="1'30&quot;"></label>
          <label>Duración total (min)<input name="dur" type="number" min="1" value="${t.dur || ''}"></label>
          <label class="full">Objetivo<input name="obj" value="${esc(t.obj)}"></label>
          <label class="full">Descripción<textarea name="desc" rows="4">${esc(t.desc)}</textarea></label>
          <label class="full">Reglas <small>(una por línea)</small><textarea name="reglas" rows="3">${esc((t.reglas || []).join('\n'))}</textarea></label>
          <label class="full">Consignas <small>(una por línea)</small><textarea name="cons" rows="3">${esc((t.cons || []).join('\n'))}</textarea></label>
          <label class="full">Variantes <small>(una por línea; empieza con + o −)</small><textarea name="var" rows="3">${esc((t.var || []).join('\n'))}</textarea></label>
          <div class="acts full"><button class="btn pri" type="submit">💾 Guardar tarea</button><button class="btn" type="button" id="cancel">Cancelar</button></div>
        </form>
      </div>`;
      const $ = s => root.querySelector(s);
      const board = $('#board');

      // ----- Pizarra -----
      let anCtl = null;
      function render() {
        if (anCtl) { anCtl.stop(); anCtl = null; }
        let svg = drawField(d, { label: 'Pizarra' });
        if (sel) svg = svg.replace('</svg>', selMark() + '</svg>');
        board.innerHTML = svg;
        $('#delsel').disabled = !sel;
        renderAnim();
      }
      const ANI = { pase: '➝ Pase', mov: '⤳ Desplazamiento', cond: '〰 Conducción', tiro: '➠ Tiro' };
      function renderAnim() {
        const box = $('#anl'); if (!box) return;
        const a = d.a || [], st = fieldSteps(d), stepOf = i => st.findIndex(g => g.includes(i)) + 1, n = Math.max(st.length, a.length);
        $('#ansum').textContent = a.length ? `· ${a.length} flechas en ${st.length} pasos${a.some(x => x[6] != null) ? ' (orden propio)' : ''}` : '';
        $('#anr').checked = !d.nr;
        box.innerHTML = a.length ? a.map((x, i) => `<div class="anr ${sel && sel.key === 'a' && sel.i === i ? 'on' : ''}" data-i="${i}">
            <b class="ann">${stepOf(i)}</b><span class="ant" data-pick="${i}">${ANI[x[0]] || x[0]}</span>
            <select data-st="${i}" aria-label="Paso"><option value="">Auto</option>${[...Array(n)].map((_, k) => `<option value="${k + 1}" ${x[6] === k + 1 ? 'selected' : ''}>Paso ${k + 1}</option>`).join('')}</select>
            <button type="button" data-up="${i}" ${i ? '' : 'disabled'} aria-label="Subir">▲</button><button type="button" data-dn="${i}" ${i < a.length - 1 ? '' : 'disabled'} aria-label="Bajar">▼</button></div>`).join('')
          : '<p class="sub">Dibuja flechas (pase, desplazamiento, conducción o tiro) para crear la animación.</p>';
        box.querySelectorAll('[data-st]').forEach(sl => sl.onchange = () => {
          snap(); const i = +sl.dataset.st, v = sl.value;
          // al fijar un paso, las demás flechas sin paso conservan su sitio actual
          if (v && !a.some(x => x[6] != null)) { const s0 = fieldSteps(d); a.forEach((x, j) => { x[6] = s0.findIndex(g => g.includes(j)) + 1; }); }
          if (v) a[i][6] = +v; else a[i].length = Math.min(a[i].length, 6);
          a.forEach(x => { if (x[5] == null && x.length > 6) x[5] = 0; });
          render();
        });
        const swap = (i, j) => { snap(); [a[i], a[j]] = [a[j], a[i]]; if (sel && sel.key === 'a') sel = { key: 'a', i: j }; render(); };
        box.querySelectorAll('[data-up]').forEach(b => b.onclick = () => swap(+b.dataset.up, +b.dataset.up - 1));
        box.querySelectorAll('[data-dn]').forEach(b => b.onclick = () => swap(+b.dataset.dn, +b.dataset.dn + 1));
        box.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => { sel = { key: 'a', i: +b.dataset.pick }; setTool('move'); sel = { key: 'a', i: +b.dataset.pick }; render(); });
      }
      const K = () => { const vb = board.querySelector('svg').viewBox.baseVal; return vb.width / 40; };
      function selMark() {
        const k = (d.v[2] > 0 ? Math.max(d.v[2], d.v[3] * 1.5) : 40) / 40;
        const ring = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#fde047" stroke-width="${k * .2}" stroke-dasharray="${k * .5} ${k * .3}"/>`;
        const h = (x, y) => `<circle cx="${x}" cy="${y}" r="${k * .45}" fill="#fde047" stroke="#111" stroke-width="${k * .08}"/>`;
        const { key, i } = sel, e = d[key][i]; if (!e) return '';
        if (key === 'p') return ring(e[1], e[2], k * 1.3);
        if (key === 'a') { const m = arrowMid(e); return h(e[1], e[2]) + h(e[3], e[4]) + h(m[0], m[1]); }
        if (key === 'z') return `<rect x="${e[0]}" y="${e[1]}" width="${e[2]}" height="${e[3]}" fill="none" stroke="#fde047" stroke-width="${k * .2}"/>` + [[0, 0], [1, 0], [0, 1], [1, 1]].map(([a, b]) => h(e[0] + a * e[2], e[1] + b * e[3])).join('');
        return ring(e[0], e[1], k * 1.1);
      }
      function arrowMid(a) {
        const [, x1, y1, x2, y2, cv = 0] = a, len = Math.hypot(x2 - x1, y2 - y1) || 1, ux = (x2 - x1) / len, uy = (y2 - y1) / len;
        return [(x1 + x2) / 2 - uy * cv / 2, (y1 + y2) / 2 + ux * cv / 2];
      }
      function pt(ev) {
        const svg = board.querySelector('svg'), p = svg.createSVGPoint(); p.x = ev.clientX; p.y = ev.clientY;
        const q = p.matrixTransform(svg.getScreenCTM().inverse()); return [q.x, q.y];
      }
      function hit(x, y) {
        const th = K() * 1.6; let best = null, bd = th;
        const try_ = (dist, h) => { if (dist < bd) { bd = dist; best = h; } };
        d.p.forEach((e, i) => try_(Math.hypot(e[1] - x, e[2] - y), { key: 'p', i, part: 'pt' }));
        PT_KEYS.forEach(key => d[key].forEach((e, i) => try_(Math.hypot(e[0] - x, e[1] - y), { key, i, part: 'pt' })));
        d.a.forEach((e, i) => {
          try_(Math.hypot(e[1] - x, e[2] - y), { key: 'a', i, part: 'p1' });
          try_(Math.hypot(e[3] - x, e[4] - y), { key: 'a', i, part: 'p2' });
          const m = arrowMid(e); try_(Math.hypot(m[0] - x, m[1] - y) * .9, { key: 'a', i, part: 'mid' });
        });
        d.z.forEach((e, i) => [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([a, b]) => try_(Math.hypot(e[0] + a * e[2] - x, e[1] + b * e[3] - y), { key: 'z', i, part: 'c', a, b })));
        if (best) return best;
        for (let i = d.z.length - 1; i >= 0; i--) { const e = d.z[i]; if (x >= e[0] && x <= e[0] + e[2] && y >= e[1] && y <= e[1] + e[3]) return { key: 'z', i, part: 'in' }; }
        return null;
      }
      const autoDir = x => x > (d.f7 ? 30 : 52.5) ? 'L' : 'R';
      const nearPlayer = (x, y) => { const p = d.p.find(e => Math.hypot(e[1] - x, e[2] - y) < K() * 1.2); return p ? [p[1], p[2]] : [x, y]; };

      board.addEventListener('pointerdown', ev => {
        if (!board.querySelector('svg')) return;
        ev.preventDefault();
        const [x, y] = pt(ev);
        board.setPointerCapture(ev.pointerId);
        if (tool === 'move') {
          const h = hit(x, y); sel = h;
          if (h) { snap(); drag = { h, x0: x, y0: y, orig: JSON.parse(JSON.stringify(d[h.key][h.i])), moved: false }; }
          render(); return;
        }
        if (tool === 'del') { const h = hit(x, y); if (h) { snap(); d[h.key].splice(h.i, 1); sel = null; render(); } return; }
        snap();
        if (['A', 'B', 'N', 'P', 'E'].includes(tool)) { const e = [tool, r1(x), r1(y)]; if (tool === 'E') e.push('E'); else if (label) e.push(label); d.p.push(e); bumpLabel(); }
        else if (tool === 'c') d.c.push([r1(x), r1(y), CONE_COL[coneCol]]);
        else if (['b', 'pk', 'h'].includes(tool)) d[tool].push([r1(x), r1(y)]);
        else if (tool === 'esc') d.esc.push([r1(x - 2.5), r1(y - .4), 5]);
        else if (tool === 'mg' || tool === 'g') d[tool].push([r1(x), r1(y), autoDir(x)]);
        else if (tool === 't') { const s = prompt('Texto'); if (s) d.t.push([r1(x), r1(y), s]); else hist.pop(); }
        else if (tool === 'z') { d.z.push([r1(x), r1(y), 0, 0]); drag = { new: 'z', x0: x, y0: y, i: d.z.length - 1 }; }
        else { const [sx, sy] = nearPlayer(x, y); d.a.push([tool, r1(sx), r1(sy), r1(sx), r1(sy), 0]); drag = { new: 'a', i: d.a.length - 1 }; }
        render();
      });
      board.addEventListener('pointermove', ev => {
        if (!drag) return;
        const [x, y] = pt(ev);
        if (drag.new === 'z') { const e = d.z[drag.i]; e[0] = r1(Math.min(x, drag.x0)); e[1] = r1(Math.min(y, drag.y0)); e[2] = r1(Math.abs(x - drag.x0)); e[3] = r1(Math.abs(y - drag.y0)); render(); return; }
        if (drag.new === 'a') { const e = d.a[drag.i]; e[3] = r1(x); e[4] = r1(y); render(); return; }
        const { h, orig } = drag, dx = x - drag.x0, dy = y - drag.y0;
        if (Math.hypot(dx, dy) > K() * .3) drag.moved = true;
        if (!drag.moved) return;
        const e = d[h.key][h.i];
        if (h.key === 'p') { e[1] = r1(orig[1] + dx); e[2] = r1(orig[2] + dy); }
        else if (h.key === 'a') {
          if (h.part === 'p1') { e[1] = r1(orig[1] + dx); e[2] = r1(orig[2] + dy); }
          else if (h.part === 'p2') { e[3] = r1(orig[3] + dx); e[4] = r1(orig[4] + dy); }
          else { const len = Math.hypot(e[3] - e[1], e[4] - e[2]) || 1, ux = (e[3] - e[1]) / len, uy = (e[4] - e[2]) / len; const mx = (e[1] + e[3]) / 2, my = (e[2] + e[4]) / 2; e[5] = r1(2 * ((x - mx) * -uy + (y - my) * ux)); }
        } else if (h.key === 'z') {
          if (h.part === 'in') { e[0] = r1(orig[0] + dx); e[1] = r1(orig[1] + dy); }
          else { const fx = orig[0] + (1 - h.a) * orig[2], fy = orig[1] + (1 - h.b) * orig[3]; e[0] = r1(Math.min(x, fx)); e[1] = r1(Math.min(y, fy)); e[2] = r1(Math.abs(x - fx)); e[3] = r1(Math.abs(y - fy)); }
        } else { e[0] = r1(orig[0] + dx); e[1] = r1(orig[1] + dy); }
        render();
      });
      const end = () => {
        if (!drag) return;
        if (drag.new === 'z') { const e = d.z[drag.i]; if (e[2] < 1.5 || e[3] < 1.5) { d.z.splice(drag.i, 1); hist.pop(); } }
        else if (drag.new === 'a') { const e = d.a[drag.i]; const [ex, ey] = nearPlayer(e[3], e[4]); e[3] = r1(ex); e[4] = r1(ey); if (Math.hypot(e[3] - e[1], e[4] - e[2]) < 1) { d.a.splice(drag.i, 1); hist.pop(); } }
        else if (!drag.moved) {
          hist.pop();
          const { h } = drag, e = d[h.key][h.i];
          if (h.key === 'mg' || h.key === 'g') { snap(); const o = ['L', 'U', 'R', 'D']; e[2] = o[(o.indexOf(e[2]) + 1) % 4]; }
          else if (h.key === 'p' && e[0] !== 'E') { const s = prompt('Texto del jugador (número, letra o vacío)', e[3] || ''); if (s !== null) { snap(); if (s.trim()) e[3] = s.trim().slice(0, 3); else e.length = 3; } }
          else if (h.key === 'c') { snap(); e[2] = CONE_COL[(CONE_COL.indexOf(e[2]) + 1) % CONE_COL.length]; }
        }
        drag = null; render();
      };
      board.addEventListener('pointerup', end);
      board.addEventListener('pointercancel', end);

      function bumpLabel() { if (/^\d+$/.test(label)) { label = String(+label + 1); const i = $('#plab'); if (i) i.value = label; } }
      function toolOpts() {
        const o = $('#topts');
        if (['A', 'B', 'N'].includes(tool)) o.innerHTML = `<label>Texto del jugador <input id="plab" value="${esc(label)}" maxlength="3" placeholder="opcional: 1, 9, LD…"></label><small>Si es un número, sube solo (1, 2, 3…)</small>`;
        else if (tool === 'c') o.innerHTML = `<span>Color:</span>${CONE_COL.map((c, i) => `<button class="sw ${i === coneCol ? 'on' : ''}" data-col="${i}" style="background:${c}"></button>`).join('')}`;
        else if (tool === 'mg' || tool === 'g') o.innerHTML = '<small>Se orienta sola hacia el centro. Con Mover, tócala para girarla.</small>';
        else if (['pase', 'mov', 'cond', 'tiro'].includes(tool)) o.innerHTML = '<small>Arrastra desde el origen hasta el destino. Si empiezas sobre un jugador, la flecha sale de él.</small>';
        else if (tool === 'z') o.innerHTML = '<small>Arrastra para dibujar el espacio de juego.</small>';
        else o.innerHTML = '';
        const i = $('#plab'); if (i) i.oninput = () => label = i.value.trim();
        o.querySelectorAll('[data-col]').forEach(b => b.onclick = () => { coneCol = +b.dataset.col; toolOpts(); });
      }
      function setTool(k) { tool = k; if (k !== 'move') sel = null; root.querySelectorAll('[data-tool]').forEach(b => b.classList.toggle('on', b.dataset.tool === k)); toolOpts(); render(); }
      $('#tools').onclick = e => { const b = e.target.closest('[data-tool]'); if (b) setTool(b.dataset.tool); };
      const VW = () => d.f7 ? VIEWS7 : VIEWS;
      const viewOpts = () => { $('#view').innerHTML = `${Object.entries(VW()).map(([k, v]) => `<option value="${k}">${v.n}</option>`).join('')}<option value="fit">Ajustar a lo dibujado</option><option value="" selected disabled>Vista…</option>`; };
      viewOpts();
      $('#view').onchange = e => { snap(); const v = e.target.value; d.v = v === 'fit' ? fieldBBox({ ...d, v: undefined }) : VW()[v].v.slice(); e.target.value = ''; render(); };
      $('#pitch').onchange = e => {
        const to7 = e.target.value === '7'; if (to7 === !!d.f7) return; snap();
        if (to7) { scaleD(d, 60 / 105, 40 / 68); d.f7 = true; } else { scaleD(d, 105 / 60, 68 / 40); delete d.f7; }
        d.v = VW().full.v.slice(); viewOpts(); render();
      };
      $('#undo').onclick = () => { if (!hist.length) return; const s = JSON.parse(hist.pop()); Object.keys(d).forEach(k => delete d[k]); Object.assign(d, s); sel = null; $('#pitch').value = d.f7 ? '7' : '11'; viewOpts(); render(); };
      $('#anr').onchange = e => { snap(); if (e.target.checked) delete d.nr; else d.nr = true; };
      $('#anauto').onclick = () => { snap(); (d.a || []).forEach(x => { if (x.length > 6) x.length = 6; }); render(); };
      $('#anplay').onclick = () => {
        if (!(d.a || []).length) return;
        if (anCtl) { anCtl.stop(); anCtl = null; }
        const tmp = JSON.parse(JSON.stringify(d)); board.innerHTML = drawField(tmp, { label: 'Animación' });
        anCtl = animateField(board, tmp, { autoplay: true, loop: false, speed: 1, react: !d.nr, onState: s => { $('#anplay').textContent = s.done ? '▶ Probar animación' : `⏸ Paso ${s.step}/${s.total}`; if (s.done) setTimeout(() => { if (anCtl && board.isConnected) { anCtl.stop(); anCtl = null; render(); } }, 1500); } });
      };
      $('#delsel').onclick = () => { if (!sel) return; snap(); d[sel.key].splice(sel.i, 1); sel = null; render(); };
      $('#wipe').onclick = () => { if (!confirm('¿Borrar todo lo dibujado?')) return; snap(); ['p', 'z', 'a', 'l', ...PT_KEYS].forEach(k => d[k] = []); sel = null; render(); };

      // ----- Formulario -----
      $('#cancel').onclick = () => cb.onCancel();
      $('#tf').onsubmit = e => {
        e.preventDefault();
        const f = new FormData(e.target), g = k => (f.get(k) || '').toString().trim(), lines = k => g(k).split('\n').map(s => s.trim()).filter(Boolean);
        const md = f.getAll('md'); if (!md.length) { alert('Marca al menos un día recomendado (MD).'); return; }
        const out = {
          ...t, own: true, n: g('n'), cat: g('cat'), tipo: g('tipo') || 'Tarea propia', md, int: +g('int'), rpe: g('rpe') || ['3', '5', '7', '9'][+g('int') - 1],
          carga: g('carga'), fase: g('fase'), dif: +g('dif'), ed: f.getAll('ed').join('') || 'ICJS', jug: g('jug') || '—', np: +g('np') || 0,
          esp: [+g('ew') || 0, +g('eh') || 0], ser: g('ser') || '—', rec: g('rec') || '—', dur: +g('dur') || 10,
          obj: g('obj'), desc: g('desc'), reglas: lines('reglas'), cons: lines('cons'), var: lines('var')
        };
        const cnt = k => d.p.filter(e => e[0] === k).length;
        if (!out.np) out.np = d.p.filter(e => e[0] !== 'E').length;
        if (out.jug === '—' && (cnt('A') || cnt('B'))) out.jug = `${cnt('A')}v${cnt('B')}` + (cnt('N') ? '+' + cnt('N') : '') + (cnt('P') ? '+' + cnt('P') + 'P' : '');
        if (!out.esp[0] && d.z[0]) out.esp = [Math.round(d.z[0][2]), Math.round(d.z[0][3])];
        ['p', 'z', 'a', 'l', ...PT_KEYS].forEach(k => { if (!d[k].length) delete d[k]; });
        out.d = d;
        cb.onSave(out);
      };
      setTool(d.p && d.p.length ? 'move' : 'A');
    }
  };
})();
