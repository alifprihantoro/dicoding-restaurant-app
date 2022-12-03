// reset style
import '../styles/var.css'
import '../styles/reset.css'
import '../styles/mobile.css'

// component
import './pages/home'

// service
import './service/swRegister'
window.addEventListener('hashchange', function () {
  console.log(window.location.href)
})
