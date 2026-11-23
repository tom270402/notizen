/* SN Notizen – Service Worker
   Mit Internet: holt die App-Seite immer frisch von GitHub (Updates kommen sofort an).
   Ohne Internet: nimmt die gespeicherte Version, die App läuft offline weiter.
   Bei einer neuen Version VERSION hochzählen. */
const VERSION = 'sn-notizen-v4';
const FILES = ['./', './index.html', './manifest.webmanifest',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

function fromNetwork(req, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    fetch(req, { cache: 'no-store' }).then(res => {
      clearTimeout(t);
      if (!res.ok) return reject(new Error('status ' + res.status));
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(req, copy));
      resolve(res);
    }, err => { clearTimeout(t); reject(err); });
  });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  const isPage = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('index.html');
  if (isPage) {
    // Seite: zuerst Netz (max. 4 s), sonst gespeicherte Version
    e.respondWith(fromNetwork(req, 4000).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('./index.html'))));
    return;
  }
  // Icons, Manifest: gespeicherte Version, sonst Netz
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req)));
});
