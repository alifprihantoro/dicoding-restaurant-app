// reset style
import '../styles/var.css'
import '../styles/reset.css'
import '../styles/mobile.css'

// component
import renderHome from './pages/home'

// service
import swRegister from './service/swRegister'

window.addEventListener('load', () => {
  renderHome()
  swRegister()
})
