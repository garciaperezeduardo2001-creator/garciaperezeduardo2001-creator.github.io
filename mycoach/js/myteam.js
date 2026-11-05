/* Conexión directa con My Team.
   My Team guarda sus datos en IndexedDB ('myteam' → almacén 'cols', una entrada por colección con { id: datos })
   o, si no hay IndexedDB, en localStorage con la clave 'myteam:<colección>'. Al estar las dos apps en el mismo
   dominio (garciaperezeduardo2001-creator.github.io) My Coach puede leer esos datos y escribir el plan semanal. */
(function () {
  // Dos versiones de la app de control de carga, en la misma web: My Team (/myteam/) y la primera, Vestuario (raíz)
  const SRC = { mt: { db: 'myteam', ls: 'myteam:', name: 'My Team' }, vest: { db: 'vestuario', ls: 'vest:', name: 'Vestuario (primera versión)' } };
  const ST = 'cols';
  const split = id => { const i = String(id).indexOf('|'); return i < 0 ? ['mt', id] : [id.slice(0, i), id.slice(i + 1)]; };
  const D0 = Date.UTC(1899, 11, 30), DAY = 864e5;
  const serialOf = iso => { const [y, m, d] = iso.split('-').map(Number); return Math.round((Date.UTC(y, m - 1, d) - D0) / DAY); };
  const isoOf = s => { const d = new Date(D0 + s * DAY); return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`; };
  const mean = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;

  // Abre la base de datos de My Team SIN crearla si no existe (crearla vacía rompería My Team)
  async function openDB(DBN) {
    if (!('indexedDB' in window)) return null;
    try { if (indexedDB.databases) { const l = await indexedDB.databases(); if (!l.some(d => d.name === DBN)) return null; } } catch (e) { }
    return new Promise(res => {
      let r; try { r = indexedDB.open(DBN); } catch (e) { res(null); return; }
      let created = false;
      r.onupgradeneeded = () => { created = true; try { r.transaction.abort(); } catch (e) { } };
      r.onerror = () => res(null); r.onblocked = () => res(null);
      r.onsuccess = () => { const db = r.result; if (created || !db.objectStoreNames.contains(ST)) { db.close(); res(null); } else res(db); };
    });
  }
  const lsGet = (LSP, path) => { try { const v = localStorage.getItem(LSP + path); return v ? JSON.parse(v) : null; } catch (e) { return null; } };
  const hasLS = LSP => { try { for (let i = 0; i < localStorage.length; i++) if ((localStorage.key(i) || '').startsWith(LSP)) return true; } catch (e) { } return false; };
  const idbGet = (db, path) => new Promise(res => { try { const q = db.transaction(ST, 'readonly').objectStore(ST).get(path); q.onsuccess = () => res(q.result || null); q.onerror = () => res(null); } catch (e) { res(null); } });

  async function source(sk) {
    const S = SRC[sk]; if (!S) return null;
    const db = await openDB(S.db);
    if (db) return { get: p => idbGet(db, p), db, close: () => db.close() };
    if (hasLS(S.ls)) return { get: async p => lsGet(S.ls, p), db: null, close: () => { } };
    return null;
  }
  const pre = tid => tid === 'main' ? '' : `teams/${tid}/`;

  async function teams() {
    const all = [];
    for (const sk of Object.keys(SRC)) { try { const t = await teamsOf(sk); if (t) all.push(...t); } catch (e) { } }
    return all.length ? all : null;
  }
  async function teamsOf(sk) {
    const s = await source(sk); if (!s) return null;
    try {
      const tl = (await s.get('teamlist')) || {}, cfg = ((await s.get('config')) || {}).main || {};
      const ids = ['main', ...Object.keys(tl).filter(k => k !== 'main')];
      const out = [];
      for (const id of ids) {
        const c = id === 'main' ? cfg : (((await s.get(pre(id) + 'config')) || {}).main || {});
        const pl = (await s.get(pre(id) + 'players')) || {};
        if (id !== 'main' || Object.keys(pl).length || c.team || tl.main) out.push({ id: sk + '|' + id, app: SRC[sk].name, name: (tl[id] && tl[id].name) || c.team || (id === 'main' ? 'Mi equipo' : 'Equipo'), players: Object.keys(pl).length });
      }
      return out.length ? out : null;
    } finally { s.close(); }
  }

  // Lee un equipo y calcula la carga real media por jugador y día (sRPE = RPE × minutos)
  async function read(fullId) {
    const [sk, tid] = split(fullId);
    const s = await source(sk); if (!s) return null;
    try {
      const p = pre(tid), cfg0 = ((await s.get(p + 'config')) || {}).main || {};
      const cfg = { start: 46272, dur: 90, ...cfg0 };
      const players = (await s.get(p + 'players')) || {}, sessions = Object.values((await s.get(p + 'sessions')) || {}), matches = Object.values((await s.get(p + 'matches')) || {});
      const mByDate = {}; matches.forEach(m => { if (m.date != null && !mByDate[m.date]) mByDate[m.date] = m; });
      const actaMin = (m, pid) => {
        let t = null; const D = m.dur > 0 ? m.dur : cfg.dur;
        (m.acta || []).filter(a => a.pid === pid).forEach(a => {
          let x = 0;
          if (a.mt != null) x = a.mt; else { if (a.tit) x += (a.s ?? D); else if (a.e != null) x += (a.s ?? D) - a.e; if (a.re != null) x += (a.rs ?? D) - a.re; }
          t = (t || 0) + Math.max(0, x);
        });
        return t;
      };
      const days = {};
      sessions.forEach(d => {
        if (d.date == null) return;
        const m = mByDate[d.date] || null, dur = d.dur > 0 ? d.dur : (m ? (m.dur > 0 ? m.dur : cfg.dur) : 0);
        const loads = [], rpes = [];
        Object.entries(d.rpe || {}).forEach(([pid, v]) => { if (v == null || !players[pid]) return; let mins = dur; if (m) { const a = actaMin(m, pid); if (a != null) mins = a; } loads.push(v * mins); rpes.push(v); });
        if (!loads.length) return;
        const iso = isoOf(d.date), x = days[iso] = days[iso] || { ua: 0, n: 0, rpe: [], min: 0, content: [] };
        x.ua += mean(loads); x.n = Math.max(x.n, loads.length); x.rpe.push(mean(rpes)); x.min += dur; if (d.content) x.content.push(d.content); (d.ej || []).forEach(e => (x.ej = x.ej || []).push({ id: e.id, n: e.n, dur: e.dur ?? null, plan: e.plan ?? e.dur ?? null }));
      });
      Object.values(days).forEach(x => { x.ua = Math.round(x.ua); x.rpe = Math.round(mean(x.rpe) * 10) / 10; });
      const games = matches.filter(m => m.date != null).map(m => ({ iso: isoOf(m.date), rival: m.rival || '', dur: m.dur > 0 ? m.dur : cfg.dur, j: m.j }));
      return { cfg, days, games, nPlayers: Object.keys(players).length, nSessions: sessions.length };
    } finally { s.close(); }
  }

  // Escribe la carga objetivo por día en el plan semanal de My Team (colección 'plan', documentos 'w<semana>' con { targets: { díaDeLaSemana: UA } })
  async function writePlan(fullId, byIso) {
    const [sk, tid] = split(fullId), S = SRC[sk];
    const info = await read(fullId); if (!info) throw new Error('No se encontró My Team');
    const start = info.cfg.start, weeks = {};
    Object.entries(byIso).forEach(([iso, ua]) => {
      const sr = serialOf(iso), off = sr - start; if (off < 0) return;
      const w = Math.floor(off / 7) + 1, k = off % 7;
      (weeks[w] = weeks[w] || {})[k] = Math.max(0, Math.round(ua));
    });
    const path = pre(tid) + 'plan', n = Object.values(weeks).reduce((t, x) => t + Object.keys(x).length, 0);
    if (!n) return 0;
    const merge = cur => { cur = cur || {}; Object.entries(weeks).forEach(([w, t]) => { const doc = cur['w' + w] || {}; cur['w' + w] = { ...doc, targets: { ...(doc.targets || {}), ...t } }; }); return cur; };
    const db = await openDB(S.db);
    if (db) {
      await new Promise((ok, ko) => {
        const tx = db.transaction(ST, 'readwrite'), st = tx.objectStore(ST), q = st.get(path);
        q.onsuccess = () => st.put(merge(q.result), path);
        tx.oncomplete = () => ok(); tx.onerror = () => ko(tx.error); tx.onabort = () => ko(tx.error);
      });
      db.close();
    } else localStorage.setItem(S.ls + path, JSON.stringify(merge(lsGet(S.ls, path))));
    return n;
  }

  window.MyTeamLink = { teams, read, writePlan, serialOf, isoOf };
})();
