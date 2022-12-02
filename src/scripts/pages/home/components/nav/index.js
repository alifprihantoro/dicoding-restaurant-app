import toogleNav from './toogle'

// style
import './main.css'
import './mobile.css'
import component from '../../../../utils/component'

const HTML = `
  <nav id="nav" class="" >
    <header>MuryP Food</header>
    <button title="navigation" id="nav-btn" >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#">Favorite</a></li>
      <li><a href="https://github.com/alifprihantoro">About Us</a></li>
    </ul>
  </nav>
`
component({ NAME_TAG:'my-nav', HTML, CALLBACK: toogleNav })
