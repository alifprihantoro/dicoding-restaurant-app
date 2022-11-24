import toogleNav from './toogle'

// style
import './main.css'
import './mobile.css'

class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="nav" class="">
        <header>MuryP Food</header>
        <button id="nav-btn">
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
    toogleNav()
  }
}
customElements.define('my-nav', MyNav)
