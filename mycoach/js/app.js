/* My Coach · Biblioteca de tareas de fútbol 11 */
(function () {
  const $ = (s, e = document) => e.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const CAT = {
    tt: { n: 'Técnico-táctico', s: 'Táctico', c: '#16a34a', i: '⚽' },
    fis: { n: 'Físico condicional', s: 'Físico', c: '#ea580c', i: '⚡' },
    pre: { n: 'Prevención y recuperación', s: 'Prevención', c: '#0891b2', i: '🛡️' },
    por: { n: 'Porteros', s: 'Porteros', c: '#7c3aed', i: '🧤' }
  };
  const INT = { 1: { n: 'Baja', c: '#22c55e' }, 2: { n: 'Media', c: '#eab308' }, 3: { n: 'Alta', c: '#f97316' }, 4: { n: 'Máxima', c: '#dc2626' } };
  const DIF = { 1: 'Básica', 2: 'Media', 3: 'Avanzada' };
  const ED = { A: 'Alevín', I: 'Infantil', C: 'Cadete', J: 'Juvenil', S: 'Sénior' };
  const MDS = ['MD+1', 'MD+2', 'MD-4', 'MD-3', 'MD-2', 'MD-1'];
  const MDINFO = {
    'MD+1': { dia: 'Lunes', t: 'Recuperación / compensación', carga: 'Recuperación', int: 1, vol: 'Bajo', esp: 'Pequeño-medio', obj: 'Titulares: regenerativo (trote, movilidad, rondos suaves). Suplentes: compensatorio a alta intensidad para acercarse a la carga de partido.', tareas: 'Rondos regenerativos, trote, movilidad, foam roller · compensatorio con juego reducido y sprints.' },
    'MD+2': { dia: 'Martes', t: 'Descanso (o compensación)', carga: 'Descanso', int: 1, vol: 'Muy bajo', esp: '—', obj: 'Día habitual de descanso. Si se entrena, trabajo aeróbico suave o compensatorio para quienes no jugaron.', tareas: 'Descanso, fartlek suave con balón o compensatorio.' },
    'MD-4': { dia: 'Miércoles', t: 'Tensión (fuerza)', carga: 'Tensión', int: 4, vol: 'Medio', esp: 'Reducido (< 100 m²/jug.)', obj: 'Acciones de alta tensión muscular: duelos, aceleraciones, frenadas y cambios de dirección. Mejor día para fuerza, pliometría, nórdicos y Copenhagen.', tareas: 'Juegos reducidos 3v3-5v5, rondos intensos, fuerza, pliometría, RSA, prevención excéntrica.' },
    'MD-3': { dia: 'Jueves', t: 'Duración (resistencia)', carga: 'Duración', int: 3, vol: 'Alto', esp: 'Amplio (> 150 m²/jug.)', obj: 'Día de mayor volumen: espacios grandes, más jugadores, carreras largas y alta velocidad. Trabajo táctico colectivo en situaciones de partido.', tareas: 'Partidos 7v7-11v11, posesiones amplias, intermitente 15"-15", intervalos largos, ataque/defensa organizados.' },
    'MD-2': { dia: 'Viernes', t: 'Velocidad', carga: 'Velocidad', int: 3, vol: 'Bajo-medio', esp: 'Medio, con mucho espacio libre', obj: 'Estímulos de velocidad máxima con descansos completos y poco volumen. Acciones de finalización y transiciones rápidas.', tareas: 'Sprints lanzados, aceleraciones, finalización, oleadas, juegos con transiciones cortas.' },
    'MD-1': { dia: 'Sábado', t: 'Activación', carga: 'Activación', int: 2, vol: 'Muy bajo', esp: 'Pequeño', obj: 'Llegar fresco al partido: activación neuromuscular breve, velocidad de reacción, ABP y repaso táctico. Nada de trabajo excéntrico ni volumen.', tareas: 'Rondos de activación, reacción, ABP, repaso de patrones sin oposición.' }
  };

  // ---------- Estado ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem('mc_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('mc_' + k, JSON.stringify(v)); } catch (e) { } }
  };
  const BASE = TAREAS.slice();
  let mine = store.get('mis', []);
  let byId = {};
  function sync() { TAREAS.length = 0; TAREAS.push(...mine, ...BASE); byId = Object.fromEntries(TAREAS.map(t => [t.id, t])); }
  const saveMine = () => { store.set('mis', mine); sync(); };
  sync();
  let favs = new Set(store.get('favs', []));
  let ses = store.get('ses', { md: 'MD-4', min: 75, gk: false, items: [] });
  let saved = store.get('saved', []);
  const pad = n => String(n).padStart(2, '0');
  const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseISO = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const monday = d => { const x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); const w = (x.getDay() + 6) % 7; return addDays(x, -w); };
  let plan = store.get('plan', {});
  // Puente con My Team: misma web (github.io) → mismo almacenamiento. My Team puede leer esta clave.
  function bridge() {
    try {
      const dias = Object.keys(plan).sort().map(f => { const e = plan[f]; const l = dayLoad(e); return { fecha: f, md: mdOf(f), tipo: e.k, nombre: e.name || (e.k === 'match' ? 'Partido' : e.k === 'rest' ? 'Descanso' : ''), minutos: e.min || 0, rpe: e.min ? Math.round(l / e.min * 10) / 10 : 0, ua: l, ua_real: e.real ?? null }; });
      localStorage.setItem('mycoach.planificado', JSON.stringify({ app: 'My Coach', version: 1, actualizado: new Date().toISOString(), dias }));
    } catch (e) { }
  }
  const savePlan = () => { store.set('plan', plan); bridge(); };
  const dayLoad = e => !e ? 0 : e.k === 'ses' ? (e.ua || 0) : e.k === 'match' ? Math.round((e.min || 0) * (e.rpe || 0)) : 0;
  const effLoad = e => e && e.real != null && e.real !== '' ? +e.real : dayLoad(e);
  function mdOf(f) {
    if (plan[f] && plan[f].k === 'match') return 'MD';
    const d = parseISO(f); let next = 0, prev = 0;
    for (let i = 1; i <= 7; i++) { if (!next && plan[iso(addDays(d, i))]?.k === 'match') next = i; if (!prev && plan[iso(addDays(d, -i))]?.k === 'match') prev = i; }
    if (next && (next <= 4 || !prev)) return 'MD-' + next;
    if (prev) return 'MD+' + prev;
    return '';
  }
  let notes = store.get('notes', {});
  const saveNotes = () => store.set('notes', notes);
  // Material que necesita cada tarea (deducido del diagrama y del texto)
  const MAT = { conos: 'Conos', picas: 'Picas', vallas: 'Vallas', escalera: 'Escalera', mini: 'Miniporterías', porterias: 'Porterías', gomas: 'Gomas / bandas', medicinal: 'Balón medicinal', foam: 'Foam roller', comba: 'Comba', aros: 'Aros', tenis: 'Pelota de tenis', banco: 'Banco / cajón' };
  const matCache = {};
  function mats(t) {
    if (matCache[t.id] && matCache[t.id].v === t) return matCache[t.id].m;
    const d = t.d || {}, m = new Set(), tx = (t.n + ' ' + t.desc + ' ' + t.ser).toLowerCase();
    if ((d.c || []).length) m.add('conos'); if ((d.pk || []).length) m.add('picas'); if ((d.h || []).length) m.add('vallas'); if ((d.esc || []).length) m.add('escalera');
    if ((d.mg || []).length) m.add('mini'); if ((d.g || []).length || (d.p || []).some(p => p[0] === 'P')) m.add('porterias');
    if (/goma|banda|trineo/.test(tx)) m.add('gomas'); if (/medicinal/.test(tx)) m.add('medicinal'); if (/foam|rodillo/.test(tx)) m.add('foam');
    if (/comba/.test(tx)) m.add('comba'); if (/\baros?\b/.test(tx)) m.add('aros'); if (/pelota de tenis/.test(tx)) m.add('tenis'); if (/cajón|banco|escalón/.test(tx)) m.add('banco');
    matCache[t.id] = { v: t, m }; return m;
  }
  const flexible = t => /todo|grupo|pareja|individual|estaci|filas|lanzadores|jugadores/i.test(t.jug) || !t.np;
  // Adapta la estructura y el espacio a N jugadores manteniendo los m² por jugador
  function adapt(t, N) {
    if (!N || !t.np || !t.esp || !t.esp[0]) return null;
    const k = Math.sqrt(N / t.np), w = Math.round(t.esp[0] * k), h = Math.round(t.esp[1] * k), m2 = Math.round(t.esp[0] * t.esp[1] / t.np);
    let jug = null;
    const m = String(t.jug).match(/^(\d+)\s*v\s*(\d+)(?:\s*\+\s*(\d+)(?!\s*P))?(?:\s*\+\s*(\d+)\s*P)?/i);
    if (m) {
      const a = +m[1], b = +m[2], n = +(m[3] || 0), p = +(m[4] || 0), free = N - n - p;
      if (free >= 2) {
        let a2 = Math.max(1, Math.round(free * a / (a + b))), b2 = Math.max(1, Math.round(free * b / (a + b)));
        if (a === b) { a2 = b2 = Math.floor(free / 2); }
        const extra = free - a2 - b2;
        jug = `${a2}v${b2}` + (n + extra ? `+${n + extra}` : '') + (p ? `+${p}P` : '');
      }
    }
    return { jug, w, h, m2, same: N === t.np };
  }
  const F = { q: '', own: false, tipo: '', sort: 'rec', mat: new Set(), nj: 0, cat: new Set(), md: '', int: new Set(), dif: new Set(), ed: new Set(), open: false };
  const fromHash = () => { const m = location.hash.match(/[?&]md=([^&]+)/); if (m) F.md = decodeURIComponent(m[1]); };

  const saveSes = () => store.set('ses', ses);
  const toast = m => { const t = $('#toast'); t.textContent = m; t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, 1800); };
  const rpeMid = r => { const n = String(r).match(/\d+/g); return n ? n.map(Number).reduce((a, b) => a + b, 0) / n.length : 5; };

  // ---------- Piezas ----------
  const intBadge = t => `<span class="int" style="--c:${INT[t.int].c}"><i></i>${INT[t.int].n}</span>`;
  const mdChips = t => t.md.map(m => `<span class="md">${m}</span>`).join('');
  const catTag = t => `<span class="cat" style="--c:${CAT[t.cat].c}">${CAT[t.cat].s}</span>`;
  const card = t => `<a class="card" href="#/t/${t.id}">
    <div class="thumb">${drawField(t.d, { mini: true })}</div>
    <div class="ci"><div class="ct">${catTag(t)}<span class="tipo">${esc(t.tipo)}</span>${t.own ? '<span class="own">MÍA</span>' : ''}${favs.has(t.id) ? '<span class="star">★</span>' : ''}</div>
    <h3>${esc(t.n)}</h3>
    <div class="meta">${mdChips(t)}</div>
    <div class="meta">${intBadge(t)}<span>⏱ ${t.dur}'</span><span>👥 ${esc(t.jug)}</span>${(notes[t.id] || {}).s ? `<span class="rate">★${notes[t.id].s}</span>` : ''}</div>
    ${F.nj && !flexible(t) && t.np !== F.nj ? (a => a ? `<div class="adh">Con ${F.nj}: ${a.jug ? `<b>${a.jug}</b> en ` : ''}${a.w}x${a.h} m</div>` : '')(adapt(t, F.nj)) : ''}</div></a>`;

  function filtered() {
    const q = F.q.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    return TAREAS.filter(t => {
      if (F.own && !t.own) return false;
      if (F.cat.size && !F.cat.has(t.cat)) return false;
      if (F.tipo && t.tipo !== F.tipo) return false;
      if (F.mat.size && ![...mats(t)].every(x => F.mat.has(x))) return false;
      if (F.nj && !flexible(t) && t.np > F.nj) return false;
      if (F.md && !t.md.includes(F.md)) return false;
      if (F.int.size && !F.int.has(t.int)) return false;
      if (F.dif.size && !F.dif.has(t.dif)) return false;
      if (F.ed.size && ![...F.ed].some(e => t.ed.includes(e))) return false;
      if (q) { const h = (t.n + ' ' + t.tipo + ' ' + t.obj + ' ' + t.desc + ' ' + t.carga).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); if (!q.split(/\s+/).every(w => h.includes(w))) return false; }
      return true;
    });
  }
  const SORTS = { rec: 'Recomendado', top: 'Mejor valoradas', intA: 'Intensidad ↑', intD: 'Intensidad ↓', dur: 'Duración', az: 'Nombre A-Z' };
  function sorted(r) {
    const f = { top: (a, b) => ((notes[b.id] || {}).s || 0) - ((notes[a.id] || {}).s || 0), intA: (a, b) => a.int - b.int, intD: (a, b) => b.int - a.int, dur: (a, b) => a.dur - b.dur, az: (a, b) => a.n.localeCompare(b.n, 'es') }[F.sort];
    if (!f && F.nj) return r.slice().sort((a, b) => (flexible(a) ? 99 : F.nj - a.np) - (flexible(b) ? 99 : F.nj - b.np));
    return f ? r.slice().sort(f) : r;
  }

  // ---------- Vistas ----------
  function vLib() {
    const nf = F.int.size + F.dif.size + F.ed.size + F.mat.size + (F.nj ? 1 : 0);
    const chip = (grp, v, lab, on) => `<button class="chip ${on ? 'on' : ''}" data-f="${grp}" data-v="${v}">${lab}</button>`;
    $('#app').innerHTML = `<div id="lib">
      <div class="search"><input id="q" type="search" placeholder="Buscar: rondo, RSA, centros, nórdicos…" value="${esc(F.q)}" autocomplete="off"></div>
      <div class="row scroll">${mine.length ? chip('own', '1', '👤 Mías', F.own) : ''}${Object.entries(CAT).map(([k, c]) => chip('cat', k, c.i + ' ' + c.s, F.cat.has(k))).join('')}</div>
      ${F.cat.size === 1 ? `<div class="row scroll"><span class="lbl">Tipo</span>${chip('tipo', '', 'Todos', !F.tipo)}${[...new Set(TAREAS.filter(t => F.cat.has(t.cat)).map(t => t.tipo))].sort().map(x => chip('tipo', esc(x), esc(x), F.tipo === x)).join('')}</div>` : ''}
      <div class="row scroll"><span class="lbl">Día</span>${chip('md', '', 'Todos', !F.md)}${MDS.map(m => chip('md', m, m, F.md === m)).join('')}</div>
      <div class="row between"><button class="more" id="more">${F.open ? '▴' : '▾'} Más filtros${nf ? ` (${nf})` : ''}</button><select id="sort" class="sort" aria-label="Ordenar">${Object.entries(SORTS).map(([k, v]) => `<option value="${k}" ${F.sort === k ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
      <div class="fpanel" ${F.open ? '' : 'hidden'}>
        <div class="row wrap"><span class="lbl">Intensidad</span>${[1, 2, 3, 4].map(i => chip('int', i, INT[i].n, F.int.has(i))).join('')}</div>
        <div class="row wrap"><span class="lbl">Dificultad</span>${[1, 2, 3].map(i => chip('dif', i, DIF[i], F.dif.has(i))).join('')}</div>
        <div class="row wrap"><span class="lbl">Categoría</span>${Object.entries(ED).map(([k, v]) => chip('ed', k, v, F.ed.has(k))).join('')}</div>
        <div class="row wrap"><span class="lbl">Jugadores</span><input id="nj" class="nj" type="number" min="2" max="40" inputmode="numeric" placeholder="¿Cuántos tienes hoy?" value="${F.nj || ''}"><small class="sub">Muestra tareas que puedes hacer con ellos y cómo adaptarlas.</small></div>
        <div class="row wrap"><span class="lbl">Material</span>${Object.entries(MAT).map(([k, v]) => chip('mat', k, v, F.mat.has(k))).join('')}<small class="sub full">Marca el material que tienes: solo verás tareas que puedes montar con él (balones y petos se dan por hechos).</small></div>
        ${nf || F.cat.size || F.md || F.q || F.own ? '<button class="link" id="clr">Quitar todos los filtros</button>' : ''}
      </div>
      <div id="res"></div><a class="fab" href="#/nueva" aria-label="Nueva tarea">＋ Nueva tarea</a></div>`;
    const res = () => { const r = sorted(filtered()); $('#res').innerHTML = `<p class="count">${r.length} tarea${r.length === 1 ? '' : 's'}${F.md ? ` para <b>${F.md}</b> · ${MDINFO[F.md].t}` : ''}</p>` + (r.length ? `<div class="grid">${r.map(card).join('')}</div>` : '<div class="empty">No hay tareas con esos filtros.</div>'); };
    res();
    $('#q').addEventListener('input', e => { F.q = e.target.value; res(); });
    $('#sort').onchange = e => { F.sort = e.target.value; res(); };
    $('#nj').onchange = e => { const v = Math.max(0, +e.target.value || 0); if (v === F.nj) return; F.nj = v; setTimeout(vLib, 0); };
    $('#lib').addEventListener('click', e => {
      const b = e.target.closest('.chip'); if (b) {
        const g = b.dataset.f, v = b.dataset.v;
        if (g === 'own') F.own = !F.own;
        else if (g === 'md') F.md = v;
        else if (g === 'tipo') F.tipo = v;
        else { const val = g === 'cat' || g === 'ed' || g === 'mat' ? v : +v; F[g].has(val) ? F[g].delete(val) : F[g].add(val); if (g === 'cat') F.tipo = ''; }
        vLib(); return;
      }
      if (e.target.id === 'more') { F.open = !F.open; vLib(); }
      if (e.target.id === 'clr') { F.q = ''; F.md = ''; F.own = false; F.tipo = ''; ['cat', 'int', 'dif', 'ed', 'mat'].forEach(k => F[k].clear()); F.nj = 0; vLib(); }
    });
  }

  function vTask(id) {
    const t = byId[id];
    if (!t) { $('#app').innerHTML = '<div class="empty">Tarea no encontrada.</div>'; return; }
    const m2 = t.np && t.esp ? Math.round(t.esp[0] * t.esp[1] / t.np) : null;
    const li = a => a.map(x => `<li>${esc(x)}</li>`).join('');
    $('#app').innerHTML = `
      <article class="task">
        <div class="big" id="bigd" title="Toca para ver a pantalla completa">${drawField(t.d, { label: t.n })}<span class="zoom">⤢</span></div>
        ${(t.d.a || []).length ? '<div class="anim"><button class="btn sm" id="anim">▶ Animar la tarea</button></div>' : ''}
        ${legendHTML()}
        <div class="ct">${catTag(t)}<span class="tipo">${esc(t.tipo)}</span></div>
        <h1>${esc(t.n)}</h1>
        ${t.obj ? `<p class="objt">🎯 ${esc(t.obj)}</p>` : ''}
        <div class="acts">
          <button class="btn ${favs.has(t.id) ? 'on' : ''}" id="fav">${favs.has(t.id) ? '★ En favoritos' : '☆ Favorito'}</button>
          <button class="btn pri" id="add">+ Añadir a sesión</button>
          <button class="btn" id="share">Compartir texto</button>
          <button class="btn" id="img">🖼 Imagen para WhatsApp</button>
          ${t.own ? '<a class="btn" href="#/editar/' + t.id + '">✏️ Editar</a><button class="btn ghost" id="rm">🗑 Borrar</button>' : ''}
          <a class="btn" href="#/duplicar/${t.id}">⧉ ${t.own ? 'Duplicar' : 'Duplicar y editar'}</a>
        </div>
        <section class="pf">
          <h2>Datos para el preparador físico</h2>
          <div class="kv">
            <div><small>Intensidad</small>${intBadge(t)} <span class="sub">RPE ${t.rpe}</span></div>
            <div><small>Carga dominante</small><b>${t.carga}</b></div>
            <div class="full"><small>Día recomendado</small><div>${t.md.map(m => `<a class="md mdl" href="#/micro">${m}</a>`).join('')}</div></div>
            <div><small>Jugadores</small><b>${esc(t.jug)}</b></div>
            <div><small>Espacio</small><b>${t.esp[0]} x ${t.esp[1]} m</b>${m2 && t.cat === 'tt' ? `<span class="sub">≈ ${m2} m²/jugador</span>` : ''}</div>
            <div><small>Series</small><b>${esc(t.ser)}</b></div>
            <div><small>Recuperación</small><b>${esc(t.rec)}</b></div>
            <div><small>Duración total</small><b>${t.dur} min</b></div>
            <div><small>Carga estimada</small><b>${Math.round(rpeMid(t.rpe) * t.dur)} UA</b><span class="sub">RPE × min</span></div>
            <div><small>Dificultad</small><b>${DIF[t.dif]}</b></div>
            <div><small>Categorías</small><b>${t.ed.split('').map(e => ED[e]).join(', ')}</b></div>
          </div>
        </section>
        ${t.np && t.esp && t.esp[0] ? `<section class="adapt"><h2>Adaptar a mis jugadores</h2><div class="adrow"><label>Tengo <input id="adn" type="number" min="2" max="40" inputmode="numeric" value="${F.nj || t.np}"> jugadores</label><div id="adout"></div></div></section>` : ''}
        ${t.desc ? `<section><h2>Descripción</h2><p>${esc(t.desc).replace(/\n/g, '<br>')}</p></section>` : ''}
        ${t.reglas && t.reglas.length ? `<section><h2>Reglas</h2><ul>${li(t.reglas)}</ul></section>` : ''}
        ${t.cons && t.cons.length ? `<section><h2>Consignas</h2><ul>${li(t.cons)}</ul></section>` : ''}
        ${t.var && t.var.length ? `<section><h2>Variantes</h2><ul class="var">${li(t.var)}</ul></section>` : ''}
        <section class="notes"><h2>Mis notas</h2>
          <div class="stars" id="stars">${[1, 2, 3, 4, 5].map(i => `<button data-s="${i}" class="${((notes[t.id] || {}).s || 0) >= i ? 'on' : ''}" aria-label="${i} estrellas">★</button>`).join('')}<small class="sub">Valora la tarea</small></div>
          <textarea id="note" rows="3" placeholder="Ej.: con el cadete funcionó mejor en 30x25 y a dos toques">${esc((notes[t.id] || {}).t || '')}</textarea></section>
        ${related(t)}
      </article>`;
    const adn = $('#adn');
    if (adn) { const up = () => { const n = +adn.value, a = adapt(t, n); $('#adout').innerHTML = !a ? '' : a.same ? `<span class="sub">Es el número original: ${esc(t.jug)} en ${t.esp[0]}x${t.esp[1]} m (≈ ${a.m2} m²/jug.).</span>` : `<b>${a.jug ? esc(a.jug) + ' · ' : ''}${a.w} x ${a.h} m</b><span class="sub">Mantiene ≈ ${a.m2} m²/jugador (original: ${esc(t.jug)} en ${t.esp[0]}x${t.esp[1]} m). ${n > t.np * 1.6 ? 'Con tantos jugadores, plantéate hacer dos grupos.' : ''}</span>`; }; adn.oninput = up; up(); }
    let stopAnim = null;
    if ($('#anim')) $('#anim').onclick = () => {
      if (stopAnim) { stopAnim(); stopAnim = null; $('#bigd').innerHTML = drawField(t.d, { label: t.n }) + '<span class="zoom">⤢</span>'; $('#anim').textContent = '▶ Animar la tarea'; return; }
      $('#bigd').innerHTML = drawField(t.d, { label: t.n }) + '<span class="zoom">⤢</span>';
      $('#anim').textContent = '⏹ Parar';
      stopAnim = animateField($('#bigd'), t.d, () => { stopAnim = () => { }; $('#anim').textContent = '↺ Repetir'; });
    };
    $('#stars').onclick = e => { const b = e.target.closest('[data-s]'); if (!b) return; const n = notes[t.id] || {}; n.s = n.s === +b.dataset.s ? 0 : +b.dataset.s; notes[t.id] = n; saveNotes(); $('#stars').querySelectorAll('[data-s]').forEach(x => x.classList.toggle('on', +x.dataset.s <= n.s)); };
    let nt; $('#note').oninput = e => { clearTimeout(nt); nt = setTimeout(() => { const n = notes[t.id] || {}; n.t = e.target.value; notes[t.id] = n; saveNotes(); }, 400); };
    $('#img').onclick = () => shareImage(taskCanvas(t), t.n);
    $('#bigd').onclick = () => { if (stopAnim) return; fullField(t); };
    $('#fav').onclick = () => { favs.has(t.id) ? favs.delete(t.id) : favs.add(t.id); store.set('favs', [...favs]); vTask(id); toast(favs.has(t.id) ? 'Añadida a favoritos' : 'Quitada de favoritos'); };
    $('#add').onclick = () => { ses.items.push({ id: t.id, b: blockOf(t) }); saveSes(); toast('Añadida a la sesión'); };
    $('#share').onclick = async () => {
      const txt = `${t.n} (${t.md.join(', ')} · intensidad ${INT[t.int].n})\n${t.jug} · ${t.esp[0]}x${t.esp[1]} m · ${t.ser}\n\n${t.desc}\n\nMy Coach · biblioteca de tareas`;
      try { if (navigator.share) await navigator.share({ title: t.n, text: txt }); else { await navigator.clipboard.writeText(txt); toast('Copiada al portapapeles'); } } catch (e) { }
    };
    if ($('#rm')) $('#rm').onclick = () => { if (!confirm('¿Borrar "' + t.n + '"? No se puede deshacer.')) return; mine = mine.filter(x => x.id !== t.id); favs.delete(t.id); store.set('favs', [...favs]); saveMine(); toast('Tarea borrada'); location.hash = '#/mis'; };
    window.scrollTo(0, 0);
  }
  // ---------- Imagen para compartir ----------
  const svgImg = (d, w) => new Promise(res => {
    const svg = drawField(d).replace('<svg ', `<svg width="${w}" height="${Math.round(w / 1.5)}" `);
    const img = new Image(); img.onload = () => res(img); img.onerror = () => res(null);
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  function wrap(ctx, text, maxW) {
    const out = []; String(text || '').split('\n').forEach(par => { let line = ''; par.split(/\s+/).forEach(w => { const tl = line ? line + ' ' + w : w; if (ctx.measureText(tl).width > maxW && line) { out.push(line); line = w; } else line = tl; }); out.push(line); });
    return out;
  }
  const FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
  function rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
  async function taskCanvas(t) {
    const W = 1080, M = 44, c = document.createElement('canvas'), ctx = c.getContext('2d');
    ctx.font = `800 50px ${FONT}`; const title = wrap(ctx, t.n, W - 2 * M);
    ctx.font = `400 30px ${FONT}`; const desc = t.desc ? wrap(ctx, t.desc, W - 2 * M) : [];
    const rules = (t.reglas || []).flatMap(r => wrap(ctx, '• ' + r, W - 2 * M - 10));
    const H = 150 + title.length * 60 + 30 + 720 + 40 + 220 + (desc.length ? 30 + desc.length * 42 : 0) + (rules.length ? 70 + rules.length * 42 : 0) + 90;
    c.width = W; c.height = H;
    ctx.fillStyle = '#f3f6f4'; ctx.fillRect(0, 0, W, H);
    const g = ctx.createLinearGradient(0, 0, W, 0); g.addColorStop(0, '#15803d'); g.addColorStop(1, '#16a34a'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, 150 + title.length * 60);
    ctx.fillStyle = '#dcfce7'; ctx.font = `700 28px ${FONT}`; ctx.fillText(`${CAT[t.cat].n.toUpperCase()} · ${t.tipo}`, M, 70);
    ctx.fillStyle = '#fff'; ctx.font = `800 50px ${FONT}`; title.forEach((l, i) => ctx.fillText(l, M, 135 + i * 60));
    let y = 150 + title.length * 60 + 30;
    const img = await svgImg(t.d, W - 2 * M);
    ctx.save(); rr(ctx, M, y, W - 2 * M, (W - 2 * M) / 1.5, 22); ctx.clip(); if (img) ctx.drawImage(img, M, y, W - 2 * M, (W - 2 * M) / 1.5); ctx.restore();
    y += (W - 2 * M) / 1.5 + 40;
    const box = (x, lab, val, col) => { ctx.fillStyle = '#fff'; rr(ctx, x, y, 316, 120, 16); ctx.fill(); ctx.fillStyle = '#5b6b62'; ctx.font = `700 22px ${FONT}`; ctx.fillText(lab, x + 20, y + 38); ctx.fillStyle = col || '#0f1f17'; ctx.font = `800 32px ${FONT}`; wrap(ctx, val, 280).slice(0, 2).forEach((l, i) => ctx.fillText(l, x + 20, y + 78 + i * 34)); };
    box(M, 'INTENSIDAD', `${INT[t.int].n} · RPE ${t.rpe}`, INT[t.int].c); box(M + 338, 'DÍA (MD)', t.md.join(' · ')); box(M + 676, 'SERIES', `${t.ser}`);
    y += 178;
    ctx.fillStyle = '#0f1f17'; ctx.font = `700 30px ${FONT}`; wrap(ctx, `👥 ${t.jug}  ·  ${t.esp[0]}x${t.esp[1]} m  ·  ${t.dur} min  ·  Rec. ${t.rec}`, W - 2 * M).slice(0, 2).forEach((l, i) => ctx.fillText(l, M, y + i * 40)); y += 20;
    if (desc.length) { y += 30; ctx.font = `400 30px ${FONT}`; ctx.fillStyle = '#26352d'; desc.forEach(l => { y += 42; ctx.fillText(l, M, y); }); }
    if (rules.length) { y += 60; ctx.fillStyle = '#15803d'; ctx.font = `800 26px ${FONT}`; ctx.fillText('REGLAS', M, y); y += 10; ctx.fillStyle = '#26352d'; ctx.font = `400 30px ${FONT}`; rules.forEach(l => { y += 42; ctx.fillText(l, M + 6, y); }); }
    ctx.fillStyle = '#5b6b62'; ctx.font = `600 24px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText('My Coach · Biblioteca de tareas', W / 2, H - 36);
    return c;
  }
  async function sesCanvas(its) {
    const W = 1080, M = 40, RH = 330, c = document.createElement('canvas'), ctx = c.getContext('2d');
    const field = its.filter(x => x.b !== 'por'), tot = field.reduce((a, x) => a + x.t.dur, 0), ua = Math.round(field.reduce((a, x) => a + x.t.dur * rpeMid(x.t.rpe), 0));
    const H = 210 + its.length * RH + 80; c.width = W; c.height = H;
    ctx.fillStyle = '#f3f6f4'; ctx.fillRect(0, 0, W, H);
    const g = ctx.createLinearGradient(0, 0, W, 0); g.addColorStop(0, '#15803d'); g.addColorStop(1, '#16a34a'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, 180);
    ctx.fillStyle = '#fff'; ctx.font = `800 52px ${FONT}`; ctx.fillText(`Sesión ${ses.md}`, M, 85);
    ctx.font = `600 30px ${FONT}`; ctx.fillStyle = '#dcfce7'; ctx.fillText(`${MDINFO[ses.md].t} · ${tot} min · ${ua} UA · ${its.length} tareas`, M, 140);
    let y = 210;
    for (let i = 0; i < its.length; i++) {
      const t = its[i].t, iw = 420, ih = 280;
      ctx.fillStyle = '#fff'; rr(ctx, M, y, W - 2 * M, RH - 20, 20); ctx.fill();
      const img = await svgImg(t.d, iw); ctx.save(); rr(ctx, M + 15, y + 15, iw, ih, 14); ctx.clip(); if (img) ctx.drawImage(img, M + 15, y + 15, iw, ih); ctx.restore();
      const x = M + iw + 40, mw = W - M - x - 20;
      ctx.fillStyle = '#15803d'; ctx.font = `800 22px ${FONT}`; ctx.fillText(BLK[its[i].b].toUpperCase(), x, y + 52);
      ctx.fillStyle = '#0f1f17'; ctx.font = `800 34px ${FONT}`; const tl = wrap(ctx, `${i + 1}. ${t.n}`, mw).slice(0, 2); tl.forEach((l, k) => ctx.fillText(l, x, y + 96 + k * 40));
      let yy = y + 96 + tl.length * 40 + 10;
      ctx.fillStyle = INT[t.int].c; ctx.beginPath(); ctx.arc(x + 10, yy - 9, 10, 0, 7); ctx.fill();
      ctx.fillStyle = '#26352d'; ctx.font = `700 28px ${FONT}`; ctx.fillText(`${INT[t.int].n} · RPE ${t.rpe} · ${t.dur}'`, x + 30, yy);
      ctx.font = `400 26px ${FONT}`; wrap(ctx, `${t.ser} · rec. ${t.rec}`, mw).slice(0, 2).forEach(l => { yy += 38; ctx.fillText(l, x, yy); });
      yy += 38; ctx.fillText(`${t.jug} · ${t.esp[0]}x${t.esp[1]} m`, x, yy);
      y += RH;
    }
    ctx.fillStyle = '#5b6b62'; ctx.font = `600 24px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText('My Coach · Biblioteca de tareas', W / 2, H - 36);
    return c;
  }
  async function shareImage(cP, name) {
    toast('Preparando imagen…');
    const c = await cP; const blob = await new Promise(r => c.toBlob(r, 'image/png'));
    const fn = (name || 'tarea').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase().slice(0, 50) + '.png';
    const file = new File([blob], fn, { type: 'image/png' });
    try { if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: name }); return; } } catch (e) { if (e.name === 'AbortError') return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = fn; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 3000); toast('Imagen descargada');
  }
  function fullField(t) {
    const o = document.createElement('div'); o.className = 'fsov';
    o.innerHTML = `<div class="fs">${drawField(t.d, { label: t.n })}</div><button class="fsx" aria-label="Cerrar">✕</button><div class="fst">${esc(t.n)}</div>`;
    const close = () => { o.remove(); document.removeEventListener('keydown', k); };
    const k = e => { if (e.key === 'Escape') close(); };
    o.onclick = close; document.addEventListener('keydown', k); document.body.appendChild(o);
  }
  function related(t) {
    const r = TAREAS.filter(x => x.id !== t.id && x.cat === t.cat && x.md.some(m => t.md.includes(m))).slice(0, 4);
    return r.length ? `<section><h2>Tareas parecidas</h2><div class="grid">${r.map(card).join('')}</div></section>` : '';
  }

  // ---------- Sesión ----------
  const BLK = { cal: 'Calentamiento / activación', pri: 'Parte principal', vc: 'Prevención y vuelta a la calma', por: 'Porteros (en paralelo)' };
  const blockOf = t => t.cat === 'por' ? 'por' : t.fase;
  const pick = (pool, used, maxDur) => { const p = pool.filter(t => !used.has(t.id) && (!maxDur || t.dur <= maxDur)); return p.length ? p[Math.floor(Math.random() * p.length)] : null; };

  function generar() {
    const md = ses.md, ok = t => t.md.includes(md), used = new Set(), items = [];
    const add = (t, b) => { if (t) { used.add(t.id); items.push({ id: t.id, b }); return t.dur; } return 0; };
    const field = TAREAS.filter(t => ok(t) && t.cat !== 'por');
    let left = ses.min;
    left -= add(pick(field.filter(t => t.fase === 'cal'), used, 15), 'cal');
    const vcT = pick(field.filter(t => t.fase === 'vc'), used, 12);
    left -= vcT ? vcT.dur : 0;
    const main = field.filter(t => t.fase === 'pri' && (t.tipo !== 'Compensatorio' || md === 'MD+2'));
    const order = md === 'MD+1' ? ['pre', 'tt', 'fis'] : md === 'MD-1' ? ['tt', 'tt', 'tt'] : md === 'MD-4' || md === 'MD-2' ? ['fis', 'tt', 'tt'] : ['tt', 'fis', 'tt'];
    for (let i = 0; left >= 10 && i < 6; i++) {
      const want = order[i % order.length];
      const t = pick(main.filter(x => x.cat === want), used, left + 3) || pick(main, used, left + 3);
      if (!t) break; left -= add(t, 'pri');
    }
    if (vcT) add(vcT, 'vc');
    if (ses.gk) { let g = ses.min - 15; const gp = TAREAS.filter(t => t.cat === 'por' && ok(t)); add(pick(gp.filter(t => t.fase === 'cal'), used), 'por'); for (let i = 0; i < 3 && g > 10; i++) { const t = pick(gp.filter(t => t.fase === 'pri'), used, g); if (!t) break; g -= add(t, 'por'); } }
    ses.items = items; saveSes();
    if (!items.length) toast('No hay tareas para ' + md + ' (suele ser día de descanso)');
  }

  function vSes() {
    const its = ses.items.map((x, i) => ({ ...x, i, t: byId[x.id] })).filter(x => x.t);
    const field = its.filter(x => x.b !== 'por');
    const tot = field.reduce((a, x) => a + x.t.dur, 0);
    const ua = Math.round(field.reduce((a, x) => a + x.t.dur * rpeMid(x.t.rpe), 0));
    const byInt = [1, 2, 3, 4].map(n => field.filter(x => x.t.int === n).reduce((a, x) => a + x.t.dur, 0));
    const info = MDINFO[ses.md];
    const opt = (arr, cur) => arr.map(v => `<option ${v == cur ? 'selected' : ''} value="${v}">${v}${typeof v === 'number' ? ' min' : ''}</option>`).join('');
    $('#app').innerHTML = `
      <section class="gen">
        <h1>Generador de sesión</h1>
        <div class="form">
          <label>Día<select id="smd">${opt(MDS, ses.md)}</select></label>
          <label>Duración<select id="smin">${opt([45, 60, 75, 90, 105], ses.min)}</select></label>
          <label class="chk"><input type="checkbox" id="sgk" ${ses.gk ? 'checked' : ''}> Porteros</label>
        </div>
        <p class="hint"><b>${ses.md} · ${info.t}.</b> ${info.obj}</p>
        <div class="acts"><button class="btn pri" id="gen">⚡ Generar sesión</button>${its.length ? '<button class="btn" id="clear">Vaciar</button>' : ''}</div>
      </section>
      ${its.length ? `<section class="sum">
        <div><small>Duración</small><b>${tot} min</b></div>
        <div><small>Carga estimada</small><b>${ua} UA</b></div>
        <div><small>Tareas</small><b>${its.length}</b></div>
        <div class="bar full" title="Minutos por intensidad">${byInt.map((m, k) => m ? `<i style="flex:${m};background:${INT[k + 1].c}" title="${INT[k + 1].n}: ${m} min"></i>` : '').join('')}</div>
        <div class="full barl">${byInt.map((m, k) => m ? `<span><i style="background:${INT[k + 1].c}"></i>${INT[k + 1].n} ${m}'</span>` : '').join('')}</div>
      </section>` : '<div class="empty">Elige el día y la duración y pulsa <b>Generar sesión</b>, o añade tareas desde la biblioteca.</div>'}
      ${Object.entries(BLK).map(([b, n]) => { const l = its.filter(x => x.b === b); return l.length ? `<section class="blk"><h2>${n}</h2>${l.map(x => `
        <div class="sit"><a href="#/t/${x.t.id}" class="thumb s">${drawField(x.t.d, { mini: true })}</a>
          <div class="ci"><a href="#/t/${x.t.id}"><h3>${esc(x.t.n)}</h3></a><div class="meta">${intBadge(x.t)}<span>⏱ ${x.t.dur}'</span><span>${esc(x.t.ser)}</span></div></div>
          <div class="ops"><button data-op="up" data-i="${x.i}" aria-label="Subir">↑</button><button data-op="down" data-i="${x.i}" aria-label="Bajar">↓</button><button data-op="swap" data-i="${x.i}" aria-label="Cambiar">⟳</button><button data-op="del" data-i="${x.i}" aria-label="Quitar">✕</button></div>
        </div>`).join('')}</section>` : ''; }).join('')}
      ${its.length ? '<div class="acts"><a class="btn pri" href="#/campo">▶ Modo campo</a><button class="btn" id="save">Guardar sesión</button><a class="btn" href="#/plan">📅 Llevar al plan</a><button class="btn" id="simg">🖼 Imagen</button><button class="btn" id="print">Imprimir / PDF</button></div>' : ''}
      ${saved.length ? `<section class="blk"><h2>Sesiones guardadas</h2>${saved.map((s, i) => `<div class="saved"><div><b>${esc(s.name)}</b><small>${s.md} · ${s.items.length} tareas · ${s.date}</small></div><button class="btn" data-load="${i}">Abrir</button><button class="btn ghost" data-rm="${i}">✕</button></div>`).join('')}</section>` : ''}`;
    $('#smd').onchange = e => { ses.md = e.target.value; saveSes(); vSes(); };
    $('#smin').onchange = e => { ses.min = +e.target.value; saveSes(); };
    $('#sgk').onchange = e => { ses.gk = e.target.checked; saveSes(); };
    $('#gen').onclick = () => { generar(); vSes(); };
    if ($('#clear')) $('#clear').onclick = () => { ses.items = []; saveSes(); vSes(); };
    if ($('#print')) $('#print').onclick = () => printSes(its);
    if ($('#simg')) $('#simg').onclick = () => shareImage(sesCanvas(its), 'sesion-' + ses.md);
    if ($('#save')) $('#save').onclick = () => {
      const name = prompt('Nombre de la sesión', `${ses.md} · ${new Date().toLocaleDateString('es-ES')}`); if (!name) return;
      saved.unshift({ name, md: ses.md, min: ses.min, items: ses.items, date: new Date().toLocaleDateString('es-ES') }); store.set('saved', saved); vSes(); toast('Sesión guardada');
    };
    $('#app').querySelectorAll('[data-op]').forEach(b => b.onclick = () => {
      const i = +b.dataset.i, op = b.dataset.op, it = ses.items[i];
      if (op === 'del') ses.items.splice(i, 1);
      if (op === 'up') { const j = ses.items.slice(0, i).map((x, k) => x.b === it.b ? k : -1).filter(k => k >= 0).pop(); if (j !== undefined) [ses.items[j], ses.items[i]] = [ses.items[i], ses.items[j]]; }
      if (op === 'down') { const j = ses.items.findIndex((x, k) => k > i && x.b === it.b); if (j >= 0) [ses.items[j], ses.items[i]] = [ses.items[i], ses.items[j]]; }
      if (op === 'swap') {
        const cur = byId[it.id], used = new Set(ses.items.map(x => x.id));
        const pool = TAREAS.filter(t => t.md.includes(ses.md) && blockOf(t) === it.b && !used.has(t.id));
        const same = pool.filter(t => t.cat === cur.cat); const n = pick(same.length ? same : pool, used);
        if (n) it.id = n.id; else toast('No hay otra tarea para este bloque');
      }
      saveSes(); vSes();
    });
    $('#app').querySelectorAll('[data-load]').forEach(b => b.onclick = () => { const s = saved[+b.dataset.load]; ses = { ...ses, md: s.md, min: s.min || ses.min, items: JSON.parse(JSON.stringify(s.items)) }; saveSes(); vSes(); window.scrollTo(0, 0); });
    $('#app').querySelectorAll('[data-rm]').forEach(b => b.onclick = () => { if (confirm('¿Borrar esta sesión guardada?')) { saved.splice(+b.dataset.rm, 1); store.set('saved', saved); vSes(); } });
  }

  function printSes(its) {
    let pr = $('#printv'); if (!pr) { pr = document.createElement('div'); pr.id = 'printv'; document.body.appendChild(pr); }
    const field = its.filter(x => x.b !== 'por');
    const tot = field.reduce((a, x) => a + x.t.dur, 0), ua = Math.round(field.reduce((a, x) => a + x.t.dur * rpeMid(x.t.rpe), 0));
    const li = a => a && a.length ? `<ul>${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
    pr.innerHTML = `<header class="ph"><div><h1>Sesión ${ses.md} · ${MDINFO[ses.md].t}</h1><p>Fecha: ____________ &nbsp; Equipo: ______________________</p></div><div class="pk"><b>${tot} min</b><span>${ua} UA estimadas</span><span>${its.length} tareas</span></div></header>` +
      Object.entries(BLK).map(([b, n]) => { const l = its.filter(x => x.b === b); return l.length ? `<h2>${n}</h2>` + l.map((x, k) => `<article class="pt"><div class="pd">${drawField(x.t.d)}</div><div class="pi"><h3>${k + 1}. ${esc(x.t.n)}</h3>
        <p class="pm"><b>${INT[x.t.int].n}</b> (RPE ${esc(x.t.rpe)}) · ${x.t.dur}' · ${esc(x.t.ser)} · rec. ${esc(x.t.rec)} · ${esc(x.t.jug)} · ${x.t.esp[0]}x${x.t.esp[1]} m</p>
        ${x.t.obj ? `<p><b>Objetivo:</b> ${esc(x.t.obj)}</p>` : ''}${x.t.desc ? `<p>${esc(x.t.desc)}</p>` : ''}${li(x.t.reglas)}</div></article>`).join('') : ''; }).join('') +
      `<p class="pf2">My Coach · Biblioteca de tareas</p>`;
    document.body.classList.add('printing');
    const off = () => { document.body.classList.remove('printing'); window.removeEventListener('afterprint', off); };
    window.addEventListener('afterprint', off);
    setTimeout(() => { window.print(); setTimeout(off, 1000); }, 50);
  }

  // ---------- Modo campo (cronómetro de series) ----------
  // Convierte "4 x 4'" / "3 series x 4 reps" + recuperación en una secuencia de fases
  const secs = str => { str = String(str || '').replace(/[’´]/g, "'").replace(/[“”]/g, '"'); const m = str.match(/(\d+)\s*'\s*(?:(\d+)\s*")?/); if (m) return (+m[1]) * 60 + (+(m[2] || 0)); const n = str.match(/(\d+)\s*"/); return n ? +n[1] : 0; };
  function parseSer(t) {
    const s = String(t.ser).replace(/[’´]/g, "'").replace(/[“”]/g, '"'), r = String(t.rec);
    let m = s.match(/^(\d+)\s*x\s*(\d+\s*'(?:\s*\d+\s*")?|\d+\s*")/);
    if (m) return { mode: 'timed', reps: +m[1], work: secs(m[2]), rest: secs(r) };
    const ind = r.match(/^(.*?)entre (reps|sprints|carreras|relevos|duelos|pasadas|caídas)/i), set = r.match(/,\s*([^,]*?)\s*entre series/i);
    m = s.match(/^(\d+)(?:-\d+)?\s*(?:series\s*)?x\s*(\d+)(?:-\d+)?/i);
    if (m && ind) return { mode: 'count', sets: +m[1], reps: +m[2], rest: secs(ind[1]), restSet: set ? secs(set[1]) : secs(ind[1]) };
    m = s.match(/^(\d+)(?:-\d+)?\s*(?:series\s*)?x/i) || s.match(/^(\d+)(?:-\d+)?\s+(?:sprints|repeticiones|relevos|vueltas|carreras)/i);
    if (m) return { mode: 'count', sets: 1, reps: +m[1], rest: secs(r), restSet: 0 };
    return { mode: 'total', work: t.dur * 60 };
  }
  function buildSeq(c) {
    const q = [];
    if (c.mode === 'timed') for (let i = 1; i <= c.reps; i++) { q.push({ k: 'work', s: c.work, lab: `Serie ${i} de ${c.reps}` }); if (i < c.reps && c.rest) q.push({ k: 'rest', s: c.rest, lab: `Descanso · sigue la serie ${i + 1}` }); }
    else if (c.mode === 'count') for (let st = 1; st <= c.sets; st++) for (let i = 1; i <= c.reps; i++) {
      const lab = (c.sets > 1 ? `Serie ${st}/${c.sets} · ` : '') + `Rep ${i} de ${c.reps}`;
      q.push({ k: 'work', s: null, lab });
      const last = i === c.reps, lastSet = st === c.sets;
      if (!(last && lastSet)) { const rs = last ? c.restSet : c.rest; if (rs) q.push({ k: 'rest', s: rs, lab: last ? 'Descanso entre series' : 'Descanso' }); }
    }
    else q.push({ k: 'work', s: c.work, lab: 'Tiempo de tarea' });
    return q;
  }
  let RUN = null;
  function vCampo() {
    const its = ses.items.map(x => byId[x.id] ? { ...x, t: byId[x.id] } : null).filter(Boolean);
    if (!its.length) { $('#app').innerHTML = '<div class="empty">La sesión está vacía. Genera o crea una sesión primero.</div><div class="acts center"><a class="btn pri" href="#/sesion">Ir a Sesión</a></div>'; return; }
    if (!RUN || RUN.n !== its.length) RUN = { idx: 0, n: its.length };
    stopTimer();
    RUN.idx = Math.min(RUN.idx, its.length - 1);
    const x = its[RUN.idx], t = x.t, c = parseSer(t);
    RUN.cfg = c;
    const inp = (id, lab, v, step, min) => `<label>${lab}<input type="number" id="${id}" min="${min}" step="${step}" value="${v}"></label>`;
    const cfgHTML = c.mode === 'timed' ? inp('cr', 'Series', c.reps, 1, 1) + inp('cw', 'Trabajo (s)', c.work, 5, 5) + inp('cd', 'Descanso (s)', c.rest, 5, 0)
      : c.mode === 'count' ? (c.sets > 1 ? inp('cs', 'Series', c.sets, 1, 1) : '') + inp('cr', 'Repeticiones', c.reps, 1, 1) + inp('cd', 'Descanso (s)', c.rest, 5, 0) + (c.sets > 1 ? inp('cds', 'Entre series (s)', c.restSet, 15, 0) : '')
      : inp('cw', 'Minutos', Math.round(c.work / 60), 1, 1);
    $('#app').innerHTML = `<section class="campo">
      <div class="cnav"><button class="btn" id="prv" ${RUN.idx ? '' : 'disabled'} aria-label="Tarea anterior">‹</button><div><small>${BLK[x.b]} · ${RUN.idx + 1}/${its.length}</small><h1>${esc(t.n)}</h1></div><button class="btn" id="nxt" ${RUN.idx < its.length - 1 ? '' : 'disabled'} aria-label="Tarea siguiente">›</button></div>
      <div class="big" id="bigd">${drawField(t.d, { label: t.n })}<span class="zoom">⤢</span></div>
      <p class="pm">${intBadge(t)} RPE ${esc(t.rpe)} · ${esc(t.jug)} · ${t.esp[0]}x${t.esp[1]} m · ${esc(t.ser)} · rec. ${esc(t.rec)}</p>
      <div class="timer" id="timer"><div class="ph" id="tph"></div><div class="tt" id="ttime"></div><div class="tr" id="trep"></div></div>
      <div class="cfg">${cfgHTML}</div>
      <div class="acts center"><button class="btn pri big2" id="play"></button><button class="btn" id="skip"></button><button class="btn" id="rst" aria-label="Reiniciar">↺</button></div>
      ${c.mode === 'count' ? '<p class="sub center">En las repeticiones sin tiempo, pulsa <b>✓ Hecho</b> al terminar cada una y empieza la cuenta atrás del descanso.</p>' : ''}
      <details><summary>Descripción y reglas</summary><p>${esc(t.desc)}</p><ul>${(t.reglas || []).map(r => `<li>${esc(r)}</li>`).join('')}</ul></details>
    </section>`;
    const readCfg = () => {
      const v = (id, d) => { const e = $('#' + id); return e ? Math.max(0, +e.value || 0) : d; };
      if (c.mode === 'timed') { c.reps = Math.max(1, v('cr', 1)); c.work = Math.max(5, v('cw', 5)); c.rest = v('cd', 0); }
      else if (c.mode === 'count') { c.sets = Math.max(1, v('cs', c.sets)); c.reps = Math.max(1, v('cr', 1)); c.rest = v('cd', 0); c.restSet = v('cds', c.rest); }
      else c.work = Math.max(1, v('cw', 1)) * 60;
      RUN.seq = buildSeq(c); RUN.i = 0; RUN.left = RUN.seq[0].s; RUN.up = 0; RUN.started = false; RUN.done = false;
    };
    const fmt = n => `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`;
    const upd = () => {
      const ph = RUN.seq[RUN.i];
      if (RUN.done) { $('#tph').textContent = '¡TAREA TERMINADA!'; $('#ttime').textContent = '✓'; $('#trep').textContent = RUN.idx < its.length - 1 ? 'Pulsa › para pasar a la siguiente tarea' : 'Fin de la sesión'; }
      else {
        $('#tph').textContent = ph.k === 'work' ? (c.mode === 'total' ? 'TIEMPO DE TAREA' : ph.s == null ? '¡YA! · REPETICIÓN' : 'TRABAJO') : 'DESCANSO';
        $('#ttime').textContent = ph.s == null ? fmt(RUN.up) : fmt(RUN.left);
        $('#trep').textContent = ph.lab;
      }
      $('#timer').className = 'timer ' + (RUN.done ? 'done' : ph.k) + (RUN.on ? ' on' : '');
      $('#play').textContent = RUN.done ? '↺ Repetir' : RUN.on ? '⏸ Pausa' : RUN.started ? '▶ Seguir' : '▶ Empezar';
      $('#skip').textContent = !RUN.done && ph.k === 'work' && ph.s == null ? '✓ Hecho' : '⏭ Saltar';
      $('#skip').disabled = RUN.done;
    };
    const advance = () => {
      RUN.i++;
      if (RUN.i >= RUN.seq.length) { RUN.done = true; stopTimer(); beep(660, .3); setTimeout(() => beep(880, .7), 350); }
      else { const ph = RUN.seq[RUN.i]; RUN.left = ph.s; RUN.up = 0; beep(ph.k === 'work' ? 880 : 440, .5); }
      try { navigator.vibrate && navigator.vibrate(300); } catch (e) { }
      upd();
    };
    const tick = () => {
      const ph = RUN.seq[RUN.i];
      if (ph.s == null) { RUN.up++; upd(); return; }
      RUN.left--; if (RUN.left > 0 && RUN.left <= 3) beep(600, .12);
      if (RUN.left <= 0) advance(); else upd();
    };
    $('#play').onclick = () => {
      if (RUN.on) { stopTimer(); upd(); return; }
      if (RUN.done) readCfg();
      if (!RUN.started) { RUN.started = true; beep(880, .4); }
      RUN.on = true; wake(true); RUN.iv = setInterval(tick, 1000); upd();
    };
    $('#skip').onclick = () => { if (!RUN.started) { RUN.started = true; RUN.on = true; wake(true); RUN.iv = setInterval(tick, 1000); } advance(); };
    $('#rst').onclick = () => { stopTimer(); readCfg(); upd(); };
    $('#app').querySelectorAll('.cfg input').forEach(i => i.onchange = () => { stopTimer(); readCfg(); upd(); });
    $('#bigd').onclick = () => fullField(t);
    $('#prv').onclick = () => { RUN.idx--; vCampo(); };
    $('#nxt').onclick = () => { RUN.idx++; vCampo(); };
    readCfg(); upd();
  }
  function stopTimer() { if (RUN && RUN.iv) { clearInterval(RUN.iv); RUN.iv = null; } if (RUN) RUN.on = false; wake(false); }
  let AC = null, WL = null;
  function beep(f, d) { try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const o = AC.createOscillator(), g = AC.createGain(); o.frequency.value = f; o.connect(g); g.connect(AC.destination); g.gain.setValueAtTime(.25, AC.currentTime); g.gain.exponentialRampToValueAtTime(.001, AC.currentTime + d); o.start(); o.stop(AC.currentTime + d); } catch (e) { } }
  async function wake(on) { try { if (on && 'wakeLock' in navigator && !WL) { WL = await navigator.wakeLock.request('screen'); WL.addEventListener('release', () => WL = null); } else if (!on && WL) { await WL.release(); WL = null; } } catch (e) { } }

  function vMicro() {
    $('#app').innerHTML = `<section class="intro"><h1>Microciclo competitivo</h1><p>Guía de la semana con un partido (domingo). Cada día tiene una carga dominante: así se reparte el esfuerzo para llegar fresco al partido. Si tu equipo entrena 3 días, prioriza <b>MD-4</b>, <b>MD-3/MD-2</b> y <b>MD-1</b>.</p></section>
      <div class="week">${MDS.map(m => { const x = MDINFO[m], n = TAREAS.filter(t => t.md.includes(m)).length; return `
        <article class="day" style="--c:${INT[x.int].c}">
          <header><b>${m}</b><span>${x.dia} · ${x.t}</span></header>
          <div class="kv s"><div><small>Intensidad</small>${x.int ? `<span class="int" style="--c:${INT[x.int].c}"><i></i>${INT[x.int].n}</span>` : ''}</div><div><small>Volumen</small><b>${x.vol}</b></div><div><small>Espacio</small><b>${x.esp}</b></div></div>
          <p>${x.obj}</p><p class="sub">${x.tareas}</p>
          ${n ? `<div class="acts"><a class="btn" href="#/?md=${encodeURIComponent(m)}">Ver ${n} tareas</a><button class="btn pri" data-gen="${m}">Crear sesión</button></div>` : ''}
        </article>`; }).join('')}</div>
      <p class="note">Las intensidades son orientativas (RPE 1-10). Ajústalas según la categoría, el momento de la temporada y el estado de cada jugador.</p>`;
    $('#app').querySelectorAll('[data-gen]').forEach(b => b.onclick = () => { ses.md = b.dataset.gen; generar(); location.hash = '#/sesion'; });
  }

  function vMis() {
    const l = TAREAS.filter(t => favs.has(t.id));
    $('#app').innerHTML = `<section class="intro"><h1>Mis tareas</h1>
        <div class="acts"><a class="btn pri" href="#/nueva">＋ Nueva tarea</a><button class="btn" id="exp">⬇ Copia de seguridad</button><label class="btn">⬆ Restaurar / importar<input type="file" id="imp" accept=".json,application/json" hidden></label></div>
        <p class="sub">La copia incluye tus tareas, notas, valoraciones, sesiones guardadas y la planificación. Úsala para cambiar de móvil o compartir tus tareas con otros entrenadores.</p></section>
      <section><h2>Creadas por mí (${mine.length})</h2>${mine.length ? `<div class="grid">${mine.map(card).join('')}</div>` : '<div class="empty">Todavía no has creado tareas. Pulsa <b>Nueva tarea</b> o abre cualquier tarea de la biblioteca y pulsa <b>Duplicar y editar</b> para adaptarla.</div>'}</section>
      <section><h2>Favoritos (${l.length})</h2>${l.length ? `<div class="grid">${l.map(card).join('')}</div>` : '<div class="empty">Pulsa ☆ en cualquier tarea para guardarla aquí.</div>'}</section>
      <p class="note center"><a href="privacidad.html">Política de privacidad</a> · My Coach</p>`;
    $('#exp').onclick = () => {
      const blob = new Blob([JSON.stringify({ app: 'My Coach', version: 2, tareas: mine, notas: notes, sesiones: saved, plan }, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'mycoach-copia-' + iso(new Date()) + '.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
    $('#imp').onchange = async e => {
      const f = e.target.files[0]; if (!f) return;
      try {
        const j = JSON.parse(await f.text()); const arr = Array.isArray(j) ? j : j.tareas;
        if (!Array.isArray(arr)) throw 0;
        if (j.notas) { notes = { ...j.notas, ...notes }; saveNotes(); }
        if (Array.isArray(j.sesiones)) { const ks = new Set(saved.map(x => x.name + x.date)); j.sesiones.forEach(x => { if (!ks.has(x.name + x.date)) saved.push(x); }); store.set('saved', saved); }
        if (j.plan) { plan = { ...j.plan, ...plan }; savePlan(); }
        let n = 0;
        arr.forEach(t => { if (!t || !t.n || !t.d || !Array.isArray(t.md)) return; const ex = mine.find(m => m.id === t.id); if (ex && JSON.stringify(ex) === JSON.stringify({ ...t, own: true })) return; t = { ...t, own: true, id: ex || byId[t.id] ? newId() : (t.id || newId()) }; mine.unshift(t); n++; });
        saveMine(); toast(n ? `${n} tarea${n > 1 ? 's' : ''} importada${n > 1 ? 's' : ''}` : 'No había tareas nuevas'); vMis();
      } catch (err) { toast('El archivo no es válido'); }
    };
  }
  const newId = () => 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  const BLANK = { n: '', cat: 'tt', tipo: '', md: [], int: 2, rpe: '', carga: 'Tensión', fase: 'pri', dif: 2, ed: 'ICJS', jug: '', np: '', esp: null, ser: '', rec: '', dur: '', obj: '', desc: '', reglas: [], cons: [], var: [], d: { v: [27.5, 11, 50, 46] } };
  function vEdit(mode, id) {
    let t;
    if (mode === 'nueva') t = JSON.parse(JSON.stringify(BLANK));
    else { const src = byId[id]; if (!src) { $('#app').innerHTML = '<div class="empty">Tarea no encontrada.</div>'; return; } t = JSON.parse(JSON.stringify(src)); if (mode === 'duplicar') { delete t.id; t.n = t.n + ' (copia)'; } }
    TaskEditor.mount($('#app'), t, {
      title: { nueva: 'Nueva tarea', editar: 'Editar tarea', duplicar: 'Duplicar y editar' }[mode],
      onSave(out) {
        if (out.id && mine.some(m => m.id === out.id)) mine = mine.map(m => m.id === out.id ? out : m);
        else { out.id = newId(); mine.unshift(out); }
        saveMine(); toast('Tarea guardada'); location.replace('#/t/' + out.id);
      },
      onCancel() { history.length > 1 ? history.back() : (location.hash = '#/mis'); }
    });
    window.scrollTo(0, 0);
  }

  // ---------- Planificador ----------
  let planWk = 0;
  const DN = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const MN = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const sesTot = items => { const f = items.map(x => byId[x.id] ? { ...x, t: byId[x.id] } : null).filter(x => x && x.b !== 'por'); return { min: f.reduce((a, x) => a + x.t.dur, 0), ua: Math.round(f.reduce((a, x) => a + x.t.dur * rpeMid(x.t.rpe), 0)) }; };
  function weekStats(mon) {
    const days = [...Array(7)].map((_, i) => plan[iso(addDays(mon, i))]);
    const pl = days.reduce((a, e) => a + dayLoad(e), 0), hasReal = days.some(e => e && e.real != null && e.real !== '');
    const rl = days.reduce((a, e) => a + (e && e.real != null && e.real !== '' ? +e.real : 0), 0);
    const eff = days.map(effLoad), tot = eff.reduce((a, b) => a + b, 0), mean = tot / 7, sd = Math.sqrt(eff.reduce((a, b) => a + (b - mean) ** 2, 0) / 7);
    return { pl, rl, hasReal, tot, mono: sd ? mean / sd : null, strain: sd ? Math.round(tot * mean / sd) : null };
  }
  function acwr(mon) {
    const a = weekStats(mon).tot, ch = [1, 2, 3, 4].map(i => weekStats(addDays(mon, -7 * i)).tot).filter(x => x > 0);
    return ch.length >= 2 && a ? a / (ch.reduce((x, y) => x + y, 0) / ch.length) : null;
  }
  const acwrTag = v => v == null ? ['—', 'var(--mu)', 'Faltan semanas para calcularlo'] : v < .8 ? [v.toFixed(2), '#0891b2', 'Carga baja respecto a las últimas semanas'] : v <= 1.3 ? [v.toFixed(2), '#16a34a', 'Zona óptima (0,8-1,3)'] : v <= 1.5 ? [v.toFixed(2), '#f59e0b', 'Precaución: subida de carga'] : [v.toFixed(2), '#dc2626', 'Riesgo: pico de carga (> 1,5)'];
  let planT; const rePlan = () => { clearTimeout(planT); planT = setTimeout(vPlan, 0); };
  function vPlan() {
    const mon = addDays(monday(new Date()), planWk * 7), today = iso(new Date());
    const st = weekStats(mon), ac = acwrTag(acwr(mon));
    const fmtD = d => `${d.getDate()} ${MN[d.getMonth()]}`;
    const opts = `<option value="">Asignar…</option><option value="cur">📋 Sesión actual (${ses.md})</option>${saved.map((x, i) => `<option value="sv:${i}">💾 ${esc(x.name)}</option>`).join('')}<option value="match">⚽ Partido</option><option value="rest">😴 Descanso</option><option value="clr">✕ Vaciar día</option>`;
    const rows = [...Array(7)].map((_, i) => {
      const d = addDays(mon, i), f = iso(d), e = plan[f], md = mdOf(f), l = dayLoad(e);
      const body = !e || e.k === 'none' ? '<span class="sub">Sin planificar</span>'
        : e.k === 'ses' ? `<b>${esc(e.name)}</b><span class="sub">${e.min}' · ${e.ua} UA · ${e.items.length} tareas</span><button class="link" data-open="${f}">Abrir en Sesión</button>`
        : e.k === 'match' ? `<b>⚽ Partido</b><span class="sub"><input type="number" class="mini" data-mm="${f}" value="${e.min}">' × RPE <input type="number" class="mini" data-mr="${f}" value="${e.rpe}" min="1" max="10"> = ${l} UA</span>`
        : '<b>😴 Descanso</b>';
      return `<div class="pday ${f === today ? 'today' : ''} ${e && e.k === 'match' ? 'match' : ''}">
        <div class="pd1"><b>${DN[i]}</b><small>${fmtD(d)}</small>${md ? `<span class="md">${md}</span>` : ''}</div>
        <div class="pd2">${body}</div>
        <div class="pd3"><select data-as="${f}" aria-label="Asignar">${opts}</select><label class="real">Real <input type="number" inputmode="numeric" data-real="${f}" value="${e && e.real != null ? e.real : ''}" placeholder="UA"></label></div>
      </div>`;
    }).join('');
    // gráfica de temporada: 9 semanas atrás + 3 adelante
    const W = [...Array(12)].map((_, i) => { const m = addDays(mon, (i - 8) * 7), s2 = weekStats(m); return { m, ...s2, ac: acwr(m) }; });
    const mx = Math.max(400, ...W.map(w => Math.max(w.pl, w.rl))) * 1.15, bw = 100 / 12;
    const chart = `<svg viewBox="0 0 100 52" class="chart" role="img" aria-label="Carga semanal">
      ${W.map((w, i) => { const x = i * bw, hp = w.pl / mx * 40, hr = w.rl / mx * 40, cur = i === 8; const a = acwrTag(w.ac);
        return `<rect x="${x + bw * .14}" y="${44 - hp}" width="${bw * .36}" height="${hp}" rx=".6" fill="${cur ? '#16a34a' : '#86efac'}"/>`
          + (w.hasReal ? `<rect x="${x + bw * .52}" y="${44 - hr}" width="${bw * .36}" height="${hr}" rx=".6" fill="${cur ? '#14532d' : '#4b5563'}"/>` : '')
          + (w.ac != null ? `<text x="${x + bw / 2}" y="${Math.min(44 - Math.max(hp, hr), 44) - 1.5}" font-size="2.6" text-anchor="middle" fill="${a[1]}" font-weight="800">${w.ac.toFixed(2)}</text>` : '')
          + `<text x="${x + bw / 2}" y="49.5" font-size="2.5" text-anchor="middle" fill="currentColor" opacity="${cur ? 1 : .6}" font-weight="${cur ? 800 : 500}">${w.m.getDate()}/${w.m.getMonth() + 1}</text>`; }).join('')}
      <line x1="0" y1="44" x2="100" y2="44" stroke="currentColor" stroke-opacity=".25" stroke-width=".2"/></svg>`;
    $('#app').innerHTML = `<section class="plan">
      <div class="wkn"><button class="btn" id="wp" aria-label="Semana anterior">‹</button><div><b>Semana del ${fmtD(mon)} al ${fmtD(addDays(mon, 6))}</b>${planWk ? '<button class="link" id="wt">Ir a esta semana</button>' : '<small class="sub">Semana actual</small>'}</div><button class="btn" id="wn" aria-label="Semana siguiente">›</button></div>
      <div class="wstats">
        <div><small>UA planificada</small><b>${st.pl}</b></div>
        <div><small>UA real</small><b>${st.hasReal ? st.rl : '—'}</b></div>
        <div title="${ac[2]}"><small>ACWR</small><b style="color:${ac[1]}">${ac[0]}</b></div>
        <div><small>Monotonía</small><b style="color:${st.mono > 2 ? '#dc2626' : 'inherit'}">${st.mono ? st.mono.toFixed(2) : '—'}</b></div>
        <div><small>Strain</small><b>${st.strain ?? '—'}</b></div>
      </div>
      <p class="sub">${ac[2]}.${st.mono > 2 ? ' Monotonía alta (> 2): varía más la carga entre días.' : ''} Marca el día del partido y el MD de cada día se calcula solo.</p>
      <div class="pweek">${rows}</div>
      <section><h2>Temporada · carga semanal</h2>${chart}
        <div class="barl"><span><i style="background:#86efac"></i>Planificada</span><span><i style="background:#4b5563"></i>Real</span><span>Número = ACWR</span></div></section>
      <div class="acts"><button class="btn ghost" id="copyw">⧉ Copiar semana anterior</button></div>
      <section class="bridge"><h2>Conexión con My Team</h2>
        <div id="mt" class="mtbox"><span class="sub">Buscando My Team en este móvil…</span></div>
        <details class="csvd"><summary>Sin conexión directa: usar archivos CSV</summary>
          <p class="sub">Exporta la carga planificada o importa la carga real (RPE × minutos) en CSV. Si hay varias filas por día (una por jugador), se hace la media.</p>
          <div class="acts"><button class="btn" id="csv">⬇ Exportar plan (CSV)</button><label class="btn">⬆ Importar carga real (CSV)<input type="file" id="icsv" accept=".csv,text/csv,text/plain" hidden></label></div>
        </details>
      </section></section>`;
    mtPanel(mon);
    $('#wp').onclick = () => { planWk--; rePlan(); }; $('#wn').onclick = () => { planWk++; rePlan(); };
    if ($('#wt')) $('#wt').onclick = () => { planWk = 0; rePlan(); };
    $('#app').querySelectorAll('[data-as]').forEach(sel => sel.onchange = () => {
      const f = sel.dataset.as, v = sel.value, old = plan[f] || {}, real = old.real;
      if (v === 'cur') { if (!ses.items.length) { toast('La sesión actual está vacía'); sel.value = ''; return; } const t = sesTot(ses.items); plan[f] = { k: 'ses', name: `Sesión ${ses.md}`, md: ses.md, items: JSON.parse(JSON.stringify(ses.items)), ...t }; }
      else if (v.startsWith('sv:')) { const x = saved[+v.slice(3)]; plan[f] = { k: 'ses', name: x.name, md: x.md, items: JSON.parse(JSON.stringify(x.items)), ...sesTot(x.items) }; }
      else if (v === 'match') plan[f] = { k: 'match', min: 90, rpe: 8 };
      else if (v === 'rest') plan[f] = { k: 'rest' };
      else if (v === 'clr') { delete plan[f]; if (real != null) plan[f] = { k: 'none', real }; }
      if (plan[f] && real != null) plan[f].real = real;
      savePlan(); rePlan();
    });
    $('#app').querySelectorAll('[data-real]').forEach(i => i.onchange = () => { const f = i.dataset.real; const v = i.value === '' ? null : Math.max(0, +i.value); plan[f] = plan[f] || { k: 'none' }; if (v == null) delete plan[f].real; else plan[f].real = v; if (plan[f].k === 'none' && plan[f].real == null) delete plan[f]; savePlan(); rePlan(); });
    $('#app').querySelectorAll('[data-mm]').forEach(i => i.onchange = () => { plan[i.dataset.mm].min = Math.max(0, +i.value || 0); savePlan(); rePlan(); });
    $('#app').querySelectorAll('[data-mr]').forEach(i => i.onchange = () => { plan[i.dataset.mr].rpe = Math.min(10, Math.max(0, +i.value || 0)); savePlan(); rePlan(); });
    $('#app').querySelectorAll('[data-open]').forEach(b => b.onclick = () => { const e = plan[b.dataset.open]; ses.md = e.md; ses.items = JSON.parse(JSON.stringify(e.items)); saveSes(); location.hash = '#/sesion'; });
    $('#copyw').onclick = () => { let n = 0; for (let i = 0; i < 7; i++) { const src = plan[iso(addDays(mon, i - 7))], dst = iso(addDays(mon, i)); if (src && src.k !== 'none' && !plan[dst]) { const c = JSON.parse(JSON.stringify(src)); delete c.real; plan[dst] = c; n++; } } savePlan(); rePlan(); toast(n ? `${n} días copiados` : 'No había nada que copiar (o los días ya estaban ocupados)'); };
    $('#csv').onclick = () => {
      const rows = [['fecha', 'md', 'tipo', 'nombre', 'minutos', 'rpe_planificado', 'ua_planificada', 'ua_real']];
      Object.keys(plan).sort().forEach(f => { const e = plan[f], l = dayLoad(e); rows.push([f, mdOf(f), { ses: 'sesion', match: 'partido', rest: 'descanso', none: '' }[e.k], e.name || '', e.min || '', e.min ? (l / e.min).toFixed(1) : '', l, e.real ?? '']); });
      const csv = '\ufeff' + rows.map(r => r.map(x => /[;"\n]/.test(String(x)) ? `"${String(x).replace(/"/g, '""')}"` : x).join(';')).join('\n');
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = 'mycoach-plan.csv'; document.body.appendChild(a); a.click(); a.remove();
    };
    $('#icsv').onchange = async e => {
      const f = e.target.files[0]; if (!f) return;
      const n = importReal(await f.text()); savePlan(); rePlan(); toast(n ? `Carga real importada en ${n} días` : 'No se encontraron columnas de fecha y carga');
    };
  }
  // ---------- Conexión directa con My Team ----------
  let mtTeam = store.get('mtTeam', null), mtAuto = false;
  async function mtSync(tid, silent) {
    const r = await MyTeamLink.read(tid); if (!r) return 0;
    let n = 0;
    Object.entries(r.days).forEach(([f, x]) => { const e = plan[f] = plan[f] || { k: 'none' }; if (e.real !== x.ua) { e.real = x.ua; n++; } e.realSrc = 'myteam'; });
    // los días que ya no tienen sesión en My Team pierden el dato importado
    Object.entries(plan).forEach(([f, e]) => { if (e.realSrc === 'myteam' && !r.days[f]) { delete e.real; delete e.realSrc; if (e.k === 'none') delete plan[f]; n++; } });
    r.games.forEach(g => { const e = plan[g.iso]; if (!e || e.k === 'none' || e.k === 'rest') { const real = e && e.real; const x = r.days[g.iso]; plan[g.iso] = { k: 'match', name: g.rival ? 'Partido vs ' + g.rival : 'Partido', min: g.dur, rpe: x ? x.rpe || 8 : 8, src: 'myteam' }; if (real != null) { plan[g.iso].real = real; plan[g.iso].realSrc = 'myteam'; } n++; } });
    savePlan();
    if (!silent) toast(n ? `Datos actualizados (${Object.keys(r.days).length} días con carga, ${r.games.length} partidos)` : 'Ya estaba todo al día');
    return n;
  }
  async function mtPanel(mon) {
    const box = $('#mt'); if (!box) return;
    let ts = null; try { ts = await MyTeamLink.teams(); } catch (e) { }
    if (!$('#mt')) return;
    if (!ts) { box.innerHTML = `<p class="sub">No se han encontrado datos de My Team ni de Vestuario en este móvil. La conexión directa funciona cuando las dos apps están instaladas en el mismo teléfono (las dos usan Chrome por dentro) y My Team tiene datos guardados. Mientras tanto, puedes usar los archivos CSV.</p>`; return; }
    if (!mtTeam || !ts.some(t => t.id === mtTeam)) { mtTeam = ts[0].id; store.set('mtTeam', mtTeam); }
    const cur = ts.find(t => t.id === mtTeam);
    const apps = new Set(ts.map(t => t.app));
    box.innerHTML = `<div class="mtok"><b>✓ Conectado con ${esc(cur.app)}</b><span class="sub">${esc(cur.name)} · ${cur.players} jugadores</span></div>
      ${ts.length > 1 ? `<label class="mtsel">Equipo <select id="mtteam">${ts.map(t => `<option value="${esc(t.id)}" ${t.id === mtTeam ? 'selected' : ''}>${esc(t.name)}${apps.size > 1 ? ' · ' + esc(t.app) : ''}</option>`).join('')}</select></label>` : ''}
      <div class="acts"><button class="btn" id="mtin">⟳ Traer carga real y partidos</button><button class="btn pri" id="mtout">⬆ Enviar plan a ${esc(cur.app.split(' (')[0])}</button></div>
      <p class="sub">Se trae la carga real (media de RPE × minutos por jugador) y los partidos de ${esc(cur.app.split(' (')[0])} cada vez que abres el Plan. «Enviar plan» escribe la carga objetivo de cada día en su Planificación semanal, donde verás plan frente a real.${apps.size > 1 ? ' Tienes las dos versiones con datos: elige en «Equipo» la que usas.' : ''}</p>`;
    if ($('#mtteam')) $('#mtteam').onchange = e => { mtTeam = e.target.value; store.set('mtTeam', mtTeam); mtAuto = false; rePlan(); };
    $('#mtin').onclick = async () => { await mtSync(mtTeam); rePlan(); };
    $('#mtout').onclick = async () => {
      const today = iso(new Date()), from = iso(addDays(mon, -7)), by = {};
      Object.entries(plan).forEach(([f, e]) => { if (f >= from && (e.k === 'ses' || e.k === 'match' || e.k === 'rest')) by[f] = dayLoad(e); });
      const n = Object.keys(by).length;
      if (!n) { toast('No hay días planificados desde la semana pasada'); return; }
      if (!confirm(`Se enviará la carga objetivo de ${n} días al plan de ${cur.app} (${cur.name}). Los días que no hayas planificado aquí no se tocan.\n\nSi tienes la app abierta, ciérrala del todo y vuelve a abrirla para ver los cambios.`)) return;
      try { const w = await MyTeamLink.writePlan(mtTeam, by); toast(`Plan enviado: ${w} días`); } catch (e) { toast('No se pudo escribir en ' + cur.app); }
    };
    if (!mtAuto) { mtAuto = true; try { if (await mtSync(mtTeam, true)) rePlan(); } catch (e) { } }
  }
  function importReal(txt) {
    const lines = txt.replace(/^\ufeff/, '').split(/\r?\n/).filter(l => l.trim());
    if (lines.length < 2) return 0;
    const sep = [';', '\t', ','].sort((a, b) => lines[0].split(b).length - lines[0].split(a).length)[0];
    const split = l => { const out = []; let cur = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === sep && !q) { out.push(cur); cur = ''; } else cur += ch; } out.push(cur); return out.map(x => x.trim()); };
    const hd = split(lines[0]).map(h => h.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    const col = re => hd.findIndex(h => re.test(h));
    const cf = col(/fecha|date|dia/), cu = col(/(^|[^a-z])ua|carga|load|srpe/), cr = col(/rpe/), cm = col(/min|durac/);
    if (cf < 0 || (cu < 0 && (cr < 0 || cm < 0))) return 0;
    const acc = {};
    lines.slice(1).forEach(l => {
      const c = split(l); let ds = c[cf] || '', m;
      if ((m = ds.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/))) ds = `${m[3].length === 2 ? '20' + m[3] : m[3]}-${pad(m[2])}-${pad(m[1])}`;
      else if ((m = ds.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/))) ds = `${m[1]}-${pad(m[2])}-${pad(m[3])}`; else return;
      const num = x => +String(x || '').replace(',', '.');
      const v = cu >= 0 && c[cu] !== '' ? num(c[cu]) : num(c[cr]) * num(c[cm]);
      if (!isFinite(v) || v <= 0) return;
      (acc[ds] = acc[ds] || []).push(v);
    });
    Object.entries(acc).forEach(([d, a]) => { plan[d] = plan[d] || { k: 'none' }; plan[d].real = Math.round(a.reduce((x, y) => x + y, 0) / a.length); });
    return Object.keys(acc).length;
  }

  // ---------- Router ----------
  function route() {
    const h = location.hash || '#/';
    if (!h.startsWith('#/campo')) stopTimer();
    let r = 'lib';
    $('#back').hidden = true; $('#title').textContent = 'My Coach'; $('#subtitle').textContent = 'Biblioteca de tareas · ' + TAREAS.length + ' ejercicios';
    if (h.startsWith('#/t/')) { r = 'task'; $('#back').hidden = false; $('#subtitle').textContent = 'Ficha de la tarea'; vTask(h.slice(4)); }
    else if (h.startsWith('#/sesion')) { r = 'ses'; $('#subtitle').textContent = 'Planifica tu sesión'; vSes(); }
    else if (h.startsWith('#/campo')) { r = 'ses'; $('#back').hidden = false; $('#subtitle').textContent = 'Modo campo · cronómetro'; vCampo(); }
    else if (h.startsWith('#/plan')) { r = 'plan'; $('#subtitle').textContent = 'Planificación y control de carga'; vPlan(); }
    else if (h.startsWith('#/micro')) { r = 'micro'; $('#subtitle').textContent = 'Días MD y cargas'; vMicro(); }
    else if (h.startsWith('#/mis') || h.startsWith('#/favs')) { r = 'mis'; $('#subtitle').textContent = 'Creadas por ti y favoritos'; vMis(); }
    else if (h.startsWith('#/nueva')) { r = 'mis'; $('#back').hidden = false; $('#subtitle').textContent = 'Pizarra y ficha'; vEdit('nueva'); }
    else if (h.startsWith('#/editar/')) { r = 'mis'; $('#back').hidden = false; $('#subtitle').textContent = 'Pizarra y ficha'; vEdit('editar', h.slice(9)); }
    else if (h.startsWith('#/duplicar/')) { r = 'mis'; $('#back').hidden = false; $('#subtitle').textContent = 'Pizarra y ficha'; vEdit('duplicar', h.slice(11)); }
    else { fromHash(); vLib(); }
    document.querySelectorAll('nav.bottom a').forEach(a => a.classList.toggle('on', a.dataset.r === r));
    if (r !== 'task') window.scrollTo(0, 0);
  }
  $('#back').onclick = () => history.length > 1 ? history.back() : (location.hash = '#/');
  window.addEventListener('hashchange', route);
  route();
  bridge();

  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { }));
})();
