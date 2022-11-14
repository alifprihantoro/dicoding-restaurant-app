// get data from json
import DATA from '../../DATA.json'
import shortDescription from './description'
// styling
import './main.css'

class ContentList extends HTMLElement {
  connectedCallback() {
    const { restaurants } = DATA
    this.innerHTML = `
      <h2 class="title">list restaurants</h2>
      <div class="content">
        ${restaurants
          .map((e) => {
            return `
              <div class="card">
                <div class="cover-image">
                  <img
                    class="img-card"
                    src="${e.pictureId}"
                    alt=""
                  />
                  <h4>rating:${e.rating}</h4>
                  <h3>${e.name}</h3>
                </div>
                <p>${shortDescription(e.description)}</p>
              </div>
            `
          })
          .join('')}
      </div>
    `
    const imgEL = document.getElementsByClassName('img-card')
    for (let i = 0; i < imgEL.length; i++) {
      const imgKlick = imgEL[i]
      imgKlick.onclick = function () {
        alert(restaurants[i].name)
      }
    }
  }
}
customElements.define('content-list', ContentList)
