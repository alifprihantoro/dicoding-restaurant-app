import * as WorkboxWindow from 'workbox-window'

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    // eslint-disable-next-line no-console
    console.log('Service Worker not supported in the browser')
    return
  }

  const wb = new WorkboxWindow.Workbox('/sw.bundle.js')
  try {
    await wb.register()
    // eslint-disable-next-line no-console
    console.log('Service worker registered')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Failed to register service worker', error)
  }
}
window.addEventListener('load', () => {
  swRegister()
})
