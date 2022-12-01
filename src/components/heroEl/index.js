// style
import './main.css'
import './mobile.css'

// image
import image from '../../public/images/heros/hero-image_1.jpg'
import component from '../../utils/component'

const HTML = `
  <div class="hero-element">
    <img src="${image}" alt="">
    <div class="info">
      <h2 tabindex='0'>What is Logo?</h2>
      <p tabindex='0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nam!</p>
      <a href="#">Buy Now!</button>
    </div>
  </div>
`
component({HTML,NAME_TAG:'my-hero'})
