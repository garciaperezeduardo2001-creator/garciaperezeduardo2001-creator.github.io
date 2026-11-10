/* My Coach · Biblioteca de tareas de fútbol 11 */
(function () {
  const $ = (s, e = document) => e.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const CAT = {
    tt: { n: 'Técnico-táctico', s: 'Táctico', c: '#16a34a', i: '⚽' },
    fis: { n: 'Físico condicional', s: 'Físico', c: '#ea580c', i: '⚡' },
    pre: { n: 'Prevención y recuperación', s: 'Prevención', c: '#0891b2', i: '🛡️' },
    por: { n: 'Porteros', s: 'Porteros', c: '#7c3aed', i: '🧤' },
    jue: { n: 'Juegos y dinámicas', s: 'Juegos', c: '#db2777', i: '🎲' }
  };
  const INT = { 1: { n: 'Baja', c: '#22c55e' }, 2: { n: 'Media', c: '#eab308' }, 3: { n: 'Alta', c: '#f97316' }, 4: { n: 'Máxima', c: '#dc2626' } };
  const DIF = { 1: 'Básica', 2: 'Media', 3: 'Avanzada' };
  const ED = { P: 'Prebenjamín', B: 'Benjamín', A: 'Alevín', I: 'Infantil', C: 'Cadete', J: 'Juvenil', S: 'Sénior' };
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
  // ---------- Fútbol 11 / Fútbol 7 ----------
  let MODE = store.get('mode', 'f11');
  const isF7t = t => !!(t && t.d && t.d.f7);
  // Dibujo que se muestra: en modo F7, las tareas de F11 se recolocan en el campo de fútbol 7
  const f7Cache = {};
  function DD(t) {
    if (MODE !== 'f7' || !t || !t.d || isF7t(t)) return t && t.d;
    const k = (EDF[fixEd(ses.ed)] || { k: 1 }).k, key = t.id + '|' + k, c = f7Cache[key];
    if (c && c.v === t.d) return c.o;
    const o = window.toF7(t.d, k) || t.d; f7Cache[key] = { v: t.d, o }; return o;
  }
  const F11ONLY = /linea de 4|bascula|lateral - extremo|con lateral|carriles exteriores|4\+3 v|pivotes|10v10|11v11|9v9|8v8|centrales|marcaje mixto/;
  const f7ok = t => isF7t(t) || t.own || t.cat !== 'tt' || !((t.np > 14 && !/todo|grupo|pareja|filas/i.test(t.jug)) || F11ONLY.test(nz(t.n + ' ' + t.tipo + ' ' + t.obj)));
  const vis = t => MODE === 'f7' ? f7ok(t) : !isF7t(t) || t.own;
  const EDM = () => MODE === 'f7' ? ['A', 'B', 'P'] : ['S', 'J', 'C', 'I', 'A'];
  const edOpts = (cur, none) => (none ? `<option value="" ${!cur ? 'selected' : ''}>${none}</option>` : '') + EDM().map(k => `<option value="${k}" ${cur === k ? 'selected' : ''}>${ED[k]}</option>`).join('');
  const defEd = () => MODE === 'f7' ? 'A' : 'S';
  const fixEd = e => EDM().includes(e) ? e : '';
  let favs = new Set(store.get('favs', []));
  let ses = store.get('ses', { md: 'MD-4', min: 75, gk: false, items: [] });
  let saved = store.get('saved', []);
  const pad = n => String(n).padStart(2, '0');
  const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseISO = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const monday = d => { const x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); const w = (x.getDay() + 6) % 7; return addDays(x, -w); };
  let plan = store.get('plan', {});
  // La carga real se controla en My Team: se quitan los datos de carga real antiguos
  Object.keys(plan).forEach(f => { const e = plan[f]; if (e && 'real' in e) { delete e.real; if (e.k === 'none' && !e.realSrc) delete plan[f]; } });
  // Puente con My Team: misma web (github.io) → mismo almacenamiento. My Team puede leer esta clave.
  function bridge() {
    try {
      const dias = Object.keys(plan).sort().map(f => { const e = plan[f]; const l = dayLoad(e); return { fecha: f, md: mdOf(f), tipo: e.k, nombre: e.name || (e.k === 'match' ? 'Partido' : e.k === 'rest' ? 'Descanso' : ''), minutos: e.min || 0, rpe: e.min ? Math.round(l / e.min * 10) / 10 : 0, ua: l, md_sesion: e.md || '', tareas: e.k === 'ses' && Array.isArray(e.items) ? e.items.map(x => byId[x.id] ? { id: x.id, n: byId[x.id].n, tipo: byId[x.id].tipo, dur: byId[x.id].dur, int: byId[x.id].int, bloque: x.b } : null).filter(Boolean) : [] }; });
      localStorage.setItem('mycoach.planificado', JSON.stringify({ app: 'My Coach', version: 1, actualizado: new Date().toISOString(), dias }));
    } catch (e) { }
  }
  const savePlan = () => { store.set('plan', plan); bridge(); };
  const dayLoad = e => !e ? 0 : e.k === 'ses' ? (e.ua || 0) : e.k === 'match' ? Math.round((e.min || 0) * (e.rpe || 0)) : 0;
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
        let a2 = Math.max(1, Math.round(free * a / (a + b))), b2 = Math.max(1, free - a2);
        if (a === b) { a2 = b2 = Math.floor(free / 2); }
        if (a2 + b2 > free) a2 = Math.max(1, free - b2);
        const extra = free - a2 - b2;
        jug = `${a2}v${b2}` + (n + extra ? `+${n + extra}` : '') + (p ? `+${p}P` : '');
      }
    }
    return { jug, w, h, m2, same: N === t.np };
  }
  // ---------- Principios de juego (contenidos) ----------
  const nz = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const PRIN = {
    sal: { n: 'Salida de balón', i: '🧱', re: /salida de balon|salida\b|construcc|inicio del juego|primera linea|desde atras/ },
    pos: { n: 'Posesión y progresión', i: '🔁', re: /rondo|posesion|juego de posicion|tercer hombre|conserv|pasar la linea|progres|circuito de pases|rombo de pases|apoyos|comodin/ },
    ban: { n: 'Juego por bandas', i: '↔️', re: /banda|carril|lateral|extremo|amplitud|desdoble|cambio de juego|cambio de orientacion|lado debil/ },
    fin: { n: 'Finalización', i: '🎯', re: /finaliz|remat|tiro|centros?\b|cut-back|al portero|llegada|segunda jugada|rechace|penalti/ },
    tra: { n: 'Transiciones', i: '⚡', re: /tras perdida|presion tras|repliegue|5 segundos|transicion|contraataque|contragolpe|tras recuperacion|tras robo|oleada|reinicio rapido/ },
    pre: { n: 'Presión', i: '🔥', re: /presion|pressing|senales|presionar/ },
    def: { n: 'Defensa organizada', i: '🛡', re: /\bdefensa\b|defensiv|bascula|linea de 4|linea de 3|bloque|marcaje|inferioridad|vigilancia|cobertura/ },
    abp: { n: 'Balón parado', i: '🚩', re: /corner|falta|saque de banda|abp|balon parado|barrera/ },
    tec: { n: 'Técnica individual', i: '🎓', re: /control orientado|conduccion|regate|tecnica|pase por parejas|habilidad|golpeo/ }
  };
  const FIS = { 'Tensión': 'Físico · fuerza y tensión', 'Duración': 'Físico · resistencia', 'Velocidad': 'Físico · velocidad', 'Recuperación': 'Recuperación' };
  const prCache = {};
  function prinOf(t) {
    if (prCache[t.id] && prCache[t.id].v === t) return prCache[t.id].p;
    let p = [];
    if (t.cat === 'tt' || t.cat === 'jue') {
      const a = nz(t.n + ' ' + t.tipo + ' ' + t.obj); p = Object.keys(PRIN).filter(k => PRIN[k].re.test(a));
      if (!p.length) { const b = nz(t.desc); p = Object.keys(PRIN).filter(k => PRIN[k].re.test(b)).slice(0, 2); }
    }
    prCache[t.id] = { v: t, p }; return p;
  }
  const prinChips = t => prinOf(t).map(k => `<span class="prc">${PRIN[k].i} ${PRIN[k].n}</span>`).join('');
  // Progresión: la misma idea en fácil / media / difícil
  const ladCache = {};
  function ladder(t) {
    if (ladCache[t.id] && ladCache[t.id].v === t && ladCache[t.id].n === TAREAS.length + MODE) return ladCache[t.id].l;
    const pr = prinOf(t), out = [null, null, null]; out[t.dif - 1] = t;
    [1, 2, 3].forEach(d => {
      if (d === t.dif) return; let best = null, bs = 2.5;
      TAREAS.forEach(x => {
        if (x.id === t.id || x.cat !== t.cat || x.dif !== d || !vis(x)) return;
        const xp = prinOf(x), s = pr.filter(k => xp.includes(k)).length * 2 + (x.tipo === t.tipo ? 3 : 0) + (x.fase === t.fase ? 1 : 0) + (x.md.some(m => t.md.includes(m)) ? 1 : 0) + (x.carga === t.carga ? 1 : 0);
        if (s > bs) { bs = s; best = x; }
      });
      out[d - 1] = best;
    });
    ladCache[t.id] = { v: t, l: out, n: TAREAS.length + MODE }; return out;
  }
  // ---------- Adaptación por categoría (edad) ----------
  const EDF = { S: { k: 1, d: 1 }, J: { k: .95, d: 1 }, C: { k: .88, d: .9 }, I: { k: .78, d: .8 }, A: { k: .65, d: .7 }, B: { k: .55, d: .6 }, P: { k: .45, d: .5 } };
  // Las tareas propias de fútbol 7 ya están pensadas para alevín
  const EDF7 = { A: { k: 1, d: 1 }, B: { k: .88, d: .9 }, P: { k: .75, d: .8 }, I: { k: 1, d: 1 } };
  const clamp7 = (w, h) => { const s = Math.min(1, 58 / Math.max(w, h), 38 / Math.min(w, h)); return s < 1 ? [Math.round(w * s), Math.round(h * s)] : [w, h]; };
  const edFit = (t, ed) => !ed || t.ed.includes(ed) || (!isF7t(t) && (ed === 'B' || ed === 'P') && t.ed.includes('A') && (t.dif === 1 || t.cat === 'jue') && !(t.cat === 'fis' && t.int >= 3));
  function catAdapt(t, ed) {
    if (!ed) return null;
    const own7 = isF7t(t), to7 = MODE === 'f7' && !own7;
    const f = own7 ? (EDF7[ed] || EDF[ed]) : EDF[ed]; if (!f) return null;
    const small = ed === 'B' || ed === 'P', kid = small || ed === 'A' || ed === 'I';
    const fit = edFit(t, ed);
    if (fit && f.k === 1 && f.d === 1 && !to7) return null;
    const notes = [], tx = nz(t.n + ' ' + t.tipo + ' ' + t.desc + ' ' + (t.reglas || []).join(' '));
    const k = t.cat === 'pre' ? 1 : f.k;
    let w = t.esp && t.esp[0] ? Math.round(t.esp[0] * k) : null, h = t.esp && t.esp[1] ? Math.round(t.esp[1] * k) : null;
    if (to7 && w) [w, h] = clamp7(w, h);
    const dur = t.fase === 'pri' ? Math.max(5, Math.round(t.dur * f.d)) : t.dur;
    if (to7) notes.push('Tarea de fútbol 11 adaptada al campo de fútbol 7.');
    if (!fit) notes.push(`No está pensada para ${ED[ed].toLowerCase()}: mejor usa una alternativa.`);
    if (w && (w !== t.esp[0] || h !== t.esp[1])) notes.push(`Espacio: ${w} x ${h} m (original ${t.esp[0]} x ${t.esp[1]} m).`);
    if (dur < t.dur) notes.push(`Menos volumen: ${dur}' en lugar de ${t.dur}'${t.int >= 3 ? ', con pausas un poco más largas' : ''}.`);
    if (kid && t.cat === 'fis' && /fuerza|pliometr|nordic|sentadilla|lastre|trineo|medicinal|copenhag|zancada/.test(tx)) notes.push('Fuerza con autocargas y buena técnica: sin lastres, trineo ni excéntricos máximos.');
    else if ((ed === 'C' || ed === 'J') && t.cat === 'fis' && t.carga === 'Tensión') notes.push('Asegura la técnica antes de añadir carga externa.');
    if (kid && t.cat === 'fis' && t.int >= 3 && !/balon/.test(tx)) notes.push(small ? 'A esta edad, la condición física se trabaja jugando: mejor un juego con balón.' : 'A estas edades funciona mejor en forma jugada (con balón) que corriendo sin él.');
    if (kid && /toque/.test(tx) && (t.cat === 'tt' || t.cat === 'jue')) notes.push('Toques libres o máximo 3: prioriza el control y la decisión.');
    if (kid && /rondo|posesion|juego de posicion/.test(nz(t.tipo))) notes.push('Añade un comodín más para que la posesión tenga éxito.');
    if ((ed === 'A' || small) && /fuera de juego/.test(tx)) notes.push('Sin fuera de juego.');
    if (small && (t.cat === 'tt' || t.cat === 'jue')) notes.push('Explicación corta (30 segundos), mucho tiempo con balón y que nadie espere en fila.');
    if ((ed === 'A' || ed === 'B') && (t.cat === 'tt' || t.cat === 'jue' || t.cat === 'por')) notes.push('Balón del n.º 4.');
    if (ed === 'P' && (t.cat === 'tt' || t.cat === 'jue' || t.cat === 'por')) notes.push('Balón pequeño y ligero.');
    let alt = null;
    if (!fit) { const pr = prinOf(t); alt = TAREAS.filter(x => x.id !== t.id && vis(x) && x.cat === t.cat && x.fase === t.fase && x.ed.includes(ed)).map(x => [(x.tipo === t.tipo ? 3 : 0) + prinOf(x).filter(p => pr.includes(p)).length * 2 + (x.md.some(m => t.md.includes(m)) ? 1 : 0) + (x.carga === t.carga ? 1 : 0) + (isF7t(x) ? 1 : 0), x]).sort((a, b) => b[0] - a[0]).map(x => x[1])[0] || null; }
    return { k, w, h, dur, fit, notes, alt };
  }
  const adjDur = (t, ed) => { const c = catAdapt(t, ed); return c ? c.dur : t.dur; };
  // Jugadores + categoría → estructura y espacio para hoy
  function fitInfo(t, nj, ed) {
    if (!t.esp || !t.esp[0]) return null;
    let w = t.esp[0], h = t.esp[1], jug = t.jug, ch = false;
    if (nj && t.cat !== 'por' && !flexible(t) && t.np && nj !== t.np) {
      const g = nj >= t.np * (/rondo/i.test(t.tipo) ? 1.3 : 1.6) ? Math.max(2, Math.round(nj / t.np)) : 1, a = adapt(t, Math.floor(nj / g));
      if (a) { w = a.w; h = a.h; jug = g > 1 ? `${g} grupos de ${a.jug || Math.floor(nj / g)}` : a.jug || jug; ch = true; }
    }
    const c = catAdapt(t, ed); if (c && c.k < 1) { w = Math.round(w * c.k); h = Math.round(h * c.k); ch = true; }
    if (MODE === 'f7' && !isF7t(t)) { const [w2, h2] = clamp7(w, h); if (w2 !== w || h2 !== h) { w = w2; h = h2; ch = true; } }
    return ch ? { w, h, jug } : null;
  }
  // Contenidos por semana: { 'yyyy-mm-dd' (lunes): { p, s, niv, nota } }
  let cont = store.get('cont', {});
  const saveCont = () => store.set('cont', cont);
  const contOf = d => cont[iso(monday(typeof d === 'string' ? parseISO(d) : d))] || null;
  const weekPf = d => { const c = contOf(d); return c && c.p ? { p: c.p, s: c.s, niv: c.niv } : null; };
  const F = { q: '', own: false, tipo: '', sort: 'rec', mat: new Set(), prin: '', nj: 0, cat: new Set(), md: '', int: new Set(), dif: new Set(), ed: new Set(), open: false };
  const fromHash = () => { const m = location.hash.match(/[?&]md=([^&]+)/); if (m) F.md = decodeURIComponent(m[1]); };

  const saveSes = () => store.set('ses', ses);
  window.MCtoast = m => toast(m);
  const toast = m => { const t = $('#toast'); t.textContent = m; t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, 1800); };
  const rpeMid = r => { const n = String(r).match(/\d+/g); return n ? n.map(Number).reduce((a, b) => a + b, 0) / n.length : 5; };

  // ---------- Piezas ----------
  const intBadge = t => `<span class="int" style="--c:${INT[t.int].c}"><i></i>${INT[t.int].n}</span>`;
  const mdChips = t => t.md.map(m => `<span class="md">${m}</span>`).join('');
  const catTag = t => `<span class="cat" style="--c:${CAT[t.cat].c}">${CAT[t.cat].s}</span>`;
  const card = t => `<a class="card" href="#/t/${t.id}" style="--c:${(CAT[t.cat] || {}).c || '#16a34a'}">
    <div class="thumb">${drawField(DD(t), { mini: true })}</div>
    <div class="ci"><div class="ct">${catTag(t)}<span class="tipo">${esc(t.tipo)}</span>${t.own ? '<span class="own">MÍA</span>' : ''}${MODE === 'f7' && !isF7t(t) ? '<span class="f7a">Adaptada F7</span>' : ''}${favs.has(t.id) ? '<span class="star">★</span>' : ''}</div>
    <h3>${esc(t.n)}</h3>
    <div class="meta">${mdChips(t)}</div>
    <div class="meta">${intBadge(t)}<span>⏱ ${t.dur}'</span><span>👥 ${esc(t.jug)}</span>${(notes[t.id] || {}).s ? `<span class="rate">★${notes[t.id].s}</span>` : ''}${evalBadge(t)}</div>
    ${F.nj && !flexible(t) && t.np !== F.nj ? (a => a ? `<div class="adh">Con ${F.nj}: ${a.jug ? `<b>${a.jug}</b> en ` : ''}${a.w}x${a.h} m</div>` : '')(adapt(t, F.nj)) : ''}</div></a>`;

  function filtered() {
    const q = F.q.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    return TAREAS.filter(t => {
      if (!vis(t)) return false;
      if (F.own && !t.own) return false;
      if (F.cat.size && !F.cat.has(t.cat)) return false;
      if (F.tipo && t.tipo !== F.tipo) return false;
      if (F.mat.size && ![...mats(t)].every(x => F.mat.has(x))) return false;
      if (F.nj && !flexible(t) && t.np > F.nj) return false;
      if (F.md && !t.md.includes(F.md)) return false;
      if (F.prin && !prinOf(t).includes(F.prin)) return false;
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
    if (!f && MODE === 'f7') r = r.slice().sort((a, b) => isF7t(b) - isF7t(a));
    if (!f && F.nj) return r.slice().sort((a, b) => (flexible(a) ? 99 : F.nj - a.np) - (flexible(b) ? 99 : F.nj - b.np));
    return f ? r.slice().sort(f) : r;
  }

  // ---------- Vistas ----------
  function vLib() {
    const nf = F.int.size + F.dif.size + F.ed.size + F.mat.size + (F.nj ? 1 : 0) + (F.prin ? 1 : 0);
    const chip = (grp, v, lab, on) => `<button class="chip ${on ? 'on' : ''}" data-f="${grp}" data-v="${v}">${lab}</button>`;
    $('#app').innerHTML = `<div id="lib">
      <div class="search"><input id="q" type="search" placeholder="Buscar: rondo, RSA, centros, nórdicos…" value="${esc(F.q)}" autocomplete="off"></div>
      <div class="row scroll">${mine.length ? chip('own', '1', '👤 Mías', F.own) : ''}${Object.entries(CAT).map(([k, c]) => chip('cat', k, c.i + ' ' + c.s, F.cat.has(k))).join('')}</div>
      ${F.cat.size === 1 ? `<div class="row scroll"><span class="lbl">Tipo</span>${chip('tipo', '', 'Todos', !F.tipo)}${[...new Set(TAREAS.filter(t => vis(t) && F.cat.has(t.cat)).map(t => t.tipo))].sort().map(x => chip('tipo', esc(x), esc(x), F.tipo === x)).join('')}</div>` : ''}
      <div class="row scroll"><span class="lbl">Día</span>${chip('md', '', 'Todos', !F.md)}${MDS.map(m => chip('md', m, m, F.md === m)).join('')}</div>
      <div class="row between"><button class="more" id="more">${F.open ? '▴' : '▾'} Más filtros${nf ? ` (${nf})` : ''}</button><select id="sort" class="sort" aria-label="Ordenar">${Object.entries(SORTS).map(([k, v]) => `<option value="${k}" ${F.sort === k ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
      <div class="fpanel" ${F.open ? '' : 'hidden'}>
        <div class="row wrap"><span class="lbl">Principio de juego</span>${chip('prin', '', 'Todos', !F.prin)}${Object.entries(PRIN).map(([k, p]) => chip('prin', k, p.i + ' ' + p.n, F.prin === k)).join('')}</div>
        <div class="row wrap"><span class="lbl">Intensidad</span>${[1, 2, 3, 4].map(i => chip('int', i, INT[i].n, F.int.has(i))).join('')}</div>
        <div class="row wrap"><span class="lbl">Dificultad</span>${[1, 2, 3].map(i => chip('dif', i, DIF[i], F.dif.has(i))).join('')}</div>
        <div class="row wrap"><span class="lbl">Categoría</span>${EDM().slice().reverse().map(k => chip('ed', k, ED[k], F.ed.has(k))).join('')}</div>
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
        else if (g === 'prin') F.prin = v;
        else { const val = g === 'cat' || g === 'ed' || g === 'mat' ? v : +v; F[g].has(val) ? F[g].delete(val) : F[g].add(val); if (g === 'cat') F.tipo = ''; }
        vLib(); return;
      }
      if (e.target.id === 'more') { F.open = !F.open; vLib(); }
      if (e.target.id === 'clr') { F.q = ''; F.md = ''; F.own = false; F.tipo = ''; F.prin = ''; ['cat', 'int', 'dif', 'ed', 'mat'].forEach(k => F[k].clear()); F.nj = 0; vLib(); }
    });
  }

  function vTask(id) {
    const t = byId[id];
    if (!t) { $('#app').innerHTML = '<div class="empty">Tarea no encontrada.</div>'; return; }
    const m2 = t.np && t.esp ? Math.round(t.esp[0] * t.esp[1] / t.np) : null;
    const li = a => a.map(x => `<li>${esc(x)}</li>`).join('');
    $('#app').innerHTML = `
      <article class="task">
        <div class="big" id="bigd" title="Toca para ver a pantalla completa">${drawField(DD(t), { label: t.n })}<span class="zoom">⤢</span></div>
        ${(t.d.a || []).length ? animBarHTML('ab') : ''}
        ${legendHTML()}
        <div class="ct">${catTag(t)}<span class="tipo">${esc(t.tipo)}</span>${prinChips(t)}</div>
        <h1>${esc(t.n)}</h1>
        ${t.obj ? `<p class="objt">🎯 ${esc(t.obj)}</p>` : ''}
        <div class="tmain"><button class="btn ${favs.has(t.id) ? 'on' : ''}" id="fav">${favs.has(t.id) ? '★ En favoritos' : '☆ Favorito'}</button><button class="btn pri" id="add">＋ Añadir a sesión</button></div>
        <div class="qacts">
          <button id="share"><i>💬</i>Texto</button>
          <button id="img"><i>🖼</i>Imagen</button>
          ${(t.d.a || []).length ? '<button id="vid"><i>🎬</i>Vídeo</button>' : ''}
          <a href="#/duplicar/${t.id}"><i>⧉</i>${t.own ? 'Duplicar' : 'Duplicar y editar'}</a>
          ${t.own ? '<a href="#/editar/' + t.id + '"><i>✏️</i>Editar</a><button id="rm" class="dng"><i>🗑</i>Borrar</button>' : ''}
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
        <section class="adapt"><h2>Adaptar a la categoría</h2><div class="adrow"><label>Categoría <select id="ced">${edOpts('', 'Sin adaptar')}</select></label><div id="cedout"></div></div></section>
        ${progHTML(t)}
        ${t.desc ? `<section><h2>Descripción</h2><p>${esc(t.desc).replace(/\n/g, '<br>')}</p></section>` : ''}
        ${t.reglas && t.reglas.length ? `<section><h2>Reglas</h2><ul>${li(t.reglas)}</ul></section>` : ''}
        ${t.cons && t.cons.length ? `<section><h2>Consignas</h2><ul>${li(t.cons)}</ul></section>` : ''}
        ${t.var && t.var.length ? `<section><h2>Variantes</h2><ul class="var">${li(t.var)}</ul></section>` : ''}
        <section class="notes"><h2>Mis notas</h2>
          <div class="stars" id="stars">${[1, 2, 3, 4, 5].map(i => `<button data-s="${i}" class="${((notes[t.id] || {}).s || 0) >= i ? 'on' : ''}" aria-label="${i} estrellas">★</button>`).join('')}<small class="sub">Valora la tarea</small></div>
          <div class="evq"><b>¿Cómo fue hoy?</b>${evalForm(t.id, todayEval(t.id))}</div><div id="evtx">${evalText(t)}</div>
          <textarea id="note" rows="3" placeholder="Ej.: con el cadete funcionó mejor en 30x25 y a dos toques">${esc((notes[t.id] || {}).t || '')}</textarea></section>
        ${related(t)}
      </article>`;
    const adn = $('#adn');
    if (adn) { const up = () => { const n = +adn.value, a = adapt(t, n); $('#adout').innerHTML = !a ? '' : a.same ? `<span class="sub">Es el número original: ${esc(t.jug)} en ${t.esp[0]}x${t.esp[1]} m (≈ ${a.m2} m²/jug.).</span>` : `<b>${a.jug ? esc(a.jug) + ' · ' : ''}${a.w} x ${a.h} m</b><span class="sub">Mantiene ≈ ${a.m2} m²/jugador (original: ${esc(t.jug)} en ${t.esp[0]}x${t.esp[1]} m). ${n > t.np * 1.6 ? 'Con tantos jugadores, plantéate hacer dos grupos.' : ''}</span>`; }; adn.oninput = up; up(); }
    const stopAnim = bindAnim('ab', $('#bigd'), DD(t));
    const ced = $('#ced'), cup = () => { const c = catAdapt(t, ced.value); const f7 = !c && MODE === 'f7' && !isF7t(t) ? fitInfo(t, null, '') : null; $('#cedout').innerHTML = !c ? `<span class="sub">${f7 ? `Adaptada al campo de fútbol 7: ${f7.w}x${f7.h} m` : `Tarea tal cual${t.esp && t.esp[0] ? `: ${t.esp[0]}x${t.esp[1]} m` : ''}`} · ${t.dur}' · ${esc(t.ser)}. Elige una categoría para ver cómo adaptarla.</span>` : `<ul class="cad">${c.notes.map(n => `<li>${esc(n)}</li>`).join('') || '<li>Se puede hacer igual que en sénior.</li>'}</ul>${c.alt ? `<a class="btn sm" href="#/t/${c.alt.id}">Alternativa: ${esc(c.alt.n)}</a>` : ''}`; };
    ced.onchange = cup; cup();
    if ($('#vid')) $('#vid').onclick = () => recordVideo(t);
    $('#stars').onclick = e => { const b = e.target.closest('[data-s]'); if (!b) return; const n = notes[t.id] || {}; n.s = n.s === +b.dataset.s ? 0 : +b.dataset.s; notes[t.id] = n; saveNotes(); $('#stars').querySelectorAll('[data-s]').forEach(x => x.classList.toggle('on', +x.dataset.s <= n.s)); };
    bindEval($('#app'), () => { $('#evtx').innerHTML = evalText(t); });
    let nt; $('#note').oninput = e => { clearTimeout(nt); nt = setTimeout(() => { const n = notes[t.id] || {}; n.t = e.target.value; notes[t.id] = n; saveNotes(); }, 400); };
    $('#img').onclick = () => shareImage(taskCanvas(t), t.n);
    $('#bigd').onclick = () => fullField(t);
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
    const img = await svgImg(DD(t), W - 2 * M);
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
      const img = await svgImg(DD(t), iw); ctx.save(); rr(ctx, M + 15, y + 15, iw, ih, 14); ctx.clip(); if (img) ctx.drawImage(img, M + 15, y + 15, iw, ih); ctx.restore();
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
  // ---------- Controles de animación ----------
  function animBarHTML(id) {
    return `<div class="abar" id="${id}" data-noclick>
      <button class="btn sm pri" data-c="play">▶ Animar</button><button class="btn sm" data-c="next" title="Paso a paso">⏭ Paso</button><button class="btn sm" data-c="restart" title="Volver al inicio" aria-label="Volver al inicio">↺</button>
      <select data-c="speed" aria-label="Velocidad"><option value="0.5">0,5x</option><option value="1" selected>1x</option><option value="2">2x</option></select>
      <label class="abl"><input type="checkbox" data-c="loop"> Bucle</label><label class="abl" title="Los defensores y el portero se mueven hacia el balón"><input type="checkbox" data-c="react" checked> Defensas reactivas</label><span class="abs" data-c="lab"></span></div>`;
  }
  function bindAnim(id, box, d) {
    const bar = document.getElementById(id); if (!bar || !box) return () => { };
    let ctl = null, st = { step: 0, total: fieldSteps(d).length, playing: false };
    const q = c => bar.querySelector(`[data-c="${c}"]`);
    const upd = () => { q('play').textContent = st.playing ? '⏸ Pausa' : st.step >= st.total && st.step ? '↺ Repetir' : st.step ? '▶ Seguir' : '▶ Animar'; q('lab').textContent = `Paso ${st.step}/${st.total}` + (st.caption ? ' · ' + st.caption : ''); };
    const get = () => { if (!ctl) ctl = animateField(box, d, { autoplay: false, speed: +q('speed').value, loop: q('loop').checked, react: q('react').checked, onState: x => { st = x; upd(); } }); return ctl; };
    q('play').onclick = e => { e.stopPropagation(); const c = get(); st.playing ? c.pause() : c.play(); };
    q('next').onclick = e => { e.stopPropagation(); get().next(); };
    q('restart').onclick = e => { e.stopPropagation(); get().restart(); };
    q('speed').onchange = () => ctl && ctl.setSpeed(+q('speed').value);
    q('loop').onchange = () => ctl && ctl.setLoop(q('loop').checked);
    q('react').onchange = () => ctl && ctl.setReact(q('react').checked);
    bar.onclick = e => e.stopPropagation();
    upd();
    return () => ctl && ctl.stop();
  }
  function fullField(t) {
    const o = document.createElement('div'); o.className = 'fsov';
    o.innerHTML = `<div class="fs">${drawField(DD(t), { label: t.n })}</div><button class="fsx" aria-label="Cerrar">✕</button><div class="fst">${esc(t.n)}${(t.d.a || []).length ? animBarHTML('abfs') : ''}</div>`;
    let stop = () => { };
    const close = () => { stop(); o.remove(); document.removeEventListener('keydown', k); };
    const k = e => { if (e.key === 'Escape') close(); };
    o.onclick = close; document.addEventListener('keydown', k); document.body.appendChild(o);
    stop = bindAnim('abfs', o.querySelector('.fs'), DD(t));
  }
  function progHTML(t) {
    const l = ladder(t); if (l.filter(Boolean).length < 2) return '';
    return `<section class="prog"><h2>Progresión</h2><p class="sub">La misma idea con más o menos exigencia. Sube de nivel cuando el equipo domine la tarea.</p><div class="ladder">${l.map((x, i) => x ? `<a href="#/t/${x.id}" class="lad ${x.id === t.id ? 'on' : ''}"><small>${['1 · Fácil', '2 · Media', '3 · Difícil'][i]}</small><b>${esc(x.n)}</b>${x.id === t.id ? '<em>Estás aquí</em>' : ''}</a>` : `<div class="lad off"><small>${['1 · Fácil', '2 · Media', '3 · Difícil'][i]}</small><b>—</b></div>`).join('<span class="lar">›</span>')}</div></section>`;
  }
  function related(t) {
    const r = TAREAS.filter(x => x.id !== t.id && vis(x) && x.cat === t.cat && x.md.some(m => t.md.includes(m))).slice(0, 4);
    return r.length ? `<section><h2>Tareas parecidas</h2><div class="grid">${r.map(card).join('')}</div></section>` : '';
  }

  // ---------- Sesión ----------
  const BLK = { cal: 'Calentamiento / activación', pri: 'Parte principal', vc: 'Prevención y vuelta a la calma', por: 'Porteros (en paralelo)' };
  const blockOf = t => t.cat === 'por' ? 'por' : t.fase;
  const pick = (pool, used, maxDur) => { const p = pool.filter(t => !used.has(t.id) && (!maxDur || t.dur <= maxDur)); return p.length ? p[Math.floor(Math.random() * p.length)] : null; };
  // Elige la mejor tarea según el contenido de la semana (principio, nivel) o la carga física buscada
  function pickP(pool, used, maxDur, pf, D) {
    D = D || (t => t.dur);
    const p = pool.filter(t => !used.has(t.id) && (!maxDur || D(t) <= maxDur)); if (!p.length) return null;
    if (!pf && MODE !== 'f7' && !Object.keys(evals).length) return p[Math.floor(Math.random() * p.length)];
    pf = pf || {};
    const sc = t => { const pr = prinOf(t); return evalBonus(t) + (MODE === 'f7' && isF7t(t) ? 2.5 : 0) + (pf.p && pr.includes(pf.p) ? 3 : 0) + (pf.s && pr.includes(pf.s) ? 1.5 : 0) + (pf.niv ? (t.dif === pf.niv ? 1 : Math.abs(t.dif - pf.niv) > 1 ? -1.5 : 0) : 0) + (pf.carga && t.carga === pf.carga ? 3 : 0) + Math.random() * 1.6; };
    return p.map(t => [sc(t), t]).sort((a, b) => b[0] - a[0])[0][1];
  }
  // o = { md, min, gk (n.º porteros), ed, nj, mat (Set|null), pf, order }
  function genSession(o) {
    const md = o.md, D = t => adjDur(t, o.ed), used = new Set(), items = [];
    const can = t => (!o.mat || [...mats(t)].every(x => o.mat.has(x))) && (!o.nj || flexible(t) || t.np <= o.nj + 1);
    const base = TAREAS.filter(t => vis(t) && t.md.includes(md) && can(t)), strict = base.filter(t => edFit(t, o.ed));
    const P = (f, maxDur, pf) => pickP(strict.filter(f), used, maxDur, pf, D) || pickP(base.filter(f), used, maxDur, pf, D);
    const add = (t, b) => { if (t) { used.add(t.id); items.push({ id: t.id, b }); return D(t); } return 0; };
    let left = o.min;
    left -= add(P(t => t.cat !== 'por' && t.fase === 'cal', 15, o.pf && o.pf.carga ? null : o.pf), 'cal');
    const vcT = P(t => t.cat !== 'por' && t.fase === 'vc', 12);
    left -= vcT ? D(vcT) : 0;
    const main = t => t.cat !== 'por' && t.fase === 'pri' && (t.tipo !== 'Compensatorio' || md === 'MD+2');
    const order = o.order || (md === 'MD+1' ? ['pre', 'tt', 'fis'] : md === 'MD-1' ? ['tt', 'tt', 'tt'] : md === 'MD-4' || md === 'MD-2' ? ['fis', 'tt', 'tt'] : ['tt', 'fis', 'tt']);
    for (let i = 0; left >= 10 && i < 6; i++) {
      const want = order[i % order.length], pf = want === 'tt' || want === 'jue' ? o.pf : o.pf && o.pf.carga ? o.pf : null;
      const t = P(x => main(x) && x.cat === want, left + 3, pf) || P(main, left + 3, o.pf);
      if (!t) break; left -= add(t, 'pri');
    }
    if (vcT) add(vcT, 'vc');
    if (o.gk) { let g = o.min - 15; add(P(t => t.cat === 'por' && t.fase === 'cal'), 'por'); for (let i = 0; i < 3 && g > 10; i++) { const t = P(t => t.cat === 'por' && t.fase === 'pri', g); if (!t) break; g -= add(t, 'por'); } }
    return items;
  }
  function generar() {
    ses.items = genSession({ md: ses.md, min: ses.min, gk: ses.gk, ed: ses.ed, nj: ses.nj, pf: weekPf(new Date()) }); saveSes();
    if (!ses.items.length) toast('No hay tareas para ' + ses.md + ' (suele ser día de descanso)');
  }
  // Sube o baja un nivel cada tarea de la parte principal usando sus progresiones
  function shiftLevel(dir) {
    let n = 0; const used = new Set(ses.items.map(x => x.id));
    ses.items.forEach(x => { const t = byId[x.id]; if (!t || x.b !== 'pri') return; const l = ladder(t), nx = l[t.dif - 1 + dir]; if (nx && !used.has(nx.id)) { used.add(nx.id); x.id = nx.id; n++; } });
    saveSes(); return n;
  }

  function itemFit(t, i) {
    const f = fitInfo(t, ses.nj, ses.ed), c = catAdapt(t, ses.ed);
    let h = f ? `<div class="adh">${ses.nj && f.jug !== t.jug ? `<b>${esc(f.jug)}</b> en ` : ''}${f.w}x${f.h} m${ses.ed && ses.ed !== 'S' ? ' · ' + ED[ses.ed] : ''}</div>` : '';
    if (c && !c.fit) h += `<div class="adw">⚠ No indicada para ${ED[ses.ed].toLowerCase()}${c.alt ? ` · <button class="link" data-alt="${i}|${c.alt.id}">Cambiar por «${esc(c.alt.n)}»</button>` : ''}</div>`;
    return h;
  }
  function vSes() {
    const its = ses.items.map((x, i) => ({ ...x, i, t: byId[x.id] })).filter(x => x.t);
    const field = its.filter(x => x.b !== 'por');
    const D = t => adjDur(t, ses.ed);
    const tot = field.reduce((a, x) => a + D(x.t), 0);
    const ua = Math.round(field.reduce((a, x) => a + D(x.t) * rpeMid(x.t.rpe), 0));
    const byInt = [1, 2, 3, 4].map(n => field.filter(x => x.t.int === n).reduce((a, x) => a + D(x.t), 0));
    const info = MDINFO[ses.md], wc = contOf(new Date());
    const opt = (arr, cur) => arr.map(v => `<option ${v == cur ? 'selected' : ''} value="${v}">${v}${typeof v === 'number' ? ' min' : ''}</option>`).join('');
    $('#app').innerHTML = `
      <section class="gen">
        <div class="ghd"><h1>Generador de sesión</h1><a class="btn pri sm" href="#/asistente">✨ ¿Qué entreno hoy?</a></div>
        <div class="form">
          <label>Día<select id="smd">${opt(MDS, ses.md)}</select></label>
          <label>Duración<select id="smin">${opt([45, 60, 75, 90, 105], ses.min)}</select></label>
          <label>Categoría<select id="sed">${edOpts(fixEd(ses.ed), 'Sin categoría')}</select></label>
          <label>Jugadores<input id="snj" type="number" min="4" max="40" inputmode="numeric" placeholder="—" value="${ses.nj || ''}"></label>
          <label class="chk"><input type="checkbox" id="sgk" ${ses.gk ? 'checked' : ''}> Porteros</label>
        </div>
        <p class="hint"><b>${ses.md} · ${info.t}.</b> ${info.obj}</p>
        ${wc && wc.p ? `<p class="hint cw">🎯 Contenido de la semana: <b>${PRIN[wc.p].n}</b>${wc.s ? ' + ' + PRIN[wc.s].n : ''} · nivel ${wc.niv || 1}. El generador lo prioriza.</p>` : ''}
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
        <div class="sit"><a href="#/t/${x.t.id}" class="thumb s">${drawField(DD(x.t), { mini: true })}</a>
          <div class="ci"><a href="#/t/${x.t.id}"><h3>${esc(x.t.n)}</h3></a><div class="meta">${intBadge(x.t)}<span>⏱ ${D(x.t)}'${D(x.t) !== x.t.dur ? ` <s>${x.t.dur}'</s>` : ''}</span><span>${esc(x.t.ser)}</span><span class="dif d${x.t.dif}">${DIF[x.t.dif]}</span></div>${itemFit(x.t, x.i)}</div>
          <div class="ops"><button data-op="up" data-i="${x.i}" aria-label="Subir">↑</button><button data-op="down" data-i="${x.i}" aria-label="Bajar">↓</button><button data-op="swap" data-i="${x.i}" aria-label="Cambiar">⟳</button><button data-op="del" data-i="${x.i}" aria-label="Quitar">✕</button></div>
        </div>`).join('')}</section>` : ''; }).join('')}
      ${its.length ? '<div class="acts lvl"><button class="btn" id="lvd">⬇ Más sencilla</button><button class="btn" id="lvu">⬆ Más exigente</button><small class="sub">Cambia cada tarea principal por su progresión.</small></div>' : ''}
      ${its.length ? '<div class="acts"><a class="btn pri" href="#/campo">▶ Modo campo</a><a class="btn pri" href="#/pizarra">📺 Modo vestuario</a><button class="btn" id="save">Guardar sesión</button><a class="btn" href="#/plan">📅 Llevar al plan</a><button class="btn" id="simg">🖼 Imagen</button><button class="btn" id="print">📄 Ficha en PDF</button><a class="btn" href="#/valorar">⭐ Valorar tareas</a></div>' : ''}
      ${saved.length ? `<section class="blk"><h2>Sesiones guardadas</h2>${saved.map((s, i) => `<div class="saved"><div><b>${esc(s.name)}</b><small>${s.md} · ${s.items.length} tareas · ${s.date}</small></div><button class="btn" data-load="${i}">Abrir</button><button class="btn ghost" data-rm="${i}">✕</button></div>`).join('')}</section>` : ''}`;
    $('#smd').onchange = e => { ses.md = e.target.value; saveSes(); vSes(); };
    $('#smin').onchange = e => { ses.min = +e.target.value; saveSes(); };
    $('#sgk').onchange = e => { ses.gk = e.target.checked; saveSes(); };
    $('#sed').onchange = e => { ses.ed = e.target.value; saveSes(); setTimeout(vSes, 0); };
    $('#snj').onchange = e => { ses.nj = Math.max(0, +e.target.value || 0) || null; saveSes(); setTimeout(vSes, 0); };
    if ($('#lvu')) $('#lvu').onclick = () => { const n = shiftLevel(1); vSes(); toast(n ? `${n} tareas más exigentes` : 'No hay un nivel más difícil para estas tareas'); };
    if ($('#lvd')) $('#lvd').onclick = () => { const n = shiftLevel(-1); vSes(); toast(n ? `${n} tareas más sencillas` : 'No hay un nivel más fácil para estas tareas'); };
    $('#app').querySelectorAll('[data-alt]').forEach(b => b.onclick = () => { const [i, id] = b.dataset.alt.split('|'); ses.items[+i].id = id; saveSes(); vSes(); });
    $('#gen').onclick = () => { generar(); vSes(); };
    if ($('#clear')) $('#clear').onclick = () => { ses.items = []; saveSes(); vSes(); };
    if ($('#print')) $('#print').onclick = () => pdfDialog(its);
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
        const pool = TAREAS.filter(t => vis(t) && t.md.includes(ses.md) && blockOf(t) === it.b && !used.has(t.id));
        const same = pool.filter(t => t.cat === cur.cat); const n = pick(same.length ? same : pool, used);
        if (n) it.id = n.id; else toast('No hay otra tarea para este bloque');
      }
      saveSes(); vSes();
    });
    $('#app').querySelectorAll('[data-load]').forEach(b => b.onclick = () => { const s = saved[+b.dataset.load]; ses = { ...ses, md: s.md, min: s.min || ses.min, items: JSON.parse(JSON.stringify(s.items)) }; saveSes(); vSes(); window.scrollTo(0, 0); });
    $('#app').querySelectorAll('[data-rm]').forEach(b => b.onclick = () => { if (confirm('¿Borrar esta sesión guardada?')) { saved.splice(+b.dataset.rm, 1); store.set('saved', saved); vSes(); } });
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
      <div class="big" id="bigd">${drawField(DD(t), { label: t.n })}<span class="zoom">⤢</span></div>
      ${(t.d.a || []).length ? animBarHTML('abc') : ''}
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
      if (RUN.done) { $('#tph').textContent = '¡TAREA TERMINADA!'; $('#ttime').textContent = '✓'; $('#trep').textContent = RUN.idx < its.length - 1 ? 'Pulsa › para pasar a la siguiente tarea' : 'Fin de la sesión'; if (RUN.idx >= its.length - 1) $('#trep').innerHTML = 'Fin de la sesión · <a class="link" href="#/valorar">⭐ Valorar las tareas</a>'; }
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
    bindAnim('abc', $('#bigd'), DD(t));
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
      <div class="week">${MDS.map(m => { const x = MDINFO[m], n = TAREAS.filter(t => vis(t) && t.md.includes(m)).length; return `
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
        <a class="btn pri xl" href="#/nueva">＋ Crear una tarea nueva</a>
        <a class="pzcard" href="#/tablero"><span class="bthumb">${drawField({ v: [-4, -4, 113, 76], p: [['A', 30, 25], ['A', 40, 45], ['B', 60, 34], ['P', 4, 34]], c: [[50, 20], [50, 48]], h: [[70, 30, 90]], a: [['pase', 30, 25, 40, 45, 0]] }, { mini: true })}</span><span><b>Pizarra táctica</b><small>Grande, con conos, vallas, escaleras, maniquíes… ${boards.length ? `· ${boards.length} guardada${boards.length > 1 ? 's' : ''}` : ''}</small></span><i>›</i></a>
        <div class="bkcard"><h2>Copia de seguridad</h2><div class="qacts"><button id="exp"><i>💾</i>Copia completa</button><button id="expt"><i>📤</i>Solo mis tareas</button><label><i>📥</i>Restaurar<input type="file" id="imp" accept=".json,application/json" hidden></label></div>
        <p class="sub">La copia completa guarda todo lo de My Coach en un archivo (tareas, valoraciones, sesiones, plan, contenidos, metodología, partidos y ajustes). Guárdala en Drive o envíatela por correo. «Solo mis tareas» sirve para pasárselas a otro entrenador.</p>
        ${(() => { const lb = store.get('lastbk', null), dd = lb ? Math.floor((new Date() - parseISO(lb)) / 864e5) : null; return `<p class="bkst ${dd == null || dd > 30 ? 'warn' : ''}">${dd == null ? '⚠ Todavía no has hecho ninguna copia completa.' : dd === 0 ? '✓ Última copia: hoy.' : `${dd > 30 ? '⚠' : '✓'} Última copia: hace ${dd} día${dd > 1 ? 's' : ''}.`}</p>`; })()}</div></section>
      <section><h2>Creadas por mí (${mine.length})</h2>${mine.length ? `<div class="grid">${mine.map(card).join('')}</div>` : '<div class="empty">Todavía no has creado tareas. Pulsa <b>Nueva tarea</b> o abre cualquier tarea de la biblioteca y pulsa <b>Duplicar y editar</b> para adaptarla.</div>'}</section>
      <section><h2>Favoritos (${l.length})</h2>${l.length ? `<div class="grid">${l.map(card).join('')}</div>` : '<div class="empty">Pulsa ☆ en cualquier tarea para guardarla aquí.</div>'}</section>
      <p class="note center"><a href="privacidad.html">Política de privacidad</a> · My Coach</p>`;
    const dl = (obj, name) => { const blob = new Blob([JSON.stringify(obj, null, 1)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); };
    $('#exp').onclick = () => {
      const todo = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith('mc_') && k !== 'mc_lastbk') todo[k] = localStorage.getItem(k); }
      dl({ app: 'My Coach', version: 3, tipo: 'copia completa', fecha: new Date().toISOString(), tareas: mine, notas: notes, sesiones: saved, plan, todo }, 'mycoach-copia-' + iso(new Date()) + '.json');
      store.set('lastbk', iso(new Date())); toast('Copia completa descargada'); setTimeout(vMis, 300);
    };
    $('#expt').onclick = () => { if (!mine.length) { toast('Aún no has creado tareas'); return; } dl({ app: 'My Coach', version: 3, tipo: 'tareas', tareas: mine }, 'mycoach-tareas-' + iso(new Date()) + '.json'); };
    $('#imp').onchange = async e => {
      const f = e.target.files[0]; if (!f) return;
      try {
        const j = JSON.parse(await f.text());
        if (j && j.todo && typeof j.todo === 'object') {
          const n = Object.keys(j.todo).length;
          if (confirm(`Copia completa del ${String(j.fecha || '').slice(0, 10).split('-').reverse().join('/')} (${n} apartados: tareas, sesiones, plan, contenidos, notas…).\n\nAceptar: restaurarla tal cual (sustituye lo que hay ahora en este móvil).\nCancelar: solo añadir las tareas, sesiones y notas que falten.`)) {
            Object.keys(localStorage).filter(k => k.startsWith('mc_') && k !== 'mc_lastbk').forEach(k => localStorage.removeItem(k));
            Object.entries(j.todo).forEach(([k, v]) => { if (k.startsWith('mc_')) localStorage.setItem(k, v); });
            if (j.fecha) store.set('lastbk', String(j.fecha).slice(0, 10));
            toast('Copia restaurada'); setTimeout(() => location.reload(), 600); return;
          }
        }
        const arr = Array.isArray(j) ? j : j.tareas;
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
    const rp = rivPend; rivPend = null; const bp = boardPend; boardPend = null;
    if (mode === 'nueva' && bp) { t = JSON.parse(JSON.stringify(BLANK)); t.d = JSON.parse(JSON.stringify(bp.d)); t.n = bp.n || ''; if (t.d.f7) t.ed = 'PBA'; }
    else if (mode === 'nueva' && rp && rivals[rp]) t = planTaskFor(rivals[rp]);
    else if (mode === 'nueva') { t = JSON.parse(JSON.stringify(BLANK)); if (MODE === 'f7') { t.d = { f7: true }; t.ed = 'PBA'; } }
    else { const src = byId[id]; if (!src) { $('#app').innerHTML = '<div class="empty">Tarea no encontrada.</div>'; return; } t = JSON.parse(JSON.stringify(src)); if (mode === 'duplicar' && MODE === 'f7' && !isF7t(src)) { t.d = JSON.parse(JSON.stringify(DD(src))); const c = catAdapt(src, fixEd(ses.ed)); if (c && c.w) t.esp = [c.w, c.h]; if (c) t.dur = c.dur; } if (mode === 'duplicar') { delete t.id; t.n = t.n + ' (copia)'; } }
    TaskEditor.mount($('#app'), t, {
      title: { nueva: 'Nueva tarea', editar: 'Editar tarea', duplicar: 'Duplicar y editar' }[mode],
      onSave(out) {
        if (out.id && mine.some(m => m.id === out.id)) mine = mine.map(m => m.id === out.id ? out : m);
        else { out.id = newId(); mine.unshift(out); }
        saveMine(); toast('Tarea guardada');
        if (rp && rivals[rp]) { rivals[rp].tid = out.id; saveRivals(); location.replace('#/partido/' + rp); return; }
        location.replace('#/t/' + out.id);
      },
      onCancel() { history.length > 1 ? history.back() : (location.hash = '#/mis'); }
    });
    window.scrollTo(0, 0);
  }

  // ---------- Pizarra táctica libre ----------
  let boardPend = null, boards = store.get('boards', []);
  const saveBoards = () => store.set('boards', boards);
  const fmtDT = ts => { const d = new Date(ts); return `${d.getDate()} ${MN[d.getMonth()]} · ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; };
  const BSTART = {
    f11: { n: 'Campo completo F11', d: { v: [-4, -4, 113, 76] } },
    half: { n: 'Último tercio F11', d: { v: [57, 8, 50, 52] } },
    f7: { n: 'Campo de fútbol 7', d: { f7: true, v: [-3, -3, 66, 46] } },
    f11s: { n: '1-4-3-3 contra 1-4-4-2', d: { v: [-4, -4, 113, 76] }, sis: ['1-4-3-3', '1-4-4-2'] },
    f7s: { n: 'F7 · 1-3-3 contra 1-2-3-1', d: { f7: true, v: [-3, -3, 66, 46] }, sis: ['1-3-3', '1-2-3-1'] }
  };
  function newBoard(k) {
    const b = BSTART[k], d = JSON.parse(JSON.stringify(b.d));
    if (b.sis) { const S = d.f7 ? SIS7 : SIS11, [FL, FW] = d.f7 ? [60, 40] : [105, 68]; d.p = [];
      b.sis.forEach((nm, t) => S[nm].forEach(([x, y], i) => { const X = t ? FL - x : x, Y = t ? FW - y : y; d.p.push(i ? [t ? 'B' : 'A', X, Y, String(i + 1)] : ['P', X, Y]); })); }
    const o = { id: 'pz' + Date.now().toString(36), n: 'Pizarra ' + (boards.length + 1), d, ts: Date.now() };
    boards.unshift(o); saveBoards(); location.hash = '#/tablero/' + o.id;
  }
  function vTableros() {
    $('#app').innerHTML = `<section class="intro"><h1>Pizarra táctica</h1><p class="sub">Grande, a pantalla completa y con todo el material: conos, setas, picas, vallas, escaleras, aros, maniquíes, cajones, balones… Se guarda sola.</p></section>
      <section><h2>Nueva pizarra</h2><div class="bnew">${Object.entries(BSTART).filter(([k]) => MODE === 'f7' ? /f7/.test(k) || k === 'f11' : true).map(([k, b]) => `<button data-nb="${k}"><span class="bthumb">${drawField(b.sis ? (() => { const d = JSON.parse(JSON.stringify(b.d)); const S = d.f7 ? SIS7 : SIS11, [FL, FW] = d.f7 ? [60, 40] : [105, 68]; d.p = []; b.sis.forEach((nm, t) => S[nm].forEach(([x, y], i) => d.p.push([i ? (t ? 'B' : 'A') : 'P', t ? FL - x : x, t ? FW - y : y]))); return d; })() : b.d, { mini: true })}</span><b>${b.n}</b></button>`).join('')}</div></section>
      <section><h2>Mis pizarras (${boards.length})</h2>${boards.length ? `<div class="blist">${boards.map(b => `<div class="bitem"><a href="#/tablero/${b.id}" class="bthumb">${drawField(b.d, { mini: true })}</a><div class="bi"><a href="#/tablero/${b.id}"><b>${esc(b.n)}</b></a><small>${fmtDT(b.ts)}</small></div><button class="btn sm" data-bdup="${b.id}" aria-label="Duplicar">⧉</button><button class="btn sm danger" data-brm="${b.id}" aria-label="Borrar">🗑</button></div>`).join('')}</div>` : '<div class="empty">Aún no tienes pizarras. Empieza con una de arriba.</div>'}</section>`;
    $('#app').querySelectorAll('[data-nb]').forEach(b => b.onclick = () => newBoard(b.dataset.nb));
    $('#app').querySelectorAll('[data-brm]').forEach(b => b.onclick = () => { const o = boards.find(x => x.id === b.dataset.brm); if (!o || !confirm(`¿Borrar «${o.n}»?`)) return; boards = boards.filter(x => x !== o); saveBoards(); vTableros(); });
    $('#app').querySelectorAll('[data-bdup]').forEach(b => b.onclick = () => { const o = boards.find(x => x.id === b.dataset.bdup); if (!o) return; boards.unshift({ ...JSON.parse(JSON.stringify(o)), id: 'pz' + Date.now().toString(36), n: o.n + ' (copia)', ts: Date.now() }); saveBoards(); vTableros(); });
  }
  async function boardCanvas(b) {
    const W = 1800, M = 40, iw = W - 2 * M, ih = iw / 1.5, c = document.createElement('canvas'), ctx = c.getContext('2d');
    c.width = W; c.height = ih + 2 * M + 70; ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#101a15'; ctx.font = `700 40px ${FONT}`; ctx.fillText(b.n, M, M + 34);
    ctx.fillStyle = '#6b7972'; ctx.font = `500 26px ${FONT}`; ctx.textAlign = 'right'; ctx.fillText('My Coach · Pizarra táctica', W - M, M + 32); ctx.textAlign = 'left';
    const img = await svgImg(b.d, iw); ctx.save(); rr(ctx, M, M + 70, iw, ih, 22); ctx.clip(); if (img) ctx.drawImage(img, M, M + 70, iw, ih); ctx.restore();
    return c;
  }
  function vTablero(id) {
    const b = boards.find(x => x.id === id);
    if (!b) { location.replace('#/tablero'); return; }
    let tSave = 0;
    const ed = TaskEditor.mount($('#app'), { n: b.n, d: JSON.parse(JSON.stringify(b.d)) }, {
      title: 'Pizarra táctica', fsTitle: b.n, boardOnly: true, startFS: matchMedia('(pointer: coarse)').matches || innerWidth < 900,
      onChange(d) { clearTimeout(tSave); tSave = setTimeout(() => { b.d = ed ? ed.clean() : d; b.ts = Date.now(); saveBoards(); const s = $('#bsaved'); if (s) s.textContent = '✓ Guardada'; }, 300); },
      onCancel() { location.hash = '#/tablero'; }
    });
    $('#bx').innerHTML = `<div class="bxbar"><input id="bname" value="${esc(b.n)}" maxlength="60" aria-label="Nombre de la pizarra"><span id="bsaved" class="bsaved">✓ Guardada</span></div>
      <div class="qacts"><button id="bimg"><i>🖼</i>Imagen</button><button id="btask"><i>📋</i>Crear tarea</button><button id="bdup2"><i>⧉</i>Duplicar</button><a href="#/tablero"><i>🗂</i>Mis pizarras</a></div>`;
    $('#bname').oninput = e => { b.n = e.target.value.trim() || 'Pizarra'; b.ts = Date.now(); saveBoards(); const t = document.querySelector('.fsbar b'); if (t) t.textContent = b.n; };
    $('#bimg').onclick = () => { b.d = ed.clean(); shareImage(boardCanvas(b), b.n); };
    $('#btask').onclick = () => { b.d = ed.clean(); saveBoards(); boardPend = { d: b.d, n: b.n }; location.hash = '#/nueva'; };
    $('#bdup2').onclick = () => { b.d = ed.clean(); const o = { ...JSON.parse(JSON.stringify(b)), id: 'pz' + Date.now().toString(36), n: b.n + ' (copia)', ts: Date.now() }; boards.unshift(o); saveBoards(); location.hash = '#/tablero/' + o.id; };
  }

  // ---------- Planificador ----------
  let planWk = 0;
  const DN = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const MN = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const sesTot = (items, ed) => { const f = items.map(x => byId[x.id] ? { ...x, t: byId[x.id] } : null).filter(x => x && x.b !== 'por'), D = t => adjDur(t, ed); return { min: f.reduce((a, x) => a + D(x.t), 0), ua: Math.round(f.reduce((a, x) => a + D(x.t) * rpeMid(x.t.rpe), 0)) }; };
  let planT; const rePlan = () => { clearTimeout(planT); planT = setTimeout(vPlan, 0); };
  // Lo que se hizo de verdad (minutos y ejercicios que se acortaron), leído de My Team / Vestuario
  function realLine(e) {
    if (!e.realMin && !(e.realEj && e.realEj.length)) return '';
    const diff = (e.realEj || []).filter(x => x.plan != null && x.dur != null && x.plan !== x.dur);
    const dm = e.realMin != null && e.min ? e.realMin - e.min : null;
    return `<span class="rl">Hecho: <b>${e.realMin ?? '—'}'</b>${dm ? ` <em class="${dm < 0 ? 'neg' : 'pos'}">(${dm > 0 ? '+' : ''}${dm}')</em>` : ''}</span>`
      + (diff.length ? `<span class="rl sm">${diff.map(x => `${esc(x.n)} ${x.dur}' <s>${x.plan}'</s>`).join(' · ')}</span>` : '');
  }
  // Plantillas de semana: null = descanso, 'match' = partido, [MD, minutos] = sesión
  const WTPL = {
    sen5: { n: 'Sénior · 5 entrenos + partido el domingo', d: [['MD+1', 60], null, ['MD-4', 90], ['MD-3', 90], ['MD-2', 75], ['MD-1', 60], 'match'] },
    sen4: { n: 'Sénior · 4 entrenos (M-X-V-S) + partido', d: [null, ['MD-4', 90], ['MD-3', 90], null, ['MD-2', 75], ['MD-1', 60], 'match'] },
    juv3: { n: 'Juvenil / cadete · 3 entrenos (M-J-V) + partido', d: [null, ['MD-4', 90], null, ['MD-3', 90], ['MD-1', 75], null, 'match'] },
    for3: { n: 'Formación · 3 entrenos (L-X-V) + partido el sábado', d: [['MD-4', 75], null, ['MD-3', 75], null, ['MD-1', 60], 'match', null] },
    base2: { n: 'Fútbol base · 2 entrenos (M-J) + partido el sábado', d: [null, ['MD-4', 75], null, ['MD-2', 75], null, 'match', null] },
    dos: { n: 'Semana con 2 partidos (miércoles y domingo)', d: [['MD+1', 60], ['MD-1', 60], 'match', ['MD+1', 60], ['MD-2', 70], ['MD-1', 60], 'match'] },
    pre: { n: 'Pretemporada · doble carga y amistoso el sábado', d: [['MD-4', 90], ['MD-3', 90], ['MD+1', 60], ['MD-4', 90], ['MD-3', 90], 'match', null] },
    f7a3: { f7: 1, n: 'Fútbol 7 · 3 entrenos (L-X-V) + partido el sábado', d: [['MD-4', 75], null, ['MD-3', 75], null, ['MD-1', 60], 'match', null] },
    f7a2: { f7: 1, n: 'Fútbol 7 · 2 entrenos (M-J) + partido el sábado', d: [null, ['MD-4', 75], null, ['MD-2', 75], null, 'match', null] },
    f7b2: { f7: 1, n: 'Benjamín / prebenjamín · 2 entrenos de 60′ + partido', d: [null, ['MD-4', 60], null, ['MD-2', 60], null, 'match', null] },
    f7pre: { f7: 1, n: 'Fútbol 7 · pretemporada: 3 entrenos + amistoso', d: [['MD-4', 75], null, ['MD-3', 75], null, ['MD-2', 60], 'match', null] }
  };
  function applyTpl(key, mon) {
    const tp = WTPL[key], f0 = [...Array(7)].map((_, i) => iso(addDays(mon, i)));
    if (f0.some(f => plan[f] && plan[f].k !== 'none') && !confirm('Esta semana ya tiene días planificados. ¿Sustituirlos por la plantilla?')) return false;
    const pf = weekPf(mon) || (/pre/.test(key) ? { niv: 1 } : null), short = tp.n.split(' · ')[0];
    tp.d.forEach((x, i) => {
      const f = f0[i], old = plan[f] || {}, keep = { realMin: old.realMin, realEj: old.realEj, realSrc: old.realSrc };
      if (x === 'match') plan[f] = { k: 'match', name: /pre/.test(key) ? 'Amistoso' : 'Partido', min: tp.f7 ? 60 : 90, rpe: 8 };
      else if (!x) plan[f] = { k: 'rest' };
      else { const items = genSession({ md: x[0], min: x[1], gk: ses.gk, ed: ses.ed, nj: ses.nj, pf }); plan[f] = { k: 'ses', name: `${short} · ${x[0]}`, md: x[0], items, ...sesTot(items, ses.ed) }; }
      if (keep.realSrc) Object.assign(plan[f], keep);
    });
    savePlan(); return true;
  }
  const appLink = app => /vestuario/i.test(app || '') ? '../' : '../myteam/';
  function vPlan() {
    const mon = addDays(monday(new Date()), planWk * 7), today = iso(new Date());
    const fmtD = d => `${d.getDate()} ${MN[d.getMonth()]}`;
    const days = [...Array(7)].map((_, i) => plan[iso(addDays(mon, i))]);
    const nS = days.filter(e => e && e.k === 'ses').length, nM = days.filter(e => e && e.k === 'match').length;
    const minP = days.reduce((a, e) => a + (e && e.k === 'ses' ? e.min || 0 : 0), 0), uaP = days.reduce((a, e) => a + dayLoad(e), 0);
    const c = contOf(mon);
    const opts = `<option value="">Asignar…</option><option value="cur">📋 Sesión actual (${ses.md})</option>${saved.map((x, i) => `<option value="sv:${i}">💾 ${esc(x.name)}</option>`).join('')}<option value="gen">⚡ Generar sesión para este día</option><option value="match">⚽ Partido</option><option value="rest">😴 Descanso</option><option value="clr">✕ Vaciar día</option>`;
    const rows = days.map((e, i) => {
      const d = addDays(mon, i), f = iso(d), md = mdOf(f), l = dayLoad(e);
      const body = !e || e.k === 'none' ? `<span class="sub">Sin planificar</span>${e ? realLine(e) : ''}`
        : e.k === 'ses' ? `<b>${esc(e.name)}</b><span class="sub">${e.min}' · ${e.ua} UA objetivo · ${e.items.length} tareas</span>${realLine(e)}<button class="link" data-open="${f}">Abrir en Sesión</button>`
        : e.k === 'match' ? `<b>⚽ ${esc(e.name || 'Partido')}</b><a class="link" href="#/partido/${f}">${rivals[f] && rivals[f].rival ? '⚔️ Ver preparación' : '⚔️ Preparar el partido'}</a><span class="sub"><input type="number" class="mini" data-mm="${f}" value="${e.min}">' × RPE <input type="number" class="mini" data-mr="${f}" value="${e.rpe}" min="1" max="10"> = ${l} UA</span>`
        : '<b>😴 Descanso</b>';
      return `<div class="pday ${f === today ? 'today' : ''} ${e && e.k === 'match' ? 'match' : ''}">
        <div class="pd1"><b>${DN[i]}</b><small>${fmtD(d)}</small>${md ? `<span class="md">${md}</span>` : ''}</div>
        <div class="pd2">${body}</div>
        <div class="pd3"><select data-as="${f}" aria-label="Asignar">${opts}</select></div>
      </div>`;
    }).join('');
    $('#app').innerHTML = `<section class="plan">
      <div class="wkn"><button class="btn" id="wp" aria-label="Semana anterior">‹</button><div><b>Semana del ${fmtD(mon)} al ${fmtD(addDays(mon, 6))}</b>${planWk ? '<button class="link" id="wt">Ir a esta semana</button>' : '<small class="sub">Semana actual</small>'}</div><button class="btn" id="wn" aria-label="Semana siguiente">›</button></div>
      <a class="cban ${c && c.p ? '' : 'off'}" href="#/temporada">${c && c.p ? `🎯 <span>Contenido: <b>${PRIN[c.p].n}</b>${c.s ? ' + ' + PRIN[c.s].n : ''} · nivel ${c.niv || 1}${c.nota ? `<small>${esc(c.nota)}</small>` : ''}</span>` : '🎯 <span>Esta semana no tiene contenido. <b>Planificar contenidos de la temporada</b></span>'}<i>›</i></a>
      <div class="wstats w4">
        <div><small>Sesiones</small><b>${nS}</b></div>
        <div><small>Minutos</small><b>${minP}</b></div>
        <div><small>UA objetivo</small><b>${uaP}</b></div>
        <div><small>Partidos</small><b>${nM}</b></div>
      </div>
      <p class="sub">Marca el día del partido y el MD de cada día se calcula solo. Aquí diseñas la semana; el control de la carga real (RPE, ACWR, monotonía…) se lleva en My Team.</p>
      <div class="pweek">${rows}</div>
      <div class="acts"><select id="wtpl" class="btn"><option value="">📋 Aplicar plantilla de semana…</option>${Object.entries(WTPL).filter(([k, v]) => !!v.f7 === (MODE === 'f7')).map(([k, v]) => `<option value="${k}">${esc(v.n)}</option>`).join('')}</select><button class="btn ghost" id="copyw">⧉ Copiar semana anterior</button></div>
      <div class="acts"><a class="btn" href="#/partido">⚔️ Preparar el partido</a><a class="btn" href="#/temporada">🎯 Contenidos</a><a class="btn" href="#/metodologia">🏛 Metodología del club</a></div>
      <section class="bridge"><h2>Conexión con My Team</h2>
        <div id="mt" class="mtbox"><span class="sub">Buscando My Team en este móvil…</span></div>
        <details class="csvd"><summary>Sin conexión directa: exportar el plan en CSV</summary>
          <div class="acts"><button class="btn" id="csv">⬇ Exportar plan (CSV)</button></div>
        </details>
      </section></section>`;
    mtPanel(mon);
    $('#wp').onclick = () => { planWk--; rePlan(); }; $('#wn').onclick = () => { planWk++; rePlan(); };
    if ($('#wt')) $('#wt').onclick = () => { planWk = 0; rePlan(); };
    $('#wtpl').onchange = e => { const k = e.target.value; if (!k) return; if (applyTpl(k, mon)) toast('Plantilla aplicada: ' + WTPL[k].n.split(' · ')[0]); rePlan(); };
    $('#app').querySelectorAll('[data-as]').forEach(sel => sel.onchange = () => {
      const f = sel.dataset.as, v = sel.value, old = plan[f] || {}, keep = { realMin: old.realMin, realEj: old.realEj, realSrc: old.realSrc };
      if (v === 'cur') { if (!ses.items.length) { toast('La sesión actual está vacía'); sel.value = ''; return; } plan[f] = { k: 'ses', name: `Sesión ${ses.md}`, md: ses.md, items: JSON.parse(JSON.stringify(ses.items)), ...sesTot(ses.items, ses.ed) }; }
      else if (v.startsWith('sv:')) { const x = saved[+v.slice(3)]; plan[f] = { k: 'ses', name: x.name, md: x.md, items: JSON.parse(JSON.stringify(x.items)), ...sesTot(x.items, ses.ed) }; }
      else if (v === 'gen') { const md = MDS.includes(mdOf(f)) ? mdOf(f) : 'MD-3'; const items = genSession({ md, min: ses.min, gk: ses.gk, ed: ses.ed, nj: ses.nj, pf: weekPf(f) }); if (!items.length) { toast('No hay tareas para ' + md); sel.value = ''; return; } plan[f] = { k: 'ses', name: `Sesión ${md}`, md, items, ...sesTot(items, ses.ed) }; }
      else if (v === 'match') plan[f] = { k: 'match', min: MODE === 'f7' ? 60 : 90, rpe: 8 };
      else if (v === 'rest') plan[f] = { k: 'rest' };
      else if (v === 'clr') { delete plan[f]; if (keep.realSrc) plan[f] = { k: 'none' }; }
      if (plan[f] && keep.realSrc) Object.assign(plan[f], keep);
      savePlan(); rePlan();
    });
    $('#app').querySelectorAll('[data-mm]').forEach(i => i.onchange = () => { plan[i.dataset.mm].min = Math.max(0, +i.value || 0); savePlan(); rePlan(); });
    $('#app').querySelectorAll('[data-mr]').forEach(i => i.onchange = () => { plan[i.dataset.mr].rpe = Math.min(10, Math.max(0, +i.value || 0)); savePlan(); rePlan(); });
    $('#app').querySelectorAll('[data-open]').forEach(b => b.onclick = () => { const e = plan[b.dataset.open]; ses.md = e.md; ses.items = JSON.parse(JSON.stringify(e.items)); saveSes(); location.hash = '#/sesion'; });
    $('#copyw').onclick = () => { let n = 0; for (let i = 0; i < 7; i++) { const src = plan[iso(addDays(mon, i - 7))], dst = iso(addDays(mon, i)); if (src && src.k !== 'none' && (!plan[dst] || plan[dst].k === 'none')) { const c2 = JSON.parse(JSON.stringify(src)); delete c2.realMin; delete c2.realEj; delete c2.realSrc; plan[dst] = Object.assign(plan[dst] || {}, c2); n++; } } savePlan(); rePlan(); toast(n ? `${n} días copiados` : 'No había nada que copiar (o los días ya estaban ocupados)'); };
    $('#csv').onclick = () => {
      const rows = [['fecha', 'md', 'tipo', 'nombre', 'minutos', 'rpe_planificado', 'ua_planificada', 'tareas']];
      Object.keys(plan).sort().forEach(f => { const e = plan[f], l = dayLoad(e); if (e.k === 'none') return; rows.push([f, mdOf(f), { ses: 'sesion', match: 'partido', rest: 'descanso' }[e.k], e.name || '', e.min || '', e.min ? (l / e.min).toFixed(1) : '', l, e.k === 'ses' ? e.items.map(x => byId[x.id] ? byId[x.id].n : '').filter(Boolean).join(' | ') : '']); });
      const csv = '﻿' + rows.map(r => r.map(x => /[;"\n]/.test(String(x)) ? `"${String(x).replace(/"/g, '""')}"` : x).join(';')).join('\n');
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = 'mycoach-plan.csv'; document.body.appendChild(a); a.click(); a.remove();
    };
  }
  // ---------- Conexión directa con My Team ----------
  let mtTeam = store.get('mtTeam', null), mtAuto = false;
  async function mtSync(tid, silent) {
    const r = await MyTeamLink.read(tid); if (!r) return 0;
    let n = 0;
    Object.entries(r.days).forEach(([f, x]) => { const e = plan[f] = plan[f] || { k: 'none' }; if (e.realMin !== (x.min || null) || JSON.stringify(e.realEj || null) !== JSON.stringify(x.ej || null)) n++; e.realSrc = 'myteam'; e.realMin = x.min || null; e.realEj = x.ej || null; });
    // los días que ya no tienen sesión en My Team pierden el dato importado
    Object.entries(plan).forEach(([f, e]) => { if (e.realSrc === 'myteam' && !r.days[f]) { delete e.realSrc; delete e.realMin; delete e.realEj; if (e.k === 'none') delete plan[f]; n++; } });
    r.games.forEach(g => { const e = plan[g.iso]; if (!e || e.k === 'none' || e.k === 'rest') { const x = r.days[g.iso]; plan[g.iso] = { k: 'match', name: g.rival ? 'Partido vs ' + g.rival : 'Partido', min: g.dur, rpe: x ? x.rpe || 8 : 8, src: 'myteam' }; n++; } });
    savePlan();
    if (!silent) toast(n ? `Actualizado (${Object.keys(r.days).length} sesiones hechas, ${r.games.length} partidos)` : 'Ya estaba todo al día');
    return n;
  }
  async function mtPanel(mon) {
    const box = $('#mt'); if (!box) return;
    let ts = null; try { ts = await MyTeamLink.teams(); } catch (e) { }
    if (!$('#mt')) return;
    if (!ts) { box.innerHTML = `<p class="sub">No se han encontrado datos de My Team ni de Vestuario en este móvil. La conexión directa funciona cuando las dos apps están instaladas en el mismo teléfono y My Team tiene datos guardados. Mientras tanto, puedes exportar el plan en CSV.</p>`; return; }
    if (!mtTeam || !ts.some(t => t.id === mtTeam)) { mtTeam = ts[0].id; store.set('mtTeam', mtTeam); }
    const cur = ts.find(t => t.id === mtTeam), short = cur.app.split(' (')[0];
    const apps = new Set(ts.map(t => t.app));
    box.innerHTML = `<div class="mtok"><b>✓ Conectado con ${esc(cur.app)}</b><span class="sub">${esc(cur.name)} · ${cur.players} jugadores</span></div>
      ${ts.length > 1 ? `<label class="mtsel">Equipo <select id="mtteam">${ts.map(t => `<option value="${esc(t.id)}" ${t.id === mtTeam ? 'selected' : ''}>${esc(t.name)}${apps.size > 1 ? ' · ' + esc(t.app) : ''}</option>`).join('')}</select></label>` : ''}
      <div class="acts"><button class="btn pri" id="mtout">⬆ Enviar plan a ${esc(short)}</button><a class="btn" id="mtgo" href="${appLink(cur.app)}">📊 Ver la carga en ${esc(short)}</a><button class="btn ghost" id="mtin">⟳ Actualizar</button></div>
      <p class="sub">«Enviar plan» pone la carga objetivo de cada día en la Planificación de ${esc(short)}. De allí se traen los partidos y lo que se hizo de verdad (minutos y ejercicios acortados), para que veas si la sesión salió como la diseñaste. RPE, ACWR y control de carga, en ${esc(short)}.${apps.size > 1 ? ' Tienes las dos versiones con datos: elige en «Equipo» la que usas.' : ''}</p>`;
    if ($('#mtteam')) $('#mtteam').onchange = e => { mtTeam = e.target.value; store.set('mtTeam', mtTeam); mtAuto = false; rePlan(); };
    $('#mtin').onclick = async () => { await mtSync(mtTeam); rePlan(); };
    $('#mtout').onclick = async () => {
      const from = iso(addDays(mon, -7)), by = {};
      Object.entries(plan).forEach(([f, e]) => { if (f >= from && (e.k === 'ses' || e.k === 'match' || e.k === 'rest')) by[f] = dayLoad(e); });
      const n = Object.keys(by).length;
      if (!n) { toast('No hay días planificados desde la semana pasada'); return; }
      if (!confirm(`Se enviará la carga objetivo de ${n} días al plan de ${cur.app} (${cur.name}). Los días que no hayas planificado aquí no se tocan.\n\nSi tienes la app abierta, ciérrala del todo y vuelve a abrirla para ver los cambios.`)) return;
      try { const w = await MyTeamLink.writePlan(mtTeam, by); toast(`Plan enviado: ${w} días`); } catch (e) { toast('No se pudo escribir en ' + cur.app); }
    };
    if (!mtAuto) { mtAuto = true; try { if (await mtSync(mtTeam, true)) rePlan(); } catch (e) { } }
  }

  // ---------- Temporada por contenidos ----------
  const CYCLES = {
    eq: { n: 'Equilibrado (ataque y defensa)', w: [['pos', 'pre'], ['fin', 'def'], ['sal', 'tra'], ['ban', 'abp']] },
    at: { n: 'Prioridad ataque', w: [['sal', 'pre'], ['pos', 'def'], ['ban', 'tra'], ['fin', 'abp']] },
    de: { n: 'Prioridad defensa', w: [['def', 'pos'], ['pre', 'sal'], ['tra', 'fin'], ['def', 'abp']] },
    fo: { n: 'Formación (técnica y juego)', w: [['tec', 'pos'], ['pos', 'fin'], ['tec', 'ban'], ['fin', 'tra']] }
  };
  let tmpOff = 0, tmpView = store.get('tmpView', 'cal');
  function vTemporada() {
    const mon0 = addDays(monday(new Date()), (tmpOff - 2) * 7), cur = iso(monday(new Date()));
    const fmtD = d => `${d.getDate()} ${MN[d.getMonth()]}`;
    const popt = (v, empty) => `<option value="">${empty}</option>` + Object.entries(PRIN).map(([k, p]) => `<option value="${k}" ${v === k ? 'selected' : ''}>${p.i} ${p.n}</option>`).join('');
    const rows = [...Array(16)].map((_, i) => {
      const m = addDays(mon0, i * 7), k = iso(m), c = cont[k] || {}, ns = [...Array(7)].filter((_, j) => (plan[iso(addDays(m, j))] || {}).k === 'ses').length;
      const n = c.p ? TAREAS.filter(t => vis(t) && prinOf(t).includes(c.p) && (!c.niv || t.dif === c.niv)).length : 0;
      return `<div class="tw ${k === cur ? 'today' : ''}" data-w="${k}">
        <div class="tw1"><b>${fmtD(m)}</b><small>${k === cur ? 'Esta semana' : ns ? ns + ' sesiones' : ''}</small></div>
        <div class="tw2"><select data-k="p" aria-label="Contenido principal">${popt(c.p, 'Contenido principal…')}</select><select data-k="s" aria-label="Contenido secundario">${popt(c.s, 'Secundario (opcional)')}</select>
          <div class="niv">${[1, 2, 3].map(v => `<button data-niv="${v}" class="${(c.niv || 0) === v ? 'on' : ''}" title="${DIF[v]}">${'▮'.repeat(v)}<small>${DIF[v]}</small></button>`).join('')}</div>
          <input data-k="nota" placeholder="Nota (ej.: rival presiona alto)" value="${esc(c.nota || '')}">
          ${c.p ? `<a class="link" href="#/" data-lib="${c.p}">${n} tareas de ${PRIN[c.p].n.toLowerCase()}${c.niv ? ' · nivel ' + DIF[c.niv].toLowerCase() : ''} ›</a>` : ''}</div>
      </div>`;
    }).join('');
    $('#app').innerHTML = `<section class="tmp">
      <div class="ghd"><h1>Temporada por contenidos</h1><a class="btn sm" href="#/metodologia">🏛 Metodología del club</a></div>
      <div class="tabs2"><button data-tv="cal" class="${tmpView === 'cal' ? 'on' : ''}">📅 Calendario</button><button data-tv="list" class="${tmpView === 'list' ? 'on' : ''}">☰ Semana a semana</button></div>
      ${tmpView === 'cal' ? calHTML() : ''}
      <p class="sub">Decide qué principio de juego trabajas cada semana y con qué nivel de exigencia. El generador de sesiones, las plantillas y el asistente eligen tareas de ese contenido.</p>
      <div class="cyc"><b>Ciclo automático</b>
        <label>Modelo <select id="cy">${Object.entries(CYCLES).map(([k, v]) => `<option value="${k}">${v.n}</option>`).join('')}</select></label>
        <label>Desde <select id="cyf">${[...Array(16)].map((_, i) => { const m = addDays(mon0, i * 7); return `<option value="${iso(m)}" ${iso(m) === cur ? 'selected' : ''}>${fmtD(m)}</option>`; }).join('')}</select></label>
        <label>Semanas <select id="cyn">${[4, 8, 12, 16].map(v => `<option ${v === 12 ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
        <button class="btn pri" id="cyg">Rellenar</button>
        <small class="sub">Repite un bloque de 4 semanas y sube un nivel de exigencia cada vez que lo completa (fácil → media → difícil).</small></div>
      <div class="wkn"><button class="btn" id="tp" aria-label="Antes">‹</button><b>${fmtD(mon0)} – ${fmtD(addDays(mon0, 15 * 7 + 6))}</b><button class="btn" id="tn" aria-label="Después">›</button></div>
      <div class="tws">${rows}</div>
      <div class="acts"><a class="btn" href="#/plan">📅 Ir al plan semanal</a><button class="btn ghost" id="tclr">Borrar estas 16 semanas</button></div></section>`;
    $('#app').querySelectorAll('[data-tv]').forEach(b => b.onclick = () => { tmpView = b.dataset.tv; store.set('tmpView', tmpView); vTemporada(); });
    if (tmpView === 'cal') ['.cyc', '.tmp > .wkn', '.tws', '.tmp > .acts .ghost'].forEach(q => { const e = $(q); if (e) e.remove(); });
    if (tmpView === 'cal') { $('#app').querySelectorAll('[data-wk]').forEach(b => b.onclick = () => { const w = Math.round((parseISO(b.dataset.wk) - monday(new Date())) / 6048e5); tmpOff = w; tmpView = 'list'; vTemporada(); const r = $(`.tw[data-w="${b.dataset.wk}"]`); if (r) { r.scrollIntoView({ block: 'center' }); r.classList.add('flash'); } }); return; }
    const upd = (k, f) => { cont[k] = Object.assign(cont[k] || {}, f); if (!cont[k].p && !cont[k].s && !cont[k].nota) delete cont[k]; else if (cont[k].p && !cont[k].niv) cont[k].niv = 1; saveCont(); };
    $('#app').querySelectorAll('.tw').forEach(r => {
      const k = r.dataset.w;
      r.querySelectorAll('[data-k]').forEach(el => el.onchange = () => { upd(k, { [el.dataset.k]: el.value }); if (el.tagName === 'SELECT') setTimeout(vTemporada, 0); });
      r.querySelectorAll('[data-niv]').forEach(b => b.onclick = () => { upd(k, { niv: +b.dataset.niv }); vTemporada(); });
      const l = r.querySelector('[data-lib]'); if (l) l.onclick = e => { e.preventDefault(); F.q = ''; F.cat = new Set(['tt', 'jue']); F.md = ''; F.prin = l.dataset.lib; F.open = true; location.hash = '#/'; };
    });
    $('#tp').onclick = () => { tmpOff -= 4; vTemporada(); }; $('#tn').onclick = () => { tmpOff += 4; vTemporada(); };
    $('#cyg').onclick = () => {
      const cy = CYCLES[$('#cy').value], n = +$('#cyn').value, from = parseISO($('#cyf').value);
      for (let i = 0; i < n; i++) { const k = iso(addDays(from, i * 7)), w = cy.w[i % cy.w.length], old = cont[k] || {}; cont[k] = { p: w[0], s: w[1], niv: Math.min(3, 1 + Math.floor(i / cy.w.length)), nota: old.nota || '' }; }
      saveCont(); vTemporada(); toast(`${n} semanas planificadas`);
    };
    $('#tclr').onclick = () => { if (!confirm('¿Borrar los contenidos de estas 16 semanas?')) return; for (let i = 0; i < 16; i++) delete cont[iso(addDays(mon0, i * 7))]; saveCont(); vTemporada(); };
  }

  // ---------- Asistente «¿Qué entreno hoy?» ----------
  let AS = store.get('as', null);
  function vAsistente() {
    const wc = contOf(new Date()), dmd = (() => { const m = mdOf(iso(new Date())); return MDS.includes(m) ? m : ses.md; })();
    const A = AS = AS || { ed: fixEd(ses.ed), md: dmd, nj: ses.nj || (MODE === 'f7' ? 10 : 16), gk: 2, min: ses.min || 75, mat: ['conos', 'picas', 'porterias', 'mini'], obj: '' };
    if (!AS._t || AS._t !== iso(new Date())) { A.md = dmd; A._t = iso(new Date()); }
    A.ed = fixEd(A.ed);
    const chip = (g, v, lab, on) => `<button class="chip ${on ? 'on' : ''}" data-g="${g}" data-v="${v}">${lab}</button>`;
    $('#app').innerHTML = `<section class="asis">
      <h1>✨ ¿Qué entreno hoy?</h1>
      <p class="sub">Responde y te preparo una sesión completa, adaptada a tu categoría, tus jugadores y tu material.</p>
      <div class="aq"><b>1 · Categoría</b><div class="row wrap">${chip('ed', '', 'Cualquiera', !A.ed)}${EDM().map(k => chip('ed', k, ED[k], A.ed === k)).join('')}</div></div>
      <div class="aq"><b>2 · ¿Qué día es?</b><div class="row wrap">${MDS.map(m => chip('md', m, `${m}<small>${MDINFO[m].carga}</small>`, A.md === m)).join('')}</div></div>
      <div class="aq two"><label><b>3 · Jugadores de campo</b><input id="anj" type="number" min="4" max="40" inputmode="numeric" value="${A.nj}"></label><label><b>Porteros</b><input id="agk" type="number" min="0" max="4" inputmode="numeric" value="${A.gk}"></label><label><b>4 · Tiempo</b><select id="amin">${[45, 60, 75, 90, 105].map(v => `<option ${v === A.min ? 'selected' : ''} value="${v}">${v} min</option>`).join('')}</select></label></div>
      <div class="aq"><b>5 · Material que tienes</b><div class="row wrap">${Object.entries(MAT).map(([k, v]) => chip('mat', k, v, A.mat.includes(k))).join('')}</div><small class="sub">Balones y petos se dan por hechos.</small></div>
      <div class="aq"><b>6 · Objetivo</b><div class="row wrap">${chip('obj', '', wc && wc.p ? `🎯 Contenido de la semana (${PRIN[wc.p].n})` : '🎯 Lo que toca según el día', !A.obj)}${Object.entries(PRIN).map(([k, p]) => chip('obj', k, p.i + ' ' + p.n, A.obj === k)).join('')}${Object.entries(FIS).map(([k, v]) => chip('obj', 'F:' + k, '⚡ ' + v, A.obj === 'F:' + k)).join('')}</div></div>
      <div class="acts"><button class="btn pri xl" id="ago">⚡ Prepárame la sesión</button></div>
      <div id="ares"></div></section>`;
    const save = () => store.set('as', AS);
    $('#app').querySelectorAll('.chip[data-g]').forEach(b => b.onclick = () => {
      const g = b.dataset.g, v = b.dataset.v;
      if (g === 'mat') { A.mat = A.mat.includes(v) ? A.mat.filter(x => x !== v) : [...A.mat, v]; b.classList.toggle('on'); save(); return; }
      A[g] = v; save(); b.parentNode.querySelectorAll('.chip').forEach(x => x.classList.toggle('on', x === b));
    });
    $('#anj').onchange = e => { A.nj = Math.max(4, +e.target.value || 16); save(); };
    $('#agk').onchange = e => { A.gk = Math.max(0, +e.target.value || 0); save(); };
    $('#amin').onchange = e => { A.min = +e.target.value; save(); };
    $('#ago').onclick = () => {
      let pf = null, order = null;
      if (A.obj.startsWith('F:')) { const c = A.obj.slice(2); pf = { carga: c }; order = c === 'Recuperación' ? ['pre', 'tt', 'pre'] : ['fis', 'tt', 'fis']; }
      else if (A.obj) { pf = { p: A.obj, niv: (wc && wc.niv) || null }; order = ['tt', A.md === 'MD-1' || A.md === 'MD+1' ? 'tt' : 'fis', 'tt']; }
      else pf = weekPf(new Date());
      const items = genSession({ md: A.md, min: A.min, gk: A.gk > 0, ed: A.ed, nj: A.nj, mat: new Set(A.mat), pf, order });
      if (!items.length) { $('#ares').innerHTML = `<div class="empty">No he encontrado tareas para ${A.md} con ese material. Prueba a marcar más material o cambia el día (${A.md} suele ser descanso).</div>`; return; }
      ses = { ...ses, md: A.md, min: A.min, gk: A.gk > 0, ed: A.ed, nj: A.nj, items }; saveSes();
      const its = items.map(x => ({ ...x, t: byId[x.id] })), fieldIts = its.filter(x => x.b !== 'por'), D = t => adjDur(t, A.ed);
      const tot = fieldIts.reduce((a, x) => a + D(x.t), 0), ua = Math.round(fieldIts.reduce((a, x) => a + D(x.t) * rpeMid(x.t.rpe), 0));
      const why = x => { const r = []; const pr = prinOf(x.t); if (pf && pf.p && pr.includes(pf.p)) r.push(PRIN[pf.p].n); if (pf && pf.carga && x.t.carga === pf.carga) r.push(FIS[pf.carga]); const f = fitInfo(x.t, A.nj, A.ed); if (f) r.push(`${f.jug !== x.t.jug ? f.jug + ' en ' : ''}${f.w}x${f.h} m`); return r.join(' · '); };
      $('#ares').innerHTML = `<section class="ares"><h2>Tu sesión ${A.md} · ${tot}' · ${ua} UA</h2><p class="sub">${MDINFO[A.md].t}. ${ED[A.ed]}, ${A.nj} jugadores${A.gk ? ' + ' + A.gk + ' porteros' : ''}.</p>
        ${its.map((x, i) => `<a class="ait" href="#/t/${x.t.id}"><span class="an">${i + 1}</span><div><small>${BLK[x.b]}</small><b>${esc(x.t.n)}</b><span class="sub">${D(x.t)}' · ${INT[x.t.int].n}${why(x) ? ' · ' + esc(why(x)) : ''}</span></div></a>`).join('')}
        <div class="acts"><a class="btn pri" href="#/sesion">📋 Abrir en Sesión</a><a class="btn" href="#/pizarra">📺 Modo vestuario</a><button class="btn ghost" id="aagain">⟳ Otra propuesta</button></div></section>`;
      $('#aagain').onclick = () => $('#ago').click();
      $('#ares').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }

  // ---------- Modo vestuario (pizarra para explicar) ----------
  let PZ = null, PZi = 0;
  function vPizarra(list, exitTo) {
    if (PZ) { PZ.stop(); PZ = null; }
    const its = (list || ses.items).map(x => byId[x.id] ? { ...x, t: byId[x.id] } : null).filter(Boolean);
    if (!its.length) { $('#app').innerHTML = '<div class="empty">La sesión está vacía. Genera una sesión o añade tareas y vuelve al modo vestuario.<br><br><a class="btn pri" href="#/sesion">Ir a Sesión</a></div>'; return; }
    document.body.classList.add('pzmode');
    let i = Math.min(PZi, its.length - 1), ctl = null, auto = true, tx0 = null;
    $('#app').innerHTML = `<div class="pz" id="pz">
      <div class="pzt"><button id="pzx" aria-label="Salir">✕</button><span id="pzh"></span><button id="pzfs">⛶ Pantalla completa</button></div>
      <div class="pzb"><div class="pzf" id="pzf"></div><aside class="pzi" id="pzi"></aside></div>
      <div class="pzc"><button id="pzp" aria-label="Anterior">‹</button><button id="pza">⏸ Pausa</button><button id="pzr" aria-label="Repetir">↺</button><span id="pzcap"></span><button id="pzn" aria-label="Siguiente">›</button></div>
      <div class="pzd" id="pzd">${its.map((_, k) => `<i data-k="${k}"></i>`).join('')}</div></div>`;
    const show = () => {
      if (ctl) { ctl.stop(); ctl = null; }
      PZi = i; const x = its[i], t = x.t, f = fitInfo(t, ses.nj, ses.ed), D = adjDur(t, ses.ed);
      $('#pzh').innerHTML = `<b>${i + 1}/${its.length}</b> · ${BLK[x.b]}`;
      $('#pzf').innerHTML = drawField(DD(t), { label: t.n });
      $('#pzi').innerHTML = `<h2>${esc(t.n)}</h2>${t.obj ? `<p class="po">🎯 ${esc(t.obj)}</p>` : ''}
        <div class="pk"><span>⏱ ${D}'</span><span>👥 ${esc(f ? f.jug : t.jug)}</span>${t.esp && t.esp[0] ? `<span>📐 ${f ? f.w + 'x' + f.h : t.esp[0] + 'x' + t.esp[1]} m</span>` : ''}<span>🔁 ${esc(t.ser)}</span><span style="--c:${INT[t.int].c}" class="pint">${INT[t.int].n}</span></div>
        ${t.reglas && t.reglas.length ? `<h3>Reglas</h3><ul>${t.reglas.slice(0, 4).map(r => `<li>${esc(r)}</li>`).join('')}</ul>` : ''}
        ${t.cons && t.cons.length ? `<h3>Consignas</h3><ul>${t.cons.slice(0, 3).map(r => `<li>${esc(r)}</li>`).join('')}</ul>` : ''}`;
      $('#pzd').querySelectorAll('i').forEach((d, k) => d.classList.toggle('on', k === i));
      $('#pzp').disabled = i === 0; $('#pzn').disabled = i === its.length - 1; $('#pzcap').textContent = '';
      const has = (t.d.a || []).length; $('#pza').hidden = $('#pzr').hidden = !has;
      if (has) ctl = animateField($('#pzf'), DD(t), { autoplay: auto, loop: true, react: true, speed: .8, onState: s => { $('#pza').textContent = s.playing ? '⏸ Pausa' : '▶ Animar'; $('#pzcap').textContent = s.caption || (s.step ? `Paso ${s.step}/${s.total}` : ''); } });
    };
    const go = d => { const n = i + d; if (n < 0 || n >= its.length) return; i = n; show(); };
    const key = e => { if (e.key === 'ArrowRight' || e.key === 'PageDown') go(1); else if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(-1); else if (e.key === ' ') { e.preventDefault(); $('#pza').click(); } else if (e.key === 'Escape' && !document.fullscreenElement) $('#pzx').click(); };
    document.addEventListener('keydown', key);
    const pz = $('#pz');
    pz.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; }, { passive: true });
    pz.addEventListener('touchend', e => { if (tx0 == null) return; const dx = e.changedTouches[0].clientX - tx0; tx0 = null; if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1); });
    $('#pzp').onclick = () => go(-1); $('#pzn').onclick = () => go(1);
    $('#pza').onclick = () => { if (!ctl) return; auto = !auto; auto ? ctl.play() : ctl.pause(); };
    $('#pzr').onclick = () => { if (ctl) { auto = true; ctl.restart(); ctl.play(); } };
    $('#pzd').onclick = e => { const d = e.target.closest('[data-k]'); if (d) { i = +d.dataset.k; show(); } };
    $('#pzx').onclick = () => { location.hash = exitTo || '#/sesion'; };
    $('#pzfs').onclick = async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else { await document.documentElement.requestFullscreen(); try { await screen.orientation.lock('landscape'); } catch (e) { } } } catch (e) { toast('Pantalla completa no disponible'); } };
    wake(true);
    PZ = { stop() { if (ctl) ctl.stop(); document.removeEventListener('keydown', key); document.body.classList.remove('pzmode'); wake(false); if (document.fullscreenElement) document.exitFullscreen().catch(() => { }); } };
    show();
  }

  // ---------- Vídeo de la animación ----------
  async function recordVideo(t) {
    const mime = ['video/mp4;codecs=avc1.42E01E', 'video/mp4;codecs=avc1', 'video/mp4', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find(m => { try { return window.MediaRecorder && MediaRecorder.isTypeSupported(m); } catch (e) { return false; } });
    const cv0 = document.createElement('canvas');
    if (!mime || !cv0.captureStream) { toast('Este móvil no permite grabar vídeo; usa «Imagen para WhatsApp»'); return; }
    const W = 1080, FH = 720, TH = 120, BH = 70, H = TH + FH + BH;
    const ov = document.createElement('div'); ov.className = 'vidov';
    ov.innerHTML = `<div class="vidbox"><b id="vti">🎬 Grabando la animación…</b><div class="vprog"><i id="vbar"></i></div><small class="sub" id="vst">Preparando…</small><div id="vout"></div><div class="acts" id="vacts"><button class="btn ghost" id="vcan">Cancelar</button></div></div>`;
    document.body.appendChild(ov);
    const host = document.createElement('div'); host.className = 'vidhost'; host.style.cssText = `position:fixed;left:-30000px;top:0;width:${W}px;height:${FH}px;pointer-events:none`;
    host.innerHTML = drawField(DD(t)); document.body.appendChild(host);
    const c = cv0; c.width = W; c.height = H; const ctx = c.getContext('2d');
    let st = { step: 0, total: fieldSteps(DD(t)).length }, cap = '', busy = false, live = true, ctl = null, fin = false;
    const paint = img => {
      const g = ctx.createLinearGradient(0, 0, W, 0); g.addColorStop(0, '#15803d'); g.addColorStop(1, '#16a34a'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, TH);
      ctx.fillStyle = '#dcfce7'; ctx.font = `700 26px ${FONT}`; ctx.fillText(`${CAT[t.cat].n.toUpperCase()} · ${t.jug}${t.esp && t.esp[0] ? ` · ${t.esp[0]}x${t.esp[1]} m` : ''}`, 36, 44);
      ctx.fillStyle = '#fff'; ctx.font = `800 42px ${FONT}`; ctx.fillText(wrap(ctx, t.n, W - 72)[0], 36, 96);
      ctx.fillStyle = '#0b2614'; ctx.fillRect(0, TH, W, FH); if (img) ctx.drawImage(img, 0, TH, W, FH);
      ctx.fillStyle = '#0f1f17'; ctx.fillRect(0, TH + FH, W, BH);
      ctx.fillStyle = '#facc15'; ctx.font = `800 28px ${FONT}`; ctx.fillText(st.step ? `Paso ${Math.min(st.step, st.total)}/${st.total}${cap ? ' · ' + cap : ''}` : 'My Coach', 36, TH + FH + 45);
      ctx.fillStyle = '#9bb0a4'; ctx.font = `600 22px ${FONT}`; ctx.textAlign = 'right'; ctx.fillText('My Coach', W - 36, TH + FH + 44); ctx.textAlign = 'left';
    };
    const frame = () => {
      if (!live) return;
      if (!busy) {
        const svg = host.querySelector('svg');
        if (svg) {
          busy = true; let s = new XMLSerializer().serializeToString(svg).replace(/^<svg/, `<svg width="${W}" height="${FH}"`);
          const img = new Image(); img.onload = () => { if (live) paint(img); busy = false; }; img.onerror = () => { busy = false; };
          img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
        }
      }
      requestAnimationFrame(frame);
    };
    const cleanup = () => { live = false; if (ctl) ctl.stop(); host.remove(); };
    const stream = c.captureStream(30), chunks = [];
    let rec; try { rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 5e6 }); } catch (e) { cleanup(); ov.remove(); toast('No se pudo iniciar la grabación'); return; }
    rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    let cancelled = false;
    ov.querySelector('#vcan').onclick = () => { cancelled = true; try { rec.stop(); } catch (e) { } cleanup(); ov.remove(); };
    const finish = () => { if (rec.state !== 'inactive') rec.stop(); };
    rec.onstop = () => {
      cleanup(); if (cancelled) return;
      const type = mime.split(';')[0], ext = type === 'video/mp4' ? 'mp4' : 'webm', blob = new Blob(chunks, { type });
      const fn = t.n.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase().slice(0, 50) + '.' + ext;
      const file = new File([blob], fn, { type }), url = URL.createObjectURL(blob);
      ov.querySelector('#vti').textContent = '🎬 Vídeo listo'; ov.querySelector('#vst').textContent = `${(blob.size / 1048576).toFixed(1)} MB · ${ext.toUpperCase()}${ext === 'webm' ? ' (si WhatsApp no lo acepta, descárgalo y envíalo como documento)' : ''}`;
      ov.querySelector('.vprog').remove();
      ov.querySelector('#vout').innerHTML = `<video src="${url}" controls playsinline muted autoplay loop></video>`;
      const acts = ov.querySelector('#vacts');
      acts.innerHTML = `${navigator.canShare && navigator.canShare({ files: [file] }) ? '<button class="btn pri" id="vsh">📤 Compartir (WhatsApp…)</button>' : ''}<a class="btn" id="vdl" href="${url}" download="${fn}">⬇ Descargar</a><button class="btn ghost" id="vcl">Cerrar</button>`;
      if (ov.querySelector('#vsh')) ov.querySelector('#vsh').onclick = async () => { try { await navigator.share({ files: [file], title: t.n }); } catch (e) { } };
      ov.querySelector('#vcl').onclick = () => { ov.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); };
      ov.dataset.ready = '1';
    };
    paint(null); frame();
    await new Promise(r => setTimeout(r, 400));
    rec.start(250);
    setTimeout(() => {
      if (!live) return;
      ctl = animateField(host, DD(t), { autoplay: true, speed: .75, loop: false, react: true, onState: x => {
        st = x; cap = x.caption || cap; const bar = ov.querySelector('#vbar'); if (bar) bar.style.width = Math.round(100 * x.step / Math.max(1, x.total)) + '%';
        const vs = ov.querySelector('#vst'); if (vs && !fin) vs.textContent = `Paso ${x.step}/${x.total}`;
        if (x.done && !fin) { fin = true; setTimeout(finish, 1800); }
      } });
    }, 700);
    setTimeout(() => { if (!fin) { fin = true; finish(); } }, 90000);
  }

  // ---------- Utilidades de archivo ----------
  function dlJSON(obj, name) { const blob = new Blob([JSON.stringify(obj, null, 1)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); }
  const seasonStart = (d = new Date()) => new Date(d.getMonth() >= 7 ? d.getFullYear() : d.getFullYear() - 1, 8, 1);
  const TRIM = [{ k: 't1', n: '1.er trimestre', s: 'Septiembre – diciembre', m: [8, 12] }, { k: 't2', n: '2.º trimestre', s: 'Enero – marzo', m: [12, 15] }, { k: 't3', n: '3.er trimestre', s: 'Abril – junio', m: [15, 18] }];
  const trimRange = (tr, d) => { const y = seasonStart(d).getFullYear(); return [new Date(y, tr.m[0], 1), new Date(y, tr.m[1], 1)]; };

  // ---------- Metodología del club ----------
  const META_BASE = {
    P: { t1: ['tec', 'pos', 'fin'], t2: ['tec', 'fin', 'pos'], t3: ['pos', 'fin', 'tec'] },
    B: { t1: ['tec', 'pos', 'fin'], t2: ['fin', 'def', 'tec'], t3: ['pos', 'ban', 'tra'] },
    A: { t1: ['sal', 'pos', 'tec'], t2: ['ban', 'fin', 'def'], t3: ['pre', 'tra', 'abp'] },
    I: { t1: ['sal', 'pos', 'def'], t2: ['ban', 'fin', 'pre'], t3: ['tra', 'pre', 'abp'] },
    C: { t1: ['sal', 'pre', 'def'], t2: ['pos', 'ban', 'tra'], t3: ['fin', 'tra', 'abp'] },
    J: { t1: ['sal', 'pre', 'abp'], t2: ['pos', 'def', 'tra'], t3: ['fin', 'ban', 'abp'] },
    S: { t1: ['sal', 'pre', 'abp'], t2: ['pos', 'def', 'tra'], t3: ['fin', 'ban', 'abp'] }
  };
  let meto = store.get('meto', null);
  const saveMeto = () => store.set('meto', meto);
  const metoBase = () => { const c = {}; Object.entries(META_BASE).forEach(([e, v]) => { c[e] = {}; TRIM.forEach(tr => { const [a, b, s] = v[tr.k]; c[e][tr.k] = { a, b, s, obj: '' }; }); }); return c; };
  function vMeto() {
    if (!meto) meto = { club: '', autor: '', cats: {}, mi: fixEd(ses.ed) || defEd(), notas: '' };
    const M = meto, eds = ['P', 'B', 'A', 'I', 'C', 'J', 'S'];
    const sel = (v, k, e, t, empty) => `<select data-e="${e}" data-t="${t}" data-k="${k}"><option value="">${empty}</option>${Object.entries(PRIN).map(([p, x]) => `<option value="${p}" ${v === p ? 'selected' : ''}>${x.i} ${x.n}</option>`).join('')}</select>`;
    const filled = eds.filter(e => M.cats[e] && TRIM.some(tr => M.cats[e][tr.k] && M.cats[e][tr.k].a));
    $('#app').innerHTML = `<section class="meto">
      <h1>🏛 Metodología del club</h1>
      <p class="sub">Qué se trabaja en cada categoría y trimestre. Compártela con los entrenadores del club: al importarla, cada uno rellena con un toque los contenidos de su temporada.</p>
      <div class="mhd"><label>Club<input id="mclub" value="${esc(M.club)}" placeholder="Nombre del club"></label><label>Coordinador/a<input id="maut" value="${esc(M.autor)}" placeholder="Quién la firma"></label></div>
      ${!filled.length ? `<div class="hint">Empieza desde cero o carga una propuesta base (de la técnica en prebenjamín al juego completo en sénior) y ajústala a tu club. <button class="btn sm pri" id="mbase">Cargar propuesta base</button></div>` : ''}
      <div class="mtabs">${eds.map(e => `<button data-tab="${e}" class="${M.tab === e || (!M.tab && e === (M.mi || defEd())) ? 'on' : ''}">${ED[e]}${filled.includes(e) ? ' ✓' : ''}</button>`).join('')}</div>
      ${(() => {
        const e = M.tab || M.mi || defEd(); const c = M.cats[e] = M.cats[e] || {};
        return `<div class="mcat"><h2>${ED[e]}</h2>${TRIM.map(tr => { const x = c[tr.k] = c[tr.k] || { a: '', b: '', s: '', obj: '' }; return `<div class="mtr"><div class="mtt"><b>${tr.n}</b><small>${tr.s}</small></div>
          <div class="mts"><label>Contenido 1${sel(x.a, 'a', e, tr.k, '—')}</label><label>Contenido 2${sel(x.b, 'b', e, tr.k, '—')}</label><label>Secundario${sel(x.s, 's', e, tr.k, '—')}</label>
          <label class="w">Objetivos del trimestre<textarea data-e="${e}" data-t="${tr.k}" data-k="obj" rows="2" placeholder="Ej.: salir jugando desde el portero; defender juntos">${esc(x.obj || '')}</textarea></label></div></div>`; }).join('')}</div>`;
      })()}
      <label class="w mnot">Notas generales del club<textarea id="mnot" rows="3" placeholder="Estilo de juego, sistema de referencia, normas…">${esc(M.notas || '')}</textarea></label>
      <section class="mapl"><h2>Aplicar a mi temporada</h2>
        <div class="row wrap"><label>Mi categoría <select id="mmi">${eds.map(e => `<option value="${e}" ${M.mi === e ? 'selected' : ''}>${ED[e]}</option>`).join('')}</select></label><button class="btn pri" id="mapp">Rellenar mis contenidos</button></div>
        <p class="sub">Pone en «Temporada por contenidos» cada semana de la temporada ${seasonStart().getFullYear()}-${String(seasonStart().getFullYear() + 1).slice(2)}: alterna los dos contenidos del trimestre cada dos semanas, añade el secundario y sube la exigencia dentro de cada trimestre (fácil → media → difícil). Las semanas que ya tengas rellenas no se tocan.</p></section>
      <div class="acts"><button class="btn" id="mexp">⬇ Exportar para el club</button><label class="btn">⬆ Importar metodología<input type="file" id="mimp" accept=".json,application/json" hidden></label><a class="btn ghost" href="#/temporada">🎯 Ir a mis contenidos</a></div>
    </section>`;
    $('#app').querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { M.tab = b.dataset.tab; saveMeto(); vMeto(); });
    $('#app').querySelectorAll('[data-e]').forEach(el => el.onchange = () => { const c = M.cats[el.dataset.e][el.dataset.t]; c[el.dataset.k] = el.value; saveMeto(); if (el.tagName === 'SELECT') setTimeout(vMeto, 0); });
    $('#mclub').onchange = e => { M.club = e.target.value.trim(); saveMeto(); };
    $('#maut').onchange = e => { M.autor = e.target.value.trim(); saveMeto(); };
    $('#mnot').onchange = e => { M.notas = e.target.value; saveMeto(); };
    $('#mmi').onchange = e => { M.mi = e.target.value; saveMeto(); };
    if ($('#mbase')) $('#mbase').onclick = () => { M.cats = metoBase(); saveMeto(); vMeto(); toast('Propuesta base cargada: ajústala a tu club'); };
    $('#mapp').onclick = () => {
      const e = M.mi, c = M.cats[e]; if (!c || !TRIM.some(tr => c[tr.k] && c[tr.k].a)) { toast(`${ED[e]} no tiene contenidos todavía`); return; }
      let n = 0;
      TRIM.forEach(tr => {
        const x = c[tr.k]; if (!x || !x.a) return; const [d0, d1] = trimRange(tr);
        const weeks = []; for (let m = monday(d0); m < d1; m = addDays(m, 7)) weeks.push(m);
        weeks.forEach((m, i) => { const k = iso(m); if (cont[k] && cont[k].p) return; const p = x.b && Math.floor(i / 2) % 2 ? x.b : x.a; cont[k] = { p, s: x.s || (p === x.a ? x.b : x.a) || '', niv: Math.min(3, 1 + Math.floor(3 * i / weeks.length)), nota: x.obj ? x.obj.slice(0, 80) : '' }; n++; });
      });
      saveCont(); toast(n ? `${n} semanas rellenadas con la metodología` : 'Todas las semanas ya tenían contenido');
    };
    $('#mexp').onclick = () => dlJSON({ app: 'My Coach', tipo: 'metodologia', version: 1, fecha: new Date().toISOString(), meto: { club: M.club, autor: M.autor, cats: M.cats, notas: M.notas } }, `metodologia-${nz(M.club || 'club').replace(/[^a-z0-9]+/g, '-')}.json`);
    $('#mimp').onchange = async ev => {
      const f = ev.target.files[0]; if (!f) return;
      try { const j = JSON.parse(await f.text()); if (!j || j.tipo !== 'metodologia' || !j.meto || !j.meto.cats) throw 0;
        if (filled.length && !confirm(`Se sustituirá tu metodología por la de ${j.meto.club || 'este archivo'}${j.meto.autor ? ' (' + j.meto.autor + ')' : ''}. ¿Continuar?`)) return;
        meto = { ...j.meto, mi: M.mi, tab: null }; saveMeto(); vMeto(); toast('Metodología importada. Elige tu categoría y pulsa «Rellenar mis contenidos».');
      } catch (e) { toast('El archivo no es una metodología de My Coach'); }
    };
  }

  // ---------- Preparar el partido ----------
  const SIS11 = {
    '1-4-4-2': [[3, 34], [16, 10], [14, 26], [14, 42], [16, 58], [32, 12], [30, 28], [30, 40], [32, 56], [46, 28], [46, 40]],
    '1-4-3-3': [[3, 34], [16, 10], [14, 26], [14, 42], [16, 58], [28, 34], [35, 21], [35, 47], [48, 12], [50, 34], [48, 56]],
    '1-4-2-3-1': [[3, 34], [16, 10], [14, 26], [14, 42], [16, 58], [28, 27], [28, 41], [41, 13], [42, 34], [41, 55], [52, 34]],
    '1-4-1-4-1': [[3, 34], [16, 10], [14, 26], [14, 42], [16, 58], [25, 34], [38, 12], [36, 27], [36, 41], [38, 56], [50, 34]],
    '1-5-3-2': [[3, 34], [19, 7], [14, 22], [13, 34], [14, 46], [19, 61], [30, 22], [28, 34], [30, 46], [46, 28], [46, 40]],
    '1-3-5-2': [[3, 34], [14, 22], [13, 34], [14, 46], [34, 7], [29, 24], [27, 34], [29, 44], [34, 61], [46, 28], [46, 40]]
  };
  const SIS7 = {
    '1-3-3': [[2, 20], [10, 7], [9, 20], [10, 33], [24, 7], [26, 20], [24, 33]],
    '1-2-3-1': [[2, 20], [9, 13], [9, 27], [18, 6], [18, 20], [18, 34], [28, 20]],
    '1-3-2-1': [[2, 20], [9, 8], [8, 20], [9, 32], [18, 14], [18, 26], [27, 20]],
    '1-2-1-2-1': [[2, 20], [9, 13], [9, 27], [15, 20], [21, 9], [21, 31], [28, 20]]
  };
  window.MC_SIS = { 11: SIS11, 7: SIS7 };
  const RV = {
    pres: { alta: 'Presiona alto', media: 'Bloque medio', baja: 'Espera atrás (bloque bajo)' },
    est: { comb: 'Combinativo', dir: 'Juego directo', con: 'Al contraataque' },
    fu: { bandas: 'Ataque por bandas', aereo: 'Juego aéreo', abp: 'Balón parado', trans: 'Transiciones rápidas', delantero: 'Delantero referencia', medio: 'Medio campo', presion: 'Presión tras pérdida', tiro: 'Tiro lejano' },
    de: { espalda: 'Espalda de la defensa', salida: 'Salida de balón', tdef: 'Repliegue tras pérdida', abpd: 'Defensa del balón parado', lat: 'Laterales / bandas', centro: 'Pasillo central', fisico: 'Se cansa al final', aereod: 'Defensa aérea' }
  };
  let rivals = store.get('rivals', {});
  const saveRivals = () => store.set('rivals', rivals);
  // Qué principios conviene trabajar según el rival
  function rivalKeys(r) {
    const sc = {}, why = {}, add = (p, v, txt) => { sc[p] = (sc[p] || 0) + v; (why[p] = why[p] || []).push(txt); };
    if (r.pres === 'alta') { add('sal', 3, 'presiona alto: hay que salir jugando con calma'); add('tra', 1, 'si superamos su presión, habrá espacio a su espalda'); }
    if (r.pres === 'baja') { add('pos', 2, 'espera atrás: paciencia con balón'); add('ban', 2, 'abrir el campo para desordenar su bloque'); add('fin', 1, 'llegar al área con gente'); }
    if (r.pres === 'media') add('pos', 1, 'bloque medio: atraer y progresar');
    if (r.est === 'dir') { add('def', 2, 'juego directo: ganar el primer y segundo balón'); add('abp', 1, 'muchos balones parados'); }
    if (r.est === 'con') { add('tra', 3, 'contraataca: reacción tras pérdida y vigilancias'); add('pre', 1, 'presionar tras pérdida para que no salga'); }
    if (r.est === 'comb') { add('pre', 2, 'combina: presionar para que no se sienta cómodo'); add('def', 1, 'defender juntos y cerrar pasillos interiores'); }
    const F = r.fu || [], D = r.de || [];
    if (F.includes('bandas')) add('def', 2, 'ataca por bandas: basculación y ayudas');
    if (F.includes('aereo') || F.includes('delantero')) add('def', 1, 'juego aéreo y delantero referencia: marcajes y segundas jugadas');
    if (F.includes('abp')) add('abp', 3, 'peligro a balón parado: preparar marcajes');
    if (F.includes('trans') || F.includes('presion')) add('tra', 2, 'son rápidos en transición');
    if (F.includes('medio')) add('pre', 1, 'mandan en el medio: presión coordinada');
    if (F.includes('tiro')) add('def', 1, 'tiran de lejos: no dejar recibir de cara');
    if (D.includes('espalda')) add('fin', 2, 'sufren a la espalda: desmarques de ruptura'), add('tra', 1, 'contraataques rápidos');
    if (D.includes('salida')) add('pre', 3, 'les cuesta salir: presión alta');
    if (D.includes('tdef')) add('tra', 2, 'tardan en replegar: atacar rápido tras robo');
    if (D.includes('abpd')) add('abp', 2, 'defienden mal el balón parado: jugadas ensayadas');
    if (D.includes('lat')) add('ban', 3, 'sus bandas son débiles: atacar por fuera');
    if (D.includes('centro')) add('pos', 2, 'pasillo central abierto: juego interior');
    if (D.includes('fisico')) add('pre', 1, 'se cansan: mantener la intensidad hasta el final');
    if (D.includes('aereod')) add('fin', 1, 'defienden mal por arriba: centros al área'), add('abp', 1, 'córners y faltas laterales');
    return Object.keys(sc).sort((a, b) => sc[b] - sc[a]).map(p => ({ p, v: sc[p], why: why[p] }));
  }
  function rivalDays(r) {
    const mds = MODE === 'f7' ? ['MD-4', 'MD-2'] : ['MD-4', 'MD-3', 'MD-2', 'MD-1'], d = parseISO(r.f);
    return mds.map(m => ({ md: m, f: iso(addDays(d, -(+m.slice(3)))) }));
  }
  function rivalPropose(r) {
    const keys = rivalKeys(r).map(x => x.p), k0 = keys[0] || 'pos', k1 = keys[1] || k0, k2 = keys[2] || k1;
    const pick = { 'MD-4': { p: k0, s: k1 }, 'MD-3': { p: k0, s: k2 }, 'MD-2': { p: k1, s: k0 }, 'MD-1': { p: keys.includes('abp') ? 'abp' : k2, s: k0 } };
    if (MODE === 'f7') { pick['MD-4'] = { p: k0, s: k1 }; pick['MD-2'] = { p: k1, s: keys.includes('abp') ? 'abp' : k2 }; }
    r.prop = {}; rivalDays(r).forEach(x => { r.prop[x.md] = genSession({ md: x.md, min: MODE === 'f7' ? 75 : x.md === 'MD-1' ? 60 : ses.min || 90, gk: ses.gk, ed: ses.ed, nj: ses.nj, pf: pick[x.md] }); });
  }
  function planTaskFor(r) {
    const own7 = MODE === 'f7', S = own7 ? SIS7 : SIS11, L = own7 ? 60 : 105, W = own7 ? 40 : 68;
    const us = S[r.nos] || Object.values(S)[0], them = S[r.sis] || Object.values(S)[0];
    const p = [...us.map(([x, y], i) => i ? A(x, y, String(i + 1)) : P(x, y)), ...them.map(([x, y], i) => i ? B(L - x, W - y) : ['P', L - x, W - y])];
    return { n: `Plan de partido vs ${r.rival || 'rival'}`, cat: 'tt', tipo: 'Plan de partido', md: ['MD-1'], int: 1, rpe: '2', carga: 'Activación', fase: 'pri', dif: 2, ed: own7 ? 'PBA' : 'ICJS', jug: own7 ? '7v7' : '11v11', np: own7 ? 14 : 22, esp: [L, W], ser: 'Charla', rec: '—', dur: 10, obj: 'Explicar el plan del partido.', desc: [r.notas, r.pa ? 'Con balón: ' + r.pa : '', r.pd ? 'Sin balón: ' + r.pd : ''].filter(Boolean).join('\n'), reglas: [], cons: rivalKeys(r).slice(0, 3).map(x => `${PRIN[x.p].n}: ${x.why[0]}`), var: [], d: { f7: own7 || undefined, v: own7 ? [-3, -3, 66, 46] : [-4, -4, 113, 76], p } };
  }
  let rivPend = null;
  function vPartido(f) {
    const today = iso(new Date());
    const upcoming = Object.keys(plan).filter(k => plan[k].k === 'match' && k >= today).sort().slice(0, 6);
    const all = [...new Set([...upcoming, ...Object.keys(rivals).filter(k => k >= iso(addDays(new Date(), -21)))])].sort();
    if (!f) f = all.find(k => k >= today) || all[all.length - 1] || null;
    const S = MODE === 'f7' ? SIS7 : SIS11;
    const r = f ? (rivals[f] = rivals[f] || { f, rival: ((plan[f] || {}).name || '').replace(/^Partido( vs )?/, ''), sis: Object.keys(S)[0], nos: Object.keys(S)[0], fu: [], de: [] }) : null;
    if (r && !S[r.sis]) r.sis = Object.keys(S)[0]; if (r && !S[r.nos]) r.nos = Object.keys(S)[0];
    const fmt = k => { const d = parseISO(k); return `${DN[(d.getDay() + 6) % 7]} ${d.getDate()} ${MN[d.getMonth()]}`; };
    const chips = (g, obj, cur, multi) => Object.entries(obj).map(([k, v]) => `<button class="chip ${(multi ? (cur || []).includes(k) : cur === k) ? 'on' : ''}" data-g="${g}" data-v="${k}" data-m="${multi ? 1 : ''}">${v}</button>`).join('');
    if (r && !r.prop) rivalPropose(r);
    const keys = r ? rivalKeys(r) : [];
    const ptask = r && r.tid ? byId[r.tid] : null;
    $('#app').innerHTML = `<section class="riv">
      <h1>⚔️ Preparar el partido</h1>
      <div class="row wrap rsel">${all.map(k => `<a class="chip ${k === f ? 'on' : ''}" href="#/partido/${k}">${fmt(k)}${rivals[k] && rivals[k].rival ? ' · ' + esc(rivals[k].rival) : (plan[k] && plan[k].name ? ' · ' + esc(plan[k].name.replace(/^Partido( vs )?/, '')) : '')}</a>`).join('')}<label class="chip">＋ Otro partido <input type="date" id="rnew"></label></div>
      ${!r ? '<div class="empty">No hay partidos próximos en el plan. Marca uno en «Plan» o elige la fecha arriba.</div>' : `
      <div class="aq two"><label><b>Rival</b><input id="rname" value="${esc(r.rival || '')}" placeholder="Nombre del rival"></label><label><b>Su sistema</b><select id="rsis">${Object.keys(S).map(k => `<option ${r.sis === k ? 'selected' : ''}>${k}</option>`).join('')}</select></label><label><b>Nuestro sistema</b><select id="rnos">${Object.keys(S).map(k => `<option ${r.nos === k ? 'selected' : ''}>${k}</option>`).join('')}</select></label></div>
      <div class="aq"><b>Sin balón, el rival…</b><div class="row wrap">${chips('pres', RV.pres, r.pres)}</div></div>
      <div class="aq"><b>Con balón, juega…</b><div class="row wrap">${chips('est', RV.est, r.est)}</div></div>
      <div class="aq"><b>Sus puntos fuertes</b><div class="row wrap">${chips('fu', RV.fu, r.fu, 1)}</div></div>
      <div class="aq"><b>Sus puntos débiles</b><div class="row wrap">${chips('de', RV.de, r.de, 1)}</div></div>
      <div class="aq"><label class="w"><b>Notas del rival</b><textarea id="rnot" rows="2" placeholder="Jugadores clave, cómo sacan de portería, resultado de la ida…">${esc(r.notas || '')}</textarea></label></div>
      <section class="rkeys"><h2>Claves del partido</h2>${keys.length ? keys.slice(0, 4).map((x, i) => `<div class="rk"><span class="ri">${i + 1}</span><div><b>${PRIN[x.p].i} ${PRIN[x.p].n}</b><small>${x.why.map(esc).join(' · ')}</small></div></div>`).join('') : '<p class="sub">Marca cómo juega el rival y aquí verás qué conviene trabajar.</p>'}</section>
      <section class="rweek"><h2>Semana propuesta</h2><p class="sub">Sesiones de ${MODE === 'f7' ? 'MD-4 y MD-2' : 'MD-4 a MD-1'} centradas en esas claves.</p>
        ${rivalDays(r).map(x => { const its = (r.prop[x.md] || []).map(i => byId[i.id]).filter(Boolean); const e = plan[x.f]; return `<div class="rday"><div class="rdh"><b>${x.md}</b><small>${fmt(x.f)}${e && e.k === 'ses' ? ' · ya tiene «' + esc(e.name) + '»' : ''}</small></div><div class="rdi">${its.filter(t => t.fase === 'pri' && t.cat !== 'por').map(t => `<a href="#/t/${t.id}">${esc(t.n)}</a>`).join('') || '<span class="sub">Sin tareas</span>'}</div></div>`; }).join('')}
        <div class="acts"><button class="btn pri" id="rapp">📅 Pasar al plan</button><button class="btn ghost" id="rgen">⟳ Otra propuesta</button></div></section>
      <section class="rplan"><h2>Plan y balón parado</h2>
        <div class="aq two"><label class="w"><b>Con balón</b><textarea id="rpa" rows="2" placeholder="Ej.: salir por fuera, atacar la espalda de su lateral">${esc(r.pa || '')}</textarea></label><label class="w"><b>Sin balón</b><textarea id="rpd" rows="2" placeholder="Ej.: bloque medio, presión cuando el central recibe de espaldas">${esc(r.pd || '')}</textarea></label></div>
        <div class="aq"><label class="w"><b>Balón parado</b><textarea id="rabp" rows="2" placeholder="Nuestros córners: jugada 2. Defensa: zonal + 2 marcajes al 9 y al 4">${esc(r.abp || '')}</textarea></label></div>
        <div class="rpb">${ptask ? `<a href="#/t/${ptask.id}" class="thumb">${drawField(DD(ptask), { mini: true })}</a>` : ''}<div class="acts">
          <button class="btn" id="rdraw">✏ ${ptask ? 'Editar' : 'Dibujar'} la pizarra del partido</button>
          <button class="btn pri" id="rvest">📺 Explicarlo en el vestuario</button></div></div>
        <p class="sub">La pizarra empieza con los dos sistemas colocados. En el modo vestuario salen la pizarra y las jugadas de balón parado.</p></section>`}
    </section>`;
    $('#rnew').onchange = e => { if (e.target.value) location.hash = '#/partido/' + e.target.value; };
    if (!r) return;
    const save = (re) => { saveRivals(); if (re) setTimeout(() => vPartido(f), 0); };
    $('#app').querySelectorAll('.chip[data-g]').forEach(b => b.onclick = () => {
      const g = b.dataset.g, v = b.dataset.v;
      if (b.dataset.m) { r[g] = (r[g] || []).includes(v) ? r[g].filter(x => x !== v) : [...(r[g] || []), v]; } else r[g] = r[g] === v ? null : v;
      rivalPropose(r); save(true);
    });
    $('#rname').onchange = e => { r.rival = e.target.value.trim(); save(); };
    $('#rsis').onchange = e => { r.sis = e.target.value; save(); };
    $('#rnos').onchange = e => { r.nos = e.target.value; save(); };
    $('#rnot').onchange = e => { r.notas = e.target.value; save(); };
    $('#rpa').onchange = e => { r.pa = e.target.value; save(); };
    $('#rpd').onchange = e => { r.pd = e.target.value; save(); };
    $('#rabp').onchange = e => { r.abp = e.target.value; save(); };
    $('#rgen').onclick = () => { rivalPropose(r); save(true); };
    $('#rapp').onclick = () => {
      const days = rivalDays(r), busy = days.filter(x => plan[x.f] && plan[x.f].k === 'ses');
      if (busy.length && !confirm(`${busy.length} de esos días ya tienen sesión. ¿Sustituirlas por la propuesta para el partido?`)) return;
      days.forEach(x => { const items = r.prop[x.md] || []; if (!items.length) return; const old = plan[x.f] || {}; plan[x.f] = { k: 'ses', name: `${x.md} vs ${r.rival || 'rival'}`, md: x.md, items: JSON.parse(JSON.stringify(items)), ...sesTot(items, ses.ed) }; if (old.realSrc) Object.assign(plan[x.f], { realMin: old.realMin, realEj: old.realEj, realSrc: old.realSrc }); });
      if (!plan[f] || plan[f].k !== 'match') plan[f] = { k: 'match', name: 'Partido vs ' + (r.rival || 'rival'), min: MODE === 'f7' ? 60 : 90, rpe: 8 };
      else if (r.rival && !/vs/.test(plan[f].name || '')) plan[f].name = 'Partido vs ' + r.rival;
      savePlan(); planWk = Math.round((monday(parseISO(f)) - monday(new Date())) / 6048e5); toast('Semana del partido en el plan'); location.hash = '#/plan';
    };
    $('#rdraw').onclick = () => { rivPend = f; location.hash = r.tid && byId[r.tid] ? '#/editar/' + r.tid : '#/nueva'; };
    $('#rvest').onclick = () => { location.hash = '#/pizarra/r/' + f; };
  }
  // Lista para el modo vestuario de un partido: pizarra del plan + jugadas de balón parado
  function rivalSlides(f) {
    const r = rivals[f]; if (!r) return [];
    const out = []; if (r.tid && byId[r.tid]) out.push({ id: r.tid, b: 'pri' });
    const abp = TAREAS.filter(t => vis(t) && t.fase === 'pri' && prinOf(t).includes('abp') && edFit(t, fixEd(ses.ed))).sort((x, y) => isF7t(y) - isF7t(x)).slice(0, 3);
    abp.forEach(t => out.push({ id: t.id, b: 'pri' }));
    rivalKeys(r).slice(0, 2).forEach(k => { const t = ((r.prop && r.prop['MD-1']) || []).map(i => byId[i.id]).find(t => t && t.fase === 'pri' && prinOf(t).includes(k.p)); if (t && !out.some(o => o.id === t.id)) out.push({ id: t.id, b: 'pri' }); });
    return out;
  }

  // ---------- Evaluación de tareas (aprende qué funciona con tu equipo) ----------
  let evals = store.get('evals', {});
  const saveEvals = () => store.set('evals', evals);
  const EV = {
    ok: { n: '¿Funcionó?', o: [[2, '👍 Sí'], [1, '😐 Regular'], [0, '👎 No']] },
    ex: { n: 'Exigencia', o: [[-1, 'Fácil'], [0, 'Justa'], [1, 'Difícil']] },
    im: { n: 'Implicación', o: [[0, 'Baja'], [1, 'Media'], [2, 'Alta']] }
  };
  function evalSum(id) {
    const l = (evals[id] || []).slice(-6); if (!l.length) return null;
    const avg = k => { const v = l.filter(x => x[k] != null).map(x => x[k]); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; };
    return { n: (evals[id] || []).length, ok: avg('ok'), ex: avg('ex'), im: avg('im'), last: l[l.length - 1].f };
  }
  // Bonus para el generador: más probabilidad a lo que funciona e implica
  function evalBonus(t) {
    const s = evalSum(t.id); if (!s) return 0;
    return (s.ok != null ? (s.ok - 1) * 1.6 : 0) + (s.im != null ? (s.im - 1) * .8 : 0);
  }
  function evalBadge(t) { const s = evalSum(t.id); if (!s || s.ok == null) return ''; return `<span class="evb ${s.ok >= 1.5 ? 'g' : s.ok < .8 ? 'r' : ''}" title="Tu valoración">${s.ok >= 1.5 ? '👍' : s.ok < .8 ? '👎' : '😐'}${s.n > 1 ? s.n : ''}</span>`; }
  function evalText(t) {
    const s = evalSum(t.id); if (!s) return '';
    const okT = s.ok == null ? '' : s.ok >= 1.5 ? 'funciona bien' : s.ok >= .8 ? 'funciona a medias' : 'no está funcionando';
    const exT = s.ex == null ? '' : s.ex <= -.5 ? 'se queda fácil' : s.ex >= .5 ? 'resulta difícil' : 'exigencia justa';
    const imT = s.im == null ? '' : s.im >= 1.5 ? 'implicación alta' : s.im < .8 ? 'implicación baja' : 'implicación media';
    const l = ladder(t), nx = s.ex != null && s.ex <= -.5 ? l[t.dif] : s.ex != null && s.ex >= .5 ? l[t.dif - 2] : null;
    return `<div class="evs"><b>Tu equipo:</b> ${[okT, exT, imT].filter(Boolean).join(' · ')} <small>(${s.n} valoración${s.n > 1 ? 'es' : ''})</small>${nx ? `<a class="link" href="#/t/${nx.id}">${s.ex < 0 ? '⬆ Prueba la versión más difícil' : '⬇ Prueba la versión más sencilla'}: ${esc(nx.n)}</a>` : ''}</div>`;
  }
  const evalForm = (id, cur) => Object.entries(EV).map(([k, e]) => `<div class="evr"><span>${e.n}</span>${e.o.map(([v, l]) => `<button type="button" class="chip ${cur && cur[k] === v ? 'on' : ''}" data-ev="${id}" data-k="${k}" data-v="${v}">${l}</button>`).join('')}</div>`).join('');
  // Guarda (o corrige) la valoración de hoy de una tarea
  function setEval(id, k, v) {
    const today = iso(new Date()), l = evals[id] = evals[id] || [];
    let e = l.find(x => x.f === today); if (!e) { e = { f: today, ed: fixEd(ses.ed) }; l.push(e); }
    e[k] = e[k] === v ? null : v; if (e.ok == null && e.ex == null && e.im == null) l.splice(l.indexOf(e), 1);
    if (!l.length) delete evals[id]; saveEvals();
  }
  const todayEval = id => (evals[id] || []).find(x => x.f === iso(new Date())) || null;
  function bindEval(root, after) { root.querySelectorAll('[data-ev]').forEach(b => b.onclick = () => { setEval(b.dataset.ev, b.dataset.k, +b.dataset.v); const cur = todayEval(b.dataset.ev); b.parentNode.querySelectorAll('[data-ev]').forEach(x => x.classList.toggle('on', !!cur && cur[x.dataset.k] === +x.dataset.v)); if (after) after(b.dataset.ev); }); }
  function vValorar() {
    const its = ses.items.map(x => byId[x.id] ? { ...x, t: byId[x.id] } : null).filter(x => x && x.b !== 'cal' && x.b !== 'vc' || (x && x.t.cat === 'jue'));
    const all = ses.items.map(x => byId[x.id] ? { ...x, t: byId[x.id] } : null).filter(Boolean);
    const list = its.length ? its : all;
    $('#app').innerHTML = `<section class="valo"><h1>⭐ Valorar las tareas de hoy</h1>
      <p class="sub">Tres toques por tarea. Con el tiempo, el generador y el asistente te propondrán más las tareas que funcionan con tu equipo, y te avisará cuando una se quede fácil.</p>
      ${!list.length ? '<div class="empty">La sesión está vacía.</div>' : list.map(x => `<div class="evc"><div class="evh"><a href="#/t/${x.t.id}" class="thumb s">${drawField(DD(x.t), { mini: true })}</a><div><small>${BLK[x.b]}</small><b>${esc(x.t.n)}</b></div></div>${evalForm(x.t.id, todayEval(x.t.id))}</div>`).join('')}
      <div class="acts"><a class="btn pri" href="#/sesion">✓ Hecho</a></div></section>`;
    bindEval($('#app'));
  }

  // ---------- Ficha de sesión en PDF ----------
  let club = store.get('club', { name: '', team: '', coach: '', logo: '' });
  const saveClub = () => store.set('club', club);
  async function logoFrom(file) {
    const url = URL.createObjectURL(file), img = new Image(); img.src = url; await img.decode();
    const s = Math.min(1, 240 / Math.max(img.width, img.height)), c = document.createElement('canvas'); c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url); return c.toDataURL('image/png');
  }
  function pdfDialog(its) {
    if (!club.name && meto && meto.club) club.name = meto.club;
    const ov = document.createElement('div'); ov.className = 'vidov';
    ov.innerHTML = `<div class="vidbox pdfbox"><b>📄 Ficha de la sesión</b>
      <div class="pdfl">${club.logo ? `<img src="${club.logo}" alt="Escudo">` : '<span class="nologo">Escudo</span>'}<label class="btn sm">${club.logo ? 'Cambiar escudo' : 'Añadir escudo'}<input type="file" id="plogo" accept="image/*" hidden></label>${club.logo ? '<button class="link" id="pnolog">Quitar</button>' : ''}</div>
      <label>Club<input id="pclub" value="${esc(club.name)}" placeholder="Nombre del club"></label>
      <label>Equipo<input id="pteam" value="${esc(club.team)}" placeholder="Ej.: Juvenil A"></label>
      <label>Entrenador / preparador<input id="pcoach" value="${esc(club.coach)}"></label>
      <label>Fecha<input id="pdate" type="date" value="${iso(new Date())}"></label>
      <label class="chk"><input type="checkbox" id="pcons" checked> Incluir consignas y reglas</label>
      <p class="sub">Se abre la ventana de imprimir: elige <b>Guardar como PDF</b> para enviarla o déjala en el vestuario.</p>
      <div class="acts"><button class="btn pri" id="pgo">Generar PDF</button><button class="btn ghost" id="pcan">Cancelar</button></div></div>`;
    document.body.appendChild(ov);
    const rd = () => { club.name = ov.querySelector('#pclub').value.trim(); club.team = ov.querySelector('#pteam').value.trim(); club.coach = ov.querySelector('#pcoach').value.trim(); saveClub(); };
    ov.querySelector('#plogo').onchange = async e => { const f = e.target.files[0]; if (!f) return; try { rd(); club.logo = await logoFrom(f); saveClub(); ov.remove(); pdfDialog(its); } catch (err) { toast('No se pudo leer la imagen'); } };
    if (ov.querySelector('#pnolog')) ov.querySelector('#pnolog').onclick = () => { rd(); club.logo = ''; saveClub(); ov.remove(); pdfDialog(its); };
    ov.querySelector('#pcan').onclick = () => ov.remove();
    ov.querySelector('#pgo').onclick = () => { rd(); const f = ov.querySelector('#pdate').value, cons = ov.querySelector('#pcons').checked; ov.remove(); printSes(its, { f, cons }); };
  }
  function printSes(its, o = {}) {
    let pr = $('#printv'); if (!pr) { pr = document.createElement('div'); pr.id = 'printv'; document.body.appendChild(pr); }
    const D = t => adjDur(t, ses.ed), field = its.filter(x => x.b !== 'por');
    const tot = field.reduce((a, x) => a + D(x.t), 0), ua = Math.round(field.reduce((a, x) => a + D(x.t) * rpeMid(x.t.rpe), 0));
    const fd = o.f ? parseISO(o.f) : new Date(), wc = contOf(fd);
    const matN = {}; its.forEach(x => mats(x.t).forEach(m => { (matN[m] = matN[m] || []).push(x.t); }));
    const nCon = its.reduce((a, x) => Math.max(a, ((DD(x.t) || {}).c || []).length), 0);
    const li = a => a && a.length ? `<ul>${a.slice(0, 2).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
    const card = (x, k) => { const t = x.t, f = fitInfo(t, ses.nj, ses.ed), sp = f ? `${f.w}x${f.h}` : t.esp && t.esp[0] ? `${t.esp[0]}x${t.esp[1]}` : '';
      return `<article class="pt"><div class="pd">${drawField(DD(t))}</div><div class="pi"><p class="pbk">${BLK[x.b]}</p><h3><span class="pn">${k}</span>${esc(t.n)}</h3>
        <p class="pm"><b style="color:${INT[t.int].c}">● ${INT[t.int].n}</b> · <b>${D(t)}'</b> · ${esc(t.ser)}${t.rec && t.rec !== '—' ? ' · rec. ' + esc(t.rec) : ''}</p>
        <p class="pm">👥 ${esc(f ? f.jug : t.jug)}${sp ? ' · 📐 ' + sp + ' m' : ''}</p>
        ${t.obj ? `<p class="po"><b>Objetivo:</b> ${esc(t.obj)}</p>` : ''}
        ${o.cons !== false ? `${t.reglas && t.reglas.length ? `<p class="pl">Reglas</p>${li(t.reglas)}` : ''}${t.cons && t.cons.length ? `<p class="pl">Consignas</p>${li(t.cons)}` : ''}` : ''}</div></article>`; };
    let k = 0;
    pr.innerHTML = `<header class="ph">${club.logo ? `<img class="plg" src="${club.logo}" alt="">` : ''}<div class="pht"><small>${esc(club.name || 'Sesión de entrenamiento')}${club.team ? ' · ' + esc(club.team) : ''}</small>
        <h1>Sesión ${ses.md} · ${MDINFO[ses.md].t}</h1><p>${fd.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}${club.coach ? ' · ' + esc(club.coach) : ''}${fixEd(ses.ed) ? ' · ' + ED[fixEd(ses.ed)] : ''}${ses.nj ? ' · ' + ses.nj + ' jugadores' : ''}</p></div>
        <div class="pk"><b>${tot}'</b><span>${ua} UA estimadas</span><span>${its.length} tareas</span></div></header>
      <div class="pbar">${wc && wc.p ? `<span>🎯 <b>${PRIN[wc.p].n}</b>${wc.s ? ' + ' + PRIN[wc.s].n : ''}</span>` : ''}<span>${esc(MDINFO[ses.md].obj)}</span></div>
      <div class="pmat"><b>Material:</b> ${Object.keys(matN).length ? Object.keys(matN).map(m => `${MAT[m]}${m === 'conos' && nCon ? ' (≈' + nCon + ')' : ''}`).join(' · ') : 'balones y petos'} · balones · petos</div>
      <div class="pg">${Object.keys(BLK).flatMap(b => its.filter(x => x.b === b)).map(x => card(x, ++k)).join('')}</div>
      <div class="pobs"><b>Observaciones:</b></div>
      <p class="pf2">${esc(club.name || '')}${club.name ? ' · ' : ''}Hecho con My Coach</p>`;
    document.body.classList.add('printing');
    const off = () => { document.body.classList.remove('printing'); window.removeEventListener('afterprint', off); };
    window.addEventListener('afterprint', off);
    const prevT = document.title; document.title = `Sesion-${ses.md}-${o.f || iso(new Date())}`;
    setTimeout(() => { window.print(); setTimeout(() => { off(); document.title = prevT; }, 1000); }, 80);
  }

  // ---------- Calendario de contenidos (vista de temporada) ----------
  const PCOL = { sal: '#0ea5e9', pos: '#22c55e', ban: '#14b8a6', fin: '#ef4444', tra: '#f59e0b', pre: '#f97316', def: '#3b82f6', abp: '#a855f7', tec: '#84cc16' };
  function weekWork(mon) {
    const r = {}; for (let i = 0; i < 7; i++) { const e = plan[iso(addDays(mon, i))]; if (!e || e.k !== 'ses') continue; (e.items || []).forEach(x => { const t = byId[x.id]; if (!t || t.fase !== 'pri') return; const pr = prinOf(t); pr.forEach(p => { r[p] = (r[p] || 0) + adjDur(t, ses.ed) / pr.length; }); }); }
    return r;
  }
  function calHTML() {
    const s0 = monday(seasonStart()), end = new Date(seasonStart().getFullYear() + 1, 5, 30), cur = iso(monday(new Date()));
    const weeks = []; for (let m = s0; m <= end; m = addDays(m, 7)) weeks.push(m);
    const cntP = {}, cntS = {}, mins = {}, lastW = {};
    weeks.forEach((m, i) => { const c = cont[iso(m)] || {}; if (c.p) { cntP[c.p] = (cntP[c.p] || 0) + 1; lastW[c.p] = i; } if (c.s) { cntS[c.s] = (cntS[c.s] || 0) + 1; lastW[c.s] = Math.max(lastW[c.s] ?? -1, i); } const w = weekWork(m); Object.entries(w).forEach(([p, v]) => mins[p] = (mins[p] || 0) + v); });
    const ci = weeks.findIndex(m => iso(m) === cur), done = Math.max(0, ci);
    const byMonth = []; weeks.forEach(m => { const k = m.getFullYear() * 12 + m.getMonth(); let g = byMonth[byMonth.length - 1]; if (!g || g.k !== k) byMonth.push(g = { k, m, w: [] }); g.w.push(m); });
    const maxM = Math.max(1, ...Object.values(mins));
    const warn = Object.keys(PRIN).filter(p => p !== 'tec' || ['P', 'B', 'A'].includes(fixEd(ses.ed))).map(p => ({ p, gap: lastW[p] == null ? null : ci - lastW[p] })).filter(x => ci >= 0 && (x.gap == null ? done > 6 : x.gap > 6));
    return `<div class="cal">${byMonth.map(g => `<div class="cm"><small>${MN[g.m.getMonth()]}</small><div class="cw">${g.w.map(m => { const k = iso(m), c = cont[k] || {}, w = weekWork(m), top = Object.entries(w).sort((a, b) => b[1] - a[1])[0];
        return `<button class="cc ${k === cur ? 'now' : ''} ${c.p ? '' : 'empty'}" data-wk="${k}" title="${m.getDate()} ${MN[m.getMonth()]}${c.p ? ': ' + PRIN[c.p].n + (c.s ? ' + ' + PRIN[c.s].n : '') : ''}${top ? ' · más trabajado: ' + PRIN[top[0]].n : ''}" style="${c.p ? `--a:${PCOL[c.p]};--b:${PCOL[c.s] || PCOL[c.p]}` : ''}">${c.niv ? `<i>${c.niv}</i>` : ''}${top ? `<u style="background:${PCOL[top[0]]}"></u>` : ''}</button>`; }).join('')}</div></div>`).join('')}</div>
      <p class="sub">Cada cuadro es una semana: color de arriba = contenido principal, abajo = secundario; el número es el nivel; la rayita, lo más trabajado en las sesiones del plan. Toca una semana para editarla.</p>
      ${warn.length ? `<div class="calw">⚠ ${warn.map(x => `<b>${PRIN[x.p].n}</b> ${x.gap == null ? 'sin trabajar en toda la temporada' : `lleva ${x.gap} semanas sin aparecer`}`).join(' · ')}</div>` : ''}
      <div class="cleg">${Object.entries(PRIN).map(([p, x]) => `<div class="cl"><span class="sq" style="background:${PCOL[p]}"></span><b>${x.i} ${x.n}</b><span class="cn">${cntP[p] || 0} sem. principal · ${cntS[p] || 0} secundario</span><span class="cb"><i style="width:${Math.round(100 * (mins[p] || 0) / maxM)}%;background:${PCOL[p]}"></i></span><small>${Math.round(mins[p] || 0)}' en sesiones</small></div>`).join('')}</div>`;
  }

  // ---------- Router ----------
  function route() {
    const h = location.hash || '#/';
    if (!h.startsWith('#/campo')) stopTimer();
    if (PZ && !h.startsWith('#/pizarra')) { PZ.stop(); PZ = null; }
    if (document.body.classList.contains('fsb')) { document.body.classList.remove('fsb'); try { if (document.fullscreenElement) document.exitFullscreen(); if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); } catch (e) { } }
    let r = 'lib';
    $('#back').hidden = true; $('#title').textContent = 'My Coach'; $('#subtitle').textContent = (MODE === 'f7' ? 'Fútbol 7 · ' : 'Biblioteca de tareas · ') + TAREAS.filter(vis).length + ' ejercicios';
    if (h.startsWith('#/t/')) { r = 'task'; $('#back').hidden = false; $('#subtitle').textContent = 'Ficha de la tarea'; vTask(h.slice(4)); }
    else if (h.startsWith('#/sesion')) { r = 'ses'; $('#subtitle').textContent = 'Planifica tu sesión'; vSes(); }
    else if (h.startsWith('#/campo')) { r = 'ses'; $('#back').hidden = false; $('#subtitle').textContent = 'Modo campo · cronómetro'; vCampo(); }
    else if (h.startsWith('#/plan')) { r = 'plan'; $('#subtitle').textContent = 'Diseño de la semana'; vPlan(); }
    else if (h.startsWith('#/temporada')) { r = 'plan'; $('#back').hidden = false; $('#subtitle').textContent = 'Contenidos de la temporada'; vTemporada(); }
    else if (h.startsWith('#/asistente')) { r = 'ses'; $('#back').hidden = false; $('#subtitle').textContent = 'Asistente de sesión'; vAsistente(); }
    else if (h.startsWith('#/pizarra/r/')) { r = 'plan'; const f = h.split('/')[3]; vPizarra(rivalSlides(f), '#/partido/' + f); }
    else if (h.startsWith('#/pizarra')) { r = 'ses'; $('#subtitle').textContent = 'Modo vestuario'; vPizarra(); }
    else if (h.startsWith('#/tablero/')) { r = 'tab'; $('#back').hidden = false; $('#subtitle').textContent = 'Pizarra táctica'; vTablero(h.slice(10)); }
    else if (h.startsWith('#/tablero')) { r = 'tab'; $('#subtitle').textContent = 'Pizarra táctica'; vTableros(); }
    else if (h.startsWith('#/valorar')) { r = 'ses'; $('#back').hidden = false; $('#subtitle').textContent = 'Valorar tareas'; vValorar(); }
    else if (h.startsWith('#/metodologia')) { r = 'plan'; $('#back').hidden = false; $('#subtitle').textContent = 'Metodología del club'; vMeto(); }
    else if (h.startsWith('#/partido')) { r = 'plan'; $('#back').hidden = false; $('#subtitle').textContent = 'Preparar el partido'; vPartido(h.split('/')[2] || null); }
    else if (h.startsWith('#/micro')) { r = 'micro'; $('#subtitle').textContent = 'Días MD y cargas'; vMicro(); }
    else if (h.startsWith('#/mis') || h.startsWith('#/favs')) { r = 'mis'; $('#subtitle').textContent = 'Creadas por ti y favoritos'; vMis(); }
    else if (h.startsWith('#/nueva')) { r = 'mis'; $('#back').hidden = false; $('#subtitle').textContent = 'Pizarra y ficha'; vEdit('nueva'); }
    else if (h.startsWith('#/editar/')) { r = 'mis'; $('#back').hidden = false; $('#subtitle').textContent = 'Pizarra y ficha'; vEdit('editar', h.slice(9)); }
    else if (h.startsWith('#/duplicar/')) { r = 'mis'; $('#back').hidden = false; $('#subtitle').textContent = 'Pizarra y ficha'; vEdit('duplicar', h.slice(11)); }
    else { fromHash(); vLib(); }
    document.querySelectorAll('nav.bottom a').forEach(a => a.classList.toggle('on', a.dataset.r === r));
    const hb = $('#pzb'); if (hb) hb.classList.toggle('on', r === 'tab');
    if (r !== 'task') window.scrollTo(0, 0);
  }
  function setMode(m) {
    MODE = m; store.set('mode', m); document.body.classList.toggle('f7', m === 'f7');
    ses.ed = fixEd(ses.ed); if (ses.nj && m === 'f7' && ses.nj > 16) ses.nj = null; saveSes(); if (AS) AS.ed = fixEd(AS.ed);
    F.ed.clear(); F.tipo = '';
    const b = $('#modeb'); if (b) b.dataset.m = m;
  }
  setMode(MODE);
  if (!store.get('edfix', false)) { ses.ed = ''; saveSes(); if (AS) { AS.ed = ''; store.set('as', AS); } store.set('edfix', true); }
  $('#modeb').onclick = () => { setMode(MODE === 'f7' ? 'f11' : 'f7'); route(); toast(MODE === 'f7' ? `Fútbol 7: ${TAREAS.filter(vis).length} tareas (propias y adaptadas)` : `Fútbol 11: ${TAREAS.filter(vis).length} tareas`); };
  $('#back').onclick = () => history.length > 1 ? history.back() : (location.hash = '#/');
  window.addEventListener('hashchange', route);
  route();
  bridge();

  if ('serviceWorker' in navigator) {
    // si llega una versión nueva mientras la app está abierta, se recarga sola una vez
    const had = !!navigator.serviceWorker.controller; let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (had && !reloaded) { reloaded = true; location.reload(); } });
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').then(r => r.update && r.update()).catch(() => { }));
  }
})();
