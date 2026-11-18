const CACHE = 'myteam-v5';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './app-src.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // solo se guardan los archivos de la app y las librerías/fuentes; Firebase (respuestas, enlaces, copias) siempre va a la red
  const STATIC_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'unpkg.com'];
  if (url.origin !== location.origin && !STATIC_HOSTS.includes(url.hostname)) return;
  if (url.origin === location.origin && (req.mode === 'navigate' || url.pathname.endsWith('/index.html'))) {
    // abre al instante con la copia guardada y descarga la versión nueva por detrás (se usa en la siguiente apertura);
    // si no hay copia, o la red responde en menos de 1,5 s, se usa la red
    const net = fetch(req).then(r => { if (r && r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); } return r; });
    e.respondWith(caches.match('./index.html').then(hit => {
      if (!hit) return net.catch(() => caches.match('./index.html'));
      const slow = new Promise(res => setTimeout(() => res(hit), 1500));
      return Promise.race([net.then(r => (r && r.ok ? r : hit)).catch(() => hit), slow]);
    }));
    return;
  }
  // código de la app: red primero (así llegan las actualizaciones), sin conexión la copia guardada
  if (url.origin === location.origin && url.pathname.endsWith('/app-src.json')) {
    e.respondWith(fetch(req).then(r => { if (r && r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; }).catch(() => caches.match(req)));
    return;
  }
  // resto (librerías, fuentes, iconos): caché primero
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; })));
});
