import { precacheandroute } from 'workbox-precaching'

// eslint-disable-next-line no-underscore-dangle
precacheandroute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  // eslint-disable-next-line no-console
  console.log('Service Worker: Installed')
  self.skipWaiting()
})

self.addEventListener('push', (event) => {
  // eslint-disable-next-line no-console
  console.log('Service Worker: Pushed')
  const dataJson = event.data.json()
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  }
  event.waitUntil(
    self.registration.showNotification(notification.title, notification.options),
  )
})
