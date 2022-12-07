export const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    alert('browser tidak mendukung offline mode!')
    return
  }
  try {
    await navigator.serviceWorker.register('./sw.js')
  } catch (error) {
    console.log('Failed to register service worker', error)
  }
}
