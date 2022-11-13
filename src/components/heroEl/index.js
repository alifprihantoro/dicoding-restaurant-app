// style
import '../../styles/heroEl/main.css'
import '../../styles/heroEl/mobile.css'

// image
import image from '../../public/images/heros/hero-image_1.jpg'

class HeroEl extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="hero-element">
        <img src="${image}" alt="">
        <div class="info">
          <h2>What is Logo?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nam!</p>
          <button>Buy Now!</button>
        </div>
      </div>
    `
  }
}
customElements.define('my-hero', HeroEl)
