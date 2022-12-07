export default async function swRegister() {
  if (!('serviceWorker' in navigator)) {
    // eslint-disable-next-line no-alert
    alert('browser tidak mendukung offline mode!')
    return
  }
  try {
    await navigator.serviceWorker.register('./sw.js')
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('service worker error')
  }
}
