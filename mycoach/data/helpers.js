/* Utilidades para escribir los diagramas de las tareas */
window.TAREAS = [];
const T = o => TAREAS.push(o);
const A = (x, y, l) => ['A', x, y, l], B = (x, y, l) => ['B', x, y, l], N = (x, y, l) => ['N', x, y, l], C = (x, y, l) => ['C', x, y, l], P = (x, y) => ['P', x, y], E = (x, y) => ['E', x, y, 'E'];
// Jugadores en círculo
const ring = (cx, cy, r, n, team, off = -90) => Array.from({ length: n }, (_, i) => { const a = (off + i * 360 / n) * Math.PI / 180; return [team, +(cx + r * Math.cos(a)).toFixed(1), +(cy + r * Math.sin(a)).toFixed(1)]; });
// Jugadores en línea
const fila = (x1, y1, x2, y2, n, team) => Array.from({ length: n }, (_, i) => { const t = n === 1 ? 0.5 : i / (n - 1); return [team, +(x1 + (x2 - x1) * t).toFixed(1), +(y1 + (y2 - y1) * t).toFixed(1)]; });
// Conos en las esquinas de un rectángulo
const esq = (x, y, w, h) => [[x, y], [x + w, y], [x, y + h], [x + w, y + h]];
// Conos en línea
const conos = (x1, y1, x2, y2, n, col) => Array.from({ length: n }, (_, i) => { const t = n === 1 ? 0.5 : i / (n - 1); return [+(x1 + (x2 - x1) * t).toFixed(1), +(y1 + (y2 - y1) * t).toFixed(1), col]; });
// Mitad de campo derecha y área
const MEDIO = [52.5, 0, 52.5, 68];
