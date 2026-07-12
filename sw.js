const CACHE='kps-v15';const FILES=['./','./index.html','./manifest.webmanifest','./program-data.js','./exercise-library.js','./app.js','./anatomy-avatar.png','./anatomy-chest.png','./anatomy-shoulders.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
