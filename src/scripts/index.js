import 'lazysizes'
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
// reset style
import '../styles/var.css'
import '../styles/reset.css'
import '../styles/mobile.css'

// component
import render from './pages/home'

// service
import swRegister from './service/swRegister'

window.addEventListener('load', () => {
  render()
  swRegister()
})
