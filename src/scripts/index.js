// component
import renderHome from './pages/home'

// service
import swRegister from './service/swRegister'

window.addEventListener('load', () => {
  renderHome()
  swRegister()
})
