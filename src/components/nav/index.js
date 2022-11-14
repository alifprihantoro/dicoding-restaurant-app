import toogleNav from './toogle'

// style
import './main.css'
import './mobile.css'

class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="nav" class="">
        <header>logo</header>
        <div id="nav-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
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
