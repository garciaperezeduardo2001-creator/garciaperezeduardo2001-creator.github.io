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
    ['c', 'pk', 'h', 'b', 'mg', 'g', 't', 'sp', 'ar', 'mq', 'cj', 'bm', 'sb'].forEach(k => (d[k] || []).forEach(e => { e[0] = R(e[0] * sx); e[1] = R(e[1] * sy); }));
    (d.fh || []).forEach(f => { f[1] = f[1].map((v, i) => R(v * (i % 2 ? sy : sx))); });
    (d.esc || []).forEach(e => { e[0] = R(e[0] * sx); e[1] = R(e[1] * sy); e[2] = R(e[2] * sm); });
    (d.z || []).forEach(z => { z[0] = R(z[0] * sx); z[1] = R(z[1] * sy); z[2] = R(z[2] * sx); z[3] = R(z[3] * sy); });
    (d.a || []).forEach(a => { a[1] = R(a[1] * sx); a[2] = R(a[2] * sy); a[3] = R(a[3] * sx); a[4] = R(a[4] * sy); if (a[5]) a[5] = R(a[5] * sm); });
    (d.l || []).forEach(l => { l[0] = R(l[0] * sx); l[1] = R(l[1] * sy); l[2] = R(l[2] * sx); l[3] = R(l[3] * sy); });
  }
  // ---- herramientas por grupos, con iconos dibujados sobre césped ----
  const G = '<rect width="24" height="24" rx="6" fill="#1f8a43"/><path d="M12 0v24" stroke="#25994c" stroke-width="6" opacity=".6"/>';
  const ic = (inner, bg = true) => `<svg viewBox="0 0 24 24" aria-hidden="true">${bg ? G : ''}${inner}</svg>`;
  const plIc = (f, s, t, tc) => ic(`<circle cx="12" cy="12" r="7" fill="${f}" stroke="${s}" stroke-width="1.6"/>${t ? `<text x="12" y="15.6" font-size="9.5" font-weight="800" text-anchor="middle" fill="${tc}" font-family="system-ui,sans-serif">${t}</text>` : ''}`);
  const ICON = {
    move: ic('<path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>', false),
    del: ic('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>', false),
    A: plIc('#e11d48', '#fff'), B: plIc('#2563eb', '#fff'), C: plIc('#f97316', '#fff'), N: plIc('#facc15', '#fff'), P: plIc('#111827', '#facc15', 'P', '#facc15'), E: plIc('#fff', '#9ca3af', 'E', '#111827'),
    c: ic('<path d="M7 18.5 12 5l5 13.5z" fill="#f97316" stroke="rgba(0,0,0,.35)" stroke-width=".8" stroke-linejoin="round"/><path d="M9.3 12.5h5.4" stroke="#fff" stroke-width="1.6"/>'),
    sp: ic('<circle cx="12" cy="12" r="6.5" fill="#facc15" stroke="rgba(0,0,0,.35)" stroke-width=".8"/><circle cx="12" cy="12" r="2.2" fill="#14632f"/>'),
    pk: ic('<path d="M12 12l7 4.5" stroke="rgba(0,0,0,.35)" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="12" r="3.4" fill="#fde047" stroke="#713f12" stroke-width="1"/><circle cx="12" cy="12" r="1.2" fill="#713f12"/>'),
    h: ic('<rect x="4.5" y="9" width="2" height="6" rx=".8" fill="#1f2937"/><rect x="17.5" y="9" width="2" height="6" rx=".8" fill="#1f2937"/><rect x="5" y="10.8" width="14" height="2.4" rx="1.2" fill="#fb923c" stroke="#7c2d12" stroke-width=".5"/>'),
    esc: ic('<rect x="3" y="8.5" width="18" height="7" fill="rgba(250,204,21,.2)"/><path d="M6 8.5v7M9 8.5v7M12 8.5v7M15 8.5v7M18 8.5v7" stroke="#facc15" stroke-width="1.3"/><path d="M3 8.5h18M3 15.5h18" stroke="#1f2937" stroke-width="1.5"/>'),
    ar: ic('<circle cx="12" cy="12" r="6.8" fill="none" stroke="#ef4444" stroke-width="2.2"/>'),
    mq: ic('<ellipse cx="12" cy="12" rx="8" ry="4" fill="#facc15" stroke="#713f12" stroke-width=".8"/><circle cx="12" cy="12" r="2.8" fill="#1f2937" stroke="#facc15" stroke-width=".6"/>'),
    cj: ic('<rect x="5" y="6.5" width="14" height="11" rx="1.4" fill="#92400e"/><rect x="6.6" y="8.1" width="10.8" height="7.8" rx=".8" fill="#d97706"/><rect x="10" y="9.2" width="4" height="1.4" rx=".7" fill="#451a03" opacity=".6"/>'),
    b: ic('<circle cx="12" cy="12" r="5.6" fill="#fff" stroke="#111" stroke-width=".9"/><path d="m12 9.6 2.3 1.7-.9 2.7h-2.8l-.9-2.7z" fill="#1f2937"/>'),
    bm: ic('<circle cx="12" cy="12" r="6.2" fill="#374151" stroke="#030712" stroke-width=".8"/><path d="M5.8 12Q12 8.8 18.2 12M12 5.8Q15 12 12 18.2" fill="none" stroke="#ef4444" stroke-width="1"/>'),
    sb: ic('<circle cx="12" cy="12" r="8" fill="#0f172a" fill-opacity=".55" stroke="#e5e7eb" stroke-width=".7" stroke-dasharray="1.4 1"/><circle cx="9" cy="9.6" r="2.4" fill="#fff"/><circle cx="15" cy="9.6" r="2.4" fill="#fff"/><circle cx="12" cy="14.6" r="2.4" fill="#fff"/>'),
    mg: ic('<path d="M8 8h8v8H8" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round" transform="rotate(180 12 12)"/><path d="M8 8h3.5v8H8" fill="rgba(255,255,255,.25)"/>'),
    g: ic('<rect x="4" y="7" width="5" height="10" fill="rgba(255,255,255,.25)"/><path d="M4 7.6 9 12M4 12l5 4.4M4 16.4 9 12" stroke="rgba(255,255,255,.5)" stroke-width=".6"/><path d="M4 6h6v12H4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>'),
    pase: ic('<path d="M4 16 17.5 7.5" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="m20 6-6.2.9 3.4 4.6z" fill="#fff"/>'),
    mov: ic('<path d="M4 16 17.5 7.5" stroke="#fde047" stroke-width="2" stroke-dasharray="2.6 2" stroke-linecap="round"/><path d="m20 6-6.2.9 3.4 4.6z" fill="#fde047"/>'),
    cond: ic('<path d="M3.5 15.5l2-3 2 3 2-3 2 3 2-3 2 3 1.5-2" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="m21 12.5-4.6-1.2.9 4.6z" fill="#fff"/>'),
    tiro: ic('<path d="M4 16 17 8.5" stroke="#fb923c" stroke-width="3" stroke-linecap="round"/><path d="m20.5 6.5-7 .6 3.6 5.4z" fill="#fb923c"/>'),
    z: ic('<rect x="4.5" y="6" width="15" height="12" rx="1.5" fill="rgba(255,255,255,.14)" stroke="#fff" stroke-width="1.4" stroke-dasharray="2.4 1.6"/>'),
    l: ic('<path d="M4 18 20 6" stroke="#fff" stroke-width="1.8" stroke-dasharray="2.6 2" stroke-linecap="round"/>'),
    fh: ic('<path d="M4 16c3-6 5 3 8-2s4-5 8-3" fill="none" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>'),
    t: ic('<text x="12" y="17" font-size="14" font-weight="900" text-anchor="middle" fill="#fff" font-family="system-ui,sans-serif">Aa</text>')
  };
  const GROUPS = [
    ['jug', 'Jugadores', [['A', 'Equipo A'], ['B', 'Equipo B'], ['C', 'Equipo C'], ['N', 'Comodín'], ['P', 'Portero'], ['E', 'Entrenador']]],
    ['mat', 'Material', [['c', 'Cono'], ['sp', 'Seta'], ['pk', 'Pica'], ['h', 'Valla'], ['esc', 'Escalera'], ['ar', 'Aro'], ['mq', 'Maniquí'], ['cj', 'Cajón'], ['b', 'Balón'], ['bm', 'Balón medicinal'], ['sb', 'Saco de balones'], ['mg', 'Miniportería'], ['g', 'Portería']]],
    ['acc', 'Acciones', [['pase', 'Pase'], ['mov', 'Desplaz.'], ['cond', 'Conducción'], ['tiro', 'Tiro']]],
    ['dib', 'Dibujo', [['z', 'Zona'], ['l', 'Línea'], ['fh', 'Rotulador'], ['t', 'Texto']]]
  ];
  const grpOf = k => (GROUPS.find(g => g[2].some(x => x[0] === k)) || GROUPS[0])[0];
  const CONE_COL = ['#f97316', '#facc15', '#22c55e', '#3b82f6', '#ef4444'];
  const PAL = {
    c: CONE_COL, sp: ['#facc15', '#f97316', '#22c55e', '#3b82f6', '#ef4444', '#ffffff'], ar: ['#ef4444', '#facc15', '#3b82f6', '#22c55e', '#f97316'],
    z: ['', '#facc15', '#ef4444', '#3b82f6', '#22c55e', '#f97316'], l: ['#ffffff', '#fde047', '#ef4444', '#3b82f6', '#111827'], fh: ['#fde047', '#ffffff', '#ef4444', '#3b82f6', '#111827']
  };
  const CATS = { tt: 'Técnico-táctico', fis: 'Físico condicional', pre: 'Prevención y recuperación', por: 'Porteros', jue: 'Juegos y dinámicas' };
  const MDS = ['MD+1', 'MD+2', 'MD-4', 'MD-3', 'MD-2', 'MD-1'];
  const ED = { P: 'Prebenjamín', B: 'Benjamín', A: 'Alevín', I: 'Infantil', C: 'Cadete', J: 'Juvenil', S: 'Sénior' };
  const CARGAS = ['Activación', 'Tensión', 'Duración', 'Velocidad', 'Recuperación', 'Mixta'];
  const PT_KEYS = ['c', 'pk', 'h', 'b', 'mg', 'g', 't', 'esc', 'sp', 'ar', 'mq', 'cj', 'bm', 'sb'];
  const ALLK = ['p', 'z', 'a', 'l', 'fh', ...PT_KEYS];

  window.TaskEditor = {
    mount(root, task, cb) {
      const t = JSON.parse(JSON.stringify(task));
      const d = t.d = t.d || {};
      ALLK.forEach(k => { d[k] = d[k] || []; });
      if (!d.v) d.v = (window.fieldBBox ? fieldBBox(d) : VIEWS.full.v);
      let tool = 'A', grp = 'jug', sel = null, drag = null, label = '', fs = false;
      const colI = { c: 0, sp: 0, ar: 0, z: 0, l: 0, fh: 0 }, opt2 = { hA: 0, escL: 5, escV: 0, mqN: 1, mqA: 0, tS: 1.15 };
      const col = k => PAL[k][colI[k]];
      const hist = [];
      const snap = () => { hist.push(JSON.stringify(d)); if (hist.length > 60) hist.shift(); };
      const tipos = [...new Set(TAREAS.map(x => x.tipo))].sort();

      const chk = (name, val, lab, on) => `<label class="ck"><input type="checkbox" name="${name}" value="${val}" ${on ? 'checked' : ''}><span>${lab}</span></label>`;
      const opt = (o, cur) => Object.entries(o).map(([k, v]) => `<option value="${k}" ${k == cur ? 'selected' : ''}>${v}</option>`).join('');
      root.innerHTML = `
      <div class="editor ${cb.boardOnly ? 'bonly' : ''}">
        <h1>${cb.title || (task.id ? 'Editar tarea' : 'Nueva tarea')}</h1>
        <div class="bwrap" id="bwrap">
          <div class="bside">
            <div class="fsbar"><b>${esc(cb.fsTitle || 'Pizarra táctica')}</b><span class="rot">↻ Gira el móvil para verla más grande</span><button class="btn sm" type="button" id="fsx">✕ Salir</button></div>
            <div class="tbar"><div class="tgrp" id="tgrp">${GROUPS.map(([k, n]) => `<button type="button" data-grp="${k}">${n}</button>`).join('')}</div>
              <div class="tfix"><button type="button" data-tool="move" title="Mover y editar">${ICON.move}<span>Mover</span></button><button type="button" data-tool="del" title="Borrar">${ICON.del}<span>Borrar</span></button></div></div>
            <div class="tools" id="tools"></div>
            <div class="topts" id="topts"></div>
            <div class="bopts">
              <select id="pitch" aria-label="Campo"><option value="11" ${d.f7 ? '' : 'selected'}>Fútbol 11</option><option value="7" ${d.f7 ? 'selected' : ''}>Fútbol 7</option></select>
              <select id="view"></select>
              <span class="zbtn"><button class="btn" type="button" id="zout" aria-label="Alejar">−</button><button class="btn" type="button" id="zin" aria-label="Acercar">＋</button></span>
              <button class="btn" type="button" id="undo">↶ Deshacer</button>
              <button class="btn" type="button" id="dupsel" disabled>⧉ Duplicar</button>
              <button class="btn" type="button" id="delsel" disabled>🗑 Eliminar</button>
              <button class="btn ghost" type="button" id="wipe">Limpiar</button>
              <button class="btn pri fsin" type="button" id="fsin">⛶ Pantalla completa</button>
            </div>
          </div>
          <div class="bstage" id="bstage"><div class="board" id="board"></div></div>
        </div>
        <div id="bx"></div>
        <details class="anp" id="anp"><summary>🎬 Animación a tu gusto <small id="ansum"></small></summary>
          <p class="hint sm">Las flechas se animan en el orden en que las dibujaste. Aquí puedes cambiar el orden, juntar varias en el mismo paso (se mueven a la vez) y decidir si los defensores reaccionan solos.</p>
          <div id="anl" class="anl"></div>
          <div class="acts"><label class="chk"><input type="checkbox" id="anr"> Defensores y portero reaccionan al balón</label>
          <button class="btn" type="button" id="anauto">Orden automático</button><button class="btn pri" type="button" id="anplay">▶ Probar animación</button></div>
        </details>
        <p class="hint sm">Elige un grupo (Jugadores, Material, Acciones, Dibujo), una herramienta y toca el campo. Flechas, líneas, zonas y rotulador se dibujan arrastrando. Con <b>Mover</b>: arrastra cualquier elemento o el césped para desplazar la vista; el centro de una flecha la curva; tocar una valla, maniquí o cajón lo gira; tocar un cono, seta o aro le cambia el color; tocar un jugador le pone dorsal. Usa <b>＋ / −</b> para acercar o alejar.</p>

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
        $('#delsel').disabled = $('#dupsel').disabled = !sel;
        renderAnim();
        if (cb.onChange) cb.onChange(d);
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
          if (v && !a.some(x => x[6] != null)) { const s0 = fieldSteps(d); a.forEach((x, j) => { x[6] = s0.findIndex(g => g.includes(j)) + 1; }); }
          if (v) a[i][6] = +v; else a[i].length = Math.min(a[i].length, 6);
          a.forEach(x => { if (x[5] == null && x.length > 6) x[5] = 0; });
          render();
        });
        const swap = (i, j) => { snap(); [a[i], a[j]] = [a[j], a[i]]; if (sel && sel.key === 'a') sel = { key: 'a', i: j }; render(); };
        box.querySelectorAll('[data-up]').forEach(b => b.onclick = () => swap(+b.dataset.up, +b.dataset.up - 1));
        box.querySelectorAll('[data-dn]').forEach(b => b.onclick = () => swap(+b.dataset.dn, +b.dataset.dn + 1));
        box.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => { setTool('move'); sel = { key: 'a', i: +b.dataset.pick }; render(); });
      }
      const K = () => { const vb = board.querySelector('svg').viewBox.baseVal; return vb.width / 40; };
      function selMark() {
        const k = K0();
        const ring = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#fde047" stroke-width="${k * .2}" stroke-dasharray="${k * .5} ${k * .3}"/>`;
        const h = (x, y) => `<circle cx="${x}" cy="${y}" r="${k * .45}" fill="#fde047" stroke="#111" stroke-width="${k * .08}"/>`;
        const { key, i } = sel, e = d[key] && d[key][i]; if (!e) return '';
        if (key === 'p') return ring(e[1], e[2], k * 1.3);
        if (key === 'a') { const m = arrowMid(e); return h(e[1], e[2]) + h(e[3], e[4]) + h(m[0], m[1]); }
        if (key === 'l') return h(e[0], e[1]) + h(e[2], e[3]) + ring((e[0] + e[2]) / 2, (e[1] + e[3]) / 2, k * .7);
        if (key === 'fh') { const xs = e[1].filter((_, j) => !(j % 2)), ys = e[1].filter((_, j) => j % 2), x0 = Math.min(...xs), y0 = Math.min(...ys); return `<rect x="${x0 - k * .5}" y="${y0 - k * .5}" width="${Math.max(...xs) - x0 + k}" height="${Math.max(...ys) - y0 + k}" fill="none" stroke="#fde047" stroke-width="${k * .2}" stroke-dasharray="${k * .5} ${k * .3}"/>`; }
        if (key === 'z') return `<rect x="${e[0]}" y="${e[1]}" width="${e[2]}" height="${e[3]}" fill="none" stroke="#fde047" stroke-width="${k * .2}"/>` + [[0, 0], [1, 0], [0, 1], [1, 1]].map(([a, b]) => h(e[0] + a * e[2], e[1] + b * e[3])).join('');
        if (key === 'esc') { const [cx, cy] = escC(e), L2 = Math.max(.5, .3 * k) * Math.max(2, Math.round(e[2] / .5)) + k * .6, w2 = Math.max(.8, .72 * k) + k * .6, W2 = e[3] ? w2 : L2, H2 = e[3] ? L2 : w2; return `<rect x="${cx - W2 / 2}" y="${cy - H2 / 2}" width="${W2}" height="${H2}" fill="none" stroke="#fde047" stroke-width="${k * .2}" stroke-dasharray="${k * .5} ${k * .3}"/>`; }
        return ring(e[0], e[1], k * 1.1);
      }
      // escala del dibujo según la vista actual (igual que drawField)
      const K0 = () => { const s = board.querySelector('svg'); return s ? +s.getAttribute('data-k') || K() : 1; };
      function arrowMid(a) {
        const [, x1, y1, x2, y2, cv = 0] = a, len = Math.hypot(x2 - x1, y2 - y1) || 1, ux = (x2 - x1) / len, uy = (y2 - y1) / len;
        return [(x1 + x2) / 2 - uy * cv / 2, (y1 + y2) / 2 + ux * cv / 2];
      }
      function pt(ev) {
        const svg = board.querySelector('svg'), p = svg.createSVGPoint(); p.x = ev.clientX; p.y = ev.clientY;
        const q = p.matrixTransform(svg.getScreenCTM().inverse()); return [q.x, q.y];
      }
      const escC = e => e[3] ? [e[0] + .4, e[1] + e[2] / 2] : [e[0] + e[2] / 2, e[1] + .4];
      function hit(x, y) {
        const th = K() * 1.6; let best = null, bd = th;
        const try_ = (dist, h) => { if (dist < bd) { bd = dist; best = h; } };
        d.p.forEach((e, i) => try_(Math.hypot(e[1] - x, e[2] - y), { key: 'p', i, part: 'pt' }));
        PT_KEYS.forEach(key => d[key].forEach((e, i) => { const [cx, cy] = key === 'esc' ? escC(e) : e; try_(Math.hypot(cx - x, cy - y), { key, i, part: 'pt' }); }));
        d.a.forEach((e, i) => {
          try_(Math.hypot(e[1] - x, e[2] - y), { key: 'a', i, part: 'p1' });
          try_(Math.hypot(e[3] - x, e[4] - y), { key: 'a', i, part: 'p2' });
          const m = arrowMid(e); try_(Math.hypot(m[0] - x, m[1] - y) * .9, { key: 'a', i, part: 'mid' });
        });
        d.l.forEach((e, i) => {
          try_(Math.hypot(e[0] - x, e[1] - y), { key: 'l', i, part: 'p1' });
          try_(Math.hypot(e[2] - x, e[3] - y), { key: 'l', i, part: 'p2' });
          try_(Math.hypot((e[0] + e[2]) / 2 - x, (e[1] + e[3]) / 2 - y) * .9, { key: 'l', i, part: 'in' });
        });
        d.fh.forEach((e, i) => { for (let j = 0; j < e[1].length; j += 2) try_(Math.hypot(e[1][j] - x, e[1][j + 1] - y) * 1.1, { key: 'fh', i, part: 'in' }); });
        d.z.forEach((e, i) => [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([a, b]) => try_(Math.hypot(e[0] + a * e[2] - x, e[1] + b * e[3] - y), { key: 'z', i, part: 'c', a, b })));
        if (best) return best;
        for (let i = d.z.length - 1; i >= 0; i--) { const e = d.z[i]; if (x >= e[0] && x <= e[0] + e[2] && y >= e[1] && y <= e[1] + e[3]) return { key: 'z', i, part: 'in' }; }
        return null;
      }
      const autoDir = x => x > (d.f7 ? 30 : 52.5) ? 'L' : 'R';
      const nearPlayer = (x, y) => { const p = d.p.find(e => Math.hypot(e[1] - x, e[2] - y) < K() * 1.2); return p ? [p[1], p[2]] : [x, y]; };
      const curVB = () => { const vb = board.querySelector('svg').viewBox.baseVal; return [vb.x, vb.y, vb.width, vb.height]; };

      board.addEventListener('pointerdown', ev => {
        if (!board.querySelector('svg')) return;
        ev.preventDefault();
        const [x, y] = pt(ev);
        board.setPointerCapture(ev.pointerId);
        if (tool === 'move') {
          const h = hit(x, y); sel = h;
          if (h) { snap(); drag = { h, x0: x, y0: y, orig: JSON.parse(JSON.stringify(d[h.key][h.i])), moved: false }; }
          else drag = { pan: true, vb: curVB(), px: ev.clientX, py: ev.clientY, sc: curVB()[2] / board.querySelector('svg').getBoundingClientRect().width };
          render(); return;
        }
        if (tool === 'del') { const h = hit(x, y); if (h) { snap(); d[h.key].splice(h.i, 1); sel = null; render(); } return; }
        snap();
        const X = r1(x), Y = r1(y);
        if (['A', 'B', 'C', 'N', 'P', 'E'].includes(tool)) { const e = [tool, X, Y]; if (tool === 'E') e.push('E'); else if (label) e.push(label); d.p.push(e); bumpLabel(); }
        else if (tool === 'c' || tool === 'sp' || tool === 'ar') d[tool].push([X, Y, col(tool)]);
        else if (['b', 'pk', 'bm', 'sb'].includes(tool)) d[tool].push([X, Y]);
        else if (tool === 'h') d.h.push(opt2.hA ? [X, Y, opt2.hA] : [X, Y]);
        else if (tool === 'cj') d.cj.push([X, Y]);
        else if (tool === 'mq') { const n = opt2.mqN, a = opt2.mqA * Math.PI / 180, st = K0() * 1.75; for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * st; d.mq.push([r1(x + Math.cos(a) * o), r1(y + Math.sin(a) * o), opt2.mqA]); } }
        else if (tool === 'esc') { const L2 = opt2.escL; d.esc.push(opt2.escV ? [r1(x - .4), r1(y - L2 / 2), L2, 1] : [r1(x - L2 / 2), r1(y - .4), L2]); }
        else if (tool === 'mg' || tool === 'g') d[tool].push([X, Y, autoDir(x)]);
        else if (tool === 't') { const s = prompt('Texto'); if (s) d.t.push(opt2.tS !== 1.15 ? [X, Y, s.slice(0, 60), opt2.tS] : [X, Y, s.slice(0, 60)]); else hist.pop(); }
        else if (tool === 'z') { const c = col('z'); d.z.push(c ? [X, Y, 0, 0, c] : [X, Y, 0, 0]); drag = { new: 'z', x0: x, y0: y, i: d.z.length - 1 }; }
        else if (tool === 'l') { d.l.push([X, Y, X, Y, col('l')]); drag = { new: 'l', i: d.l.length - 1 }; }
        else if (tool === 'fh') { d.fh.push([col('fh'), [X, Y]]); drag = { new: 'fh', i: d.fh.length - 1 }; }
        else { const [sx, sy] = nearPlayer(x, y); d.a.push([tool, r1(sx), r1(sy), r1(sx), r1(sy), 0]); drag = { new: 'a', i: d.a.length - 1 }; }
        render();
      });
      board.addEventListener('pointermove', ev => {
        if (!drag) return;
        if (drag.pan) {
          const dx = (ev.clientX - drag.px) * drag.sc, dy = (ev.clientY - drag.py) * drag.sc;
          if (Math.hypot(dx, dy) < .2) return;
          d.v = [r1(drag.vb[0] - dx), r1(drag.vb[1] - dy), drag.vb[2], drag.vb[3]]; drag.moved = true; render(); return;
        }
        const [x, y] = pt(ev);
        if (drag.new === 'z') { const e = d.z[drag.i]; e[0] = r1(Math.min(x, drag.x0)); e[1] = r1(Math.min(y, drag.y0)); e[2] = r1(Math.abs(x - drag.x0)); e[3] = r1(Math.abs(y - drag.y0)); render(); return; }
        if (drag.new === 'a') { const e = d.a[drag.i]; e[3] = r1(x); e[4] = r1(y); render(); return; }
        if (drag.new === 'l') { const e = d.l[drag.i]; e[2] = r1(x); e[3] = r1(y); render(); return; }
        if (drag.new === 'fh') { const p = d.fh[drag.i][1], n = p.length; if (Math.hypot(p[n - 2] - x, p[n - 1] - y) > K0() * .22) { p.push(r1(x), r1(y)); render(); } return; }
        const { h, orig } = drag, dx = x - drag.x0, dy = y - drag.y0;
        if (Math.hypot(dx, dy) > K() * .3) drag.moved = true;
        if (!drag.moved) return;
        const e = d[h.key][h.i];
        if (h.key === 'p') { e[1] = r1(orig[1] + dx); e[2] = r1(orig[2] + dy); }
        else if (h.key === 'a') {
          if (h.part === 'p1') { e[1] = r1(orig[1] + dx); e[2] = r1(orig[2] + dy); }
          else if (h.part === 'p2') { e[3] = r1(orig[3] + dx); e[4] = r1(orig[4] + dy); }
          else { const len = Math.hypot(e[3] - e[1], e[4] - e[2]) || 1, ux = (e[3] - e[1]) / len, uy = (e[4] - e[2]) / len; const mx = (e[1] + e[3]) / 2, my = (e[2] + e[4]) / 2; e[5] = r1(2 * ((x - mx) * -uy + (y - my) * ux)); }
        } else if (h.key === 'l') {
          if (h.part !== 'p2') { e[0] = r1(orig[0] + dx); e[1] = r1(orig[1] + dy); }
          if (h.part !== 'p1') { e[2] = r1(orig[2] + dx); e[3] = r1(orig[3] + dy); }
        } else if (h.key === 'fh') { e[1] = orig[1].map((v, j) => r1(v + (j % 2 ? dy : dx))); }
        else if (h.key === 'z') {
          if (h.part === 'in') { e[0] = r1(orig[0] + dx); e[1] = r1(orig[1] + dy); }
          else { const fx = orig[0] + (1 - h.a) * orig[2], fy = orig[1] + (1 - h.b) * orig[3]; e[0] = r1(Math.min(x, fx)); e[1] = r1(Math.min(y, fy)); e[2] = r1(Math.abs(x - fx)); e[3] = r1(Math.abs(y - fy)); }
        } else { e[0] = r1(orig[0] + dx); e[1] = r1(orig[1] + dy); }
        render();
      });
      const cyc = (arr, v) => arr[(arr.indexOf(v) + 1) % arr.length];
      const end = () => {
        if (!drag) return;
        if (drag.pan) { drag = null; return; }
        if (drag.new === 'z') { const e = d.z[drag.i]; if (e[2] < 1.5 || e[3] < 1.5) { d.z.splice(drag.i, 1); hist.pop(); } }
        else if (drag.new === 'a') { const e = d.a[drag.i]; const [ex, ey] = nearPlayer(e[3], e[4]); e[3] = r1(ex); e[4] = r1(ey); if (Math.hypot(e[3] - e[1], e[4] - e[2]) < 1) { d.a.splice(drag.i, 1); hist.pop(); } }
        else if (drag.new === 'l') { const e = d.l[drag.i]; if (Math.hypot(e[2] - e[0], e[3] - e[1]) < 1) { d.l.splice(drag.i, 1); hist.pop(); } }
        else if (drag.new === 'fh') { if (d.fh[drag.i][1].length < 6) { d.fh.splice(drag.i, 1); hist.pop(); } }
        else if (!drag.moved) {
          hist.pop();
          const { h } = drag, e = d[h.key][h.i];
          if (h.key === 'mg' || h.key === 'g') { snap(); e[2] = cyc(['L', 'U', 'R', 'D'], e[2]); }
          else if (h.key === 'p' && e[0] !== 'E') { const s = prompt('Texto del jugador (número, letra o vacío)', e[3] || ''); if (s !== null) { snap(); if (s.trim()) e[3] = s.trim().slice(0, 3); else e.length = 3; } }
          else if (h.key === 'c' || h.key === 'sp' || h.key === 'ar') { snap(); e[2] = cyc(PAL[h.key], e[2] || PAL[h.key][0]); }
          else if (h.key === 'h') { snap(); const a = e[2] === true ? 90 : (+e[2] || 0); e[2] = (a + 45) % 180; }
          else if (h.key === 'mq' || h.key === 'cj') { snap(); e[2] = ((+e[2] || 0) + 45) % 360; }
          else if (h.key === 'esc') { snap(); const [cx, cy] = escC(e), L2 = e[2]; if (e[3]) { e[0] = r1(cx - L2 / 2); e[1] = r1(cy - .4); e.length = 3; } else { e[0] = r1(cx - .4); e[1] = r1(cy - L2 / 2); e[3] = 1; } }
          else if (h.key === 't') { const s = prompt('Texto', e[2]); if (s !== null) { snap(); if (s.trim()) e[2] = s.trim().slice(0, 60); else d.t.splice(h.i, 1), sel = null; } }
          else if (h.key === 'z') { snap(); const c = cyc(PAL.z, e[4] || ''); if (c) e[4] = c; else e.length = Math.min(e.length, 4); }
        }
        drag = null; render();
      };
      board.addEventListener('pointerup', end);
      board.addEventListener('pointercancel', end);
      board.addEventListener('wheel', ev => { if (!board.querySelector('svg')) return; ev.preventDefault(); const [x, y] = pt(ev); zoom(ev.deltaY > 0 ? 1.15 : 1 / 1.15, x, y); }, { passive: false });

      function zoom(f, cx, cy) {
        const vb = curVB(), [FL, FW] = fieldDims(d);
        if (cx == null) { cx = vb[0] + vb[2] / 2; cy = vb[1] + vb[3] / 2; }
        let nw = vb[2] * f, nh = vb[3] * f;
        if (nw < 9) { nh = nh * 9 / nw; nw = 9; }
        if (nw >= FL + 8) { d.v = [-4, -4, FL + 8, FW + 8]; render(); return; }
        d.v = [r1(cx - (cx - vb[0]) * f), r1(cy - (cy - vb[1]) * f), r1(nw), r1(nh)]; render();
      }
      $('#zin').onclick = () => zoom(1 / 1.3);
      $('#zout').onclick = () => zoom(1.3);

      function bumpLabel() { if (/^\d+$/.test(label)) { label = String(+label + 1); const i = $('#plab'); if (i) i.value = label; } }
      const sws = k => `<span class="tol">Color</span>${PAL[k].map((c, i) => `<button type="button" class="sw ${i === colI[k] ? 'on' : ''} ${c ? '' : 'nocol'}" data-col="${k}:${i}" style="background:${c || 'rgba(255,255,255,.35)'}" aria-label="Color ${i + 1}"></button>`).join('')}`;
      const seg = (key, vals) => `<span class="seg">${vals.map(([v, n]) => `<button type="button" data-o="${key}:${v}" class="${opt2[key] == v ? 'on' : ''}">${n}</button>`).join('')}</span>`;
      function toolOpts() {
        const o = $('#topts'), S = window.MC_SIS && window.MC_SIS[d.f7 ? 7 : 11];
        if (['A', 'B', 'C', 'N'].includes(tool)) o.innerHTML = `<label>Dorsal <input id="plab" value="${esc(label)}" maxlength="3" placeholder="1, 9, LD…"></label>`
          + (S && ['A', 'B'].includes(tool) ? `<label>Colocar sistema <select id="sis"><option value="">Elige…</option>${Object.keys(S).map(k => `<option>${k}</option>`).join('')}</select></label><small>${tool === 'A' ? 'Equipo A ataca hacia la derecha' : 'Equipo B ataca hacia la izquierda'}</small>` : '<small>Si es un número, sube solo (1, 2, 3…)</small>');
        else if (tool === 'c' || tool === 'sp' || tool === 'ar') o.innerHTML = sws(tool) + '<small>Con Mover, tócalo para cambiarle el color.</small>';
        else if (tool === 'h') o.innerHTML = `<span class="tol">Giro</span>${seg('hA', [[0, '—'], [45, '／'], [90, '|'], [135, '＼']])}`;
        else if (tool === 'esc') o.innerHTML = `<span class="tol">Largo</span>${seg('escL', [[3, '3 m'], [4, '4 m'], [5, '5 m'], [8, '8 m']])}<span class="tol">Sentido</span>${seg('escV', [[0, 'Horizontal'], [1, 'Vertical']])}`;
        else if (tool === 'mq') o.innerHTML = `<span class="tol">Barrera</span>${seg('mqN', [[1, '1'], [3, '3'], [4, '4'], [5, '5']])}<span class="tol">Giro</span>${seg('mqA', [[0, '—'], [45, '／'], [90, '|'], [135, '＼']])}`;
        else if (tool === 'mg' || tool === 'g') o.innerHTML = '<small>Se orienta sola hacia el centro. Con Mover, tócala para girarla.</small>';
        else if (['pase', 'mov', 'cond', 'tiro'].includes(tool)) o.innerHTML = '<small>Arrastra desde el origen hasta el destino. Si empiezas sobre un jugador, la flecha sale de él.</small>';
        else if (tool === 'z') o.innerHTML = sws('z') + '<small>Arrastra para dibujar el espacio.</small>';
        else if (tool === 'l') o.innerHTML = sws('l') + '<small>Línea discontinua: arrastra de un punto a otro.</small>';
        else if (tool === 'fh') o.innerHTML = sws('fh') + '<small>Dibuja a mano alzada.</small>';
        else if (tool === 't') o.innerHTML = `<span class="tol">Tamaño</span>${seg('tS', [[1.15, 'Normal'], [1.8, 'Grande']])}<small>Con Mover, tócalo para cambiarlo.</small>`;
        else if (tool === 'move') o.innerHTML = '<small>Arrastra elementos; arrastra el césped para mover la vista.</small>';
        else if (tool === 'del') o.innerHTML = '<small>Toca lo que quieras borrar.</small>';
        else o.innerHTML = '';
        const i = $('#plab'); if (i) i.oninput = () => label = i.value.trim();
        const ss = $('#sis'); if (ss) ss.onchange = () => placeSys(ss.value);
        o.querySelectorAll('[data-col]').forEach(b => b.onclick = () => { const [k, v] = b.dataset.col.split(':'); colI[k] = +v; toolOpts(); });
        o.querySelectorAll('[data-o]').forEach(b => b.onclick = () => { const [k, v] = b.dataset.o.split(':'); opt2[k] = +v; toolOpts(); });
      }
      function placeSys(name) {
        const S = window.MC_SIS && window.MC_SIS[d.f7 ? 7 : 11], pos = S && S[name]; if (!pos) return;
        const [FL, FW] = fieldDims(d), team = tool;
        if (d.p.some(e => e[0] === team || (e[0] === 'P' && (team === 'A' ? e[1] < FL / 2 : e[1] > FL / 2))) && !confirm(`Se quitarán los jugadores del equipo ${team} que ya hay. ¿Seguir?`)) { toolOpts(); return; }
        snap();
        d.p = d.p.filter(e => !(e[0] === team || (e[0] === 'P' && (team === 'A' ? e[1] < FL / 2 : e[1] > FL / 2))));
        pos.forEach(([x, y], i) => { const X = team === 'A' ? x : FL - x, Y = team === 'A' ? y : FW - y; d.p.push(i ? [team, r1(X), r1(Y), String(i + 1)] : ['P', r1(X), r1(Y)]); });
        d.v = [-4, -4, FL + 8, FW + 8]; sel = null; render(); toolOpts();
        if (window.MCtoast) MCtoast(`Sistema ${name} colocado`);
      }
      function paintTools() {
        const g = GROUPS.find(x => x[0] === grp);
        $('#tools').innerHTML = g[2].map(([k, n]) => `<button type="button" data-tool="${k}" class="${k === tool ? 'on' : ''}" title="${n}">${ICON[k]}<span>${n}</span></button>`).join('');
        root.querySelectorAll('[data-grp]').forEach(b => b.classList.toggle('on', b.dataset.grp === grp));
        root.querySelectorAll('.tfix [data-tool]').forEach(b => b.classList.toggle('on', b.dataset.tool === tool));
      }
      function setTool(k) { tool = k; if (k !== 'move' && k !== 'del') grp = grpOf(k); if (k !== 'move') sel = null; paintTools(); toolOpts(); render(); }
      root.querySelector('#bwrap').addEventListener('click', e => {
        const b = e.target.closest('[data-tool]'); if (b) { setTool(b.dataset.tool); return; }
        const gb = e.target.closest('[data-grp]'); if (gb) { grp = gb.dataset.grp; const first = GROUPS.find(x => x[0] === grp)[2][0][0]; setTool(first); }
      });
      const VW = () => d.f7 ? VIEWS7 : VIEWS;
      const viewOpts = () => { $('#view').innerHTML = `${Object.entries(VW()).map(([k, v]) => `<option value="${k}">${v.n}</option>`).join('')}<option value="fit">Ajustar a lo dibujado</option><option value="" selected disabled>Vista…</option>`; };
      viewOpts();
      $('#view').onchange = e => { snap(); const v = e.target.value; d.v = v === 'fit' ? fieldBBox({ ...d, v: undefined }) : VW()[v].v.slice(); e.target.value = ''; render(); };
      $('#pitch').onchange = e => {
        const to7 = e.target.value === '7'; if (to7 === !!d.f7) return; snap();
        if (to7) { scaleD(d, 60 / 105, 40 / 68); d.f7 = true; } else { scaleD(d, 105 / 60, 68 / 40); delete d.f7; }
        d.v = VW().full.v.slice(); viewOpts(); toolOpts(); render();
      };
      $('#undo').onclick = () => { if (!hist.length) return; const s = JSON.parse(hist.pop()); Object.keys(d).forEach(k => delete d[k]); Object.assign(d, s); ALLK.forEach(k => { d[k] = d[k] || []; }); sel = null; $('#pitch').value = d.f7 ? '7' : '11'; viewOpts(); render(); };
      $('#anr').onchange = e => { snap(); if (e.target.checked) delete d.nr; else d.nr = true; render(); };
      $('#anauto').onclick = () => { snap(); (d.a || []).forEach(x => { if (x.length > 6) x.length = 6; }); render(); };
      $('#anplay').onclick = () => {
        if (!(d.a || []).length) return;
        if (anCtl) { anCtl.stop(); anCtl = null; }
        const tmp = JSON.parse(JSON.stringify(d)); board.innerHTML = drawField(tmp, { label: 'Animación' });
        anCtl = animateField(board, tmp, { autoplay: true, loop: false, speed: 1, react: !d.nr, onState: s => { $('#anplay').textContent = s.done ? '▶ Probar animación' : `⏸ Paso ${s.step}/${s.total}`; if (s.done) setTimeout(() => { if (anCtl && board.isConnected) { anCtl.stop(); anCtl = null; render(); } }, 1500); } });
      };
      $('#delsel').onclick = () => { if (!sel) return; snap(); d[sel.key].splice(sel.i, 1); sel = null; render(); };
      $('#dupsel').onclick = () => {
        if (!sel) return; snap(); const e = JSON.parse(JSON.stringify(d[sel.key][sel.i])), o = K0() * 1.5;
        if (sel.key === 'p') { e[1] = r1(e[1] + o); e[2] = r1(e[2] + o); }
        else if (sel.key === 'a') { e[1] += o; e[2] += o; e[3] += o; e[4] += o; }
        else if (sel.key === 'l') { e[0] += o; e[1] += o; e[2] += o; e[3] += o; }
        else if (sel.key === 'fh') e[1] = e[1].map(v => r1(v + o));
        else { e[0] = r1(e[0] + o); e[1] = r1(e[1] + o); }
        d[sel.key].push(e); sel = { key: sel.key, i: d[sel.key].length - 1 }; render();
      };
      $('#wipe').onclick = () => { if (!confirm('¿Borrar todo lo dibujado?')) return; snap(); ALLK.forEach(k => d[k] = []); sel = null; render(); };

      // ----- Pantalla completa -----
      const edEl = $('.editor');
      function fit() {
        if (!board.isConnected) { window.removeEventListener('resize', fit); return; }
        if (!fs) { board.style.width = board.style.height = ''; return; }
        const st = $('#bstage'), W = st.clientWidth, H = st.clientHeight, w = Math.max(100, Math.min(W, H * 1.5));
        board.style.width = w + 'px'; board.style.height = (w / 1.5) + 'px';
      }
      window.addEventListener('resize', fit);
      async function enterFS() {
        fs = true; edEl.classList.add('edfs'); document.body.classList.add('fsb');
        try { if (document.documentElement.requestFullscreen && !document.fullscreenElement) await document.documentElement.requestFullscreen({ navigationUI: 'hide' }); } catch (e) { }
        try { if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape'); } catch (e) { }
        setTimeout(fit, 60); setTimeout(fit, 400); fit();
      }
      function exitFS() {
        fs = false; edEl.classList.remove('edfs'); document.body.classList.remove('fsb');
        try { if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); } catch (e) { }
        try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) { }
        fit(); if (cb.onExitFS) cb.onExitFS();
      }
      const onFsc = () => { if (!board.isConnected) { document.removeEventListener('fullscreenchange', onFsc); return; } if (!document.fullscreenElement && fs) exitFS(); else fit(); };
      document.addEventListener('fullscreenchange', onFsc);
      $('#fsin').onclick = enterFS;
      $('#fsx').onclick = exitFS;

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
        ALLK.forEach(k => { if (!d[k].length) delete d[k]; });
        out.d = d;
        cb.onSave(out);
      };
      if (cb.boardOnly) $('#tf').hidden = true;
      setTool(d.p && d.p.length ? 'move' : 'A');
      const api = { d, render, enterFS, exitFS, clean() { const o = JSON.parse(JSON.stringify(d)); ALLK.forEach(k => { if (!o[k] || !o[k].length) delete o[k]; }); return o; } };
      if (cb.startFS) setTimeout(enterFS, 30);
      return api;
    }
  };
})();
