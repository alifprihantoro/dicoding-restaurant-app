const version = '1.0.0'
const CACHE_NAME = `muryp-${version}`
const assetsToCache = ['/', '/index.html', '/app.webmanifest', '/app.bundle.js']

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  // menyimpan appshell ke caches API
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assetsToCache)),
  )
})
// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
  // menghapus caches lama
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((filteredName) => caches.delete(filteredName)),
      )),
  )
})
// self.addEventListener('message', (event) => {
//   // menampilkan data/pesan yang dikirim client
//   console.log(`Client mengirim pesan: ${event.data}`)
// })
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request)),
  )
})
