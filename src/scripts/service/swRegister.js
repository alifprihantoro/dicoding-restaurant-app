const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Browser tidak mendukung Service Worker')
    return
  }
  try {
    await navigator.serviceWorker.register('./sw.js')
//     navigator.serviceWorker.ready.then(swRegistration => {
//   return swRegistration.sync.register('foo');
// });
  } catch (error) {
    console.log('Failed to register service worker', error)
  }
}
swRegister()
