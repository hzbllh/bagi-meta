// sw.js
const CACHE_NAME = 'meta-matik-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/generator.html',
  '/ranking.html',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
  'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js',
  'https://raw.githubusercontent.com/hzbllh/bagi-meta/refs/heads/main/1000072360-removebg-preview.png',
  'https://raw.githubusercontent.com/hzbllh/bagi-meta/refs/heads/main/1000069909-removebg-preview.png',
  'https://cdn-icons-png.flaticon.com/512/3046/3046121.png',
  'https://freesound.org/data/previews/258/258111_2046502-lq.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});
