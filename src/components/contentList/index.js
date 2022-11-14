// get data from json
import DATA from '../../DATA.json'
import shortDescription from './description'
import { iconStar, iconMap } from './icon'
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
                    src="${e.pictureId}"
                    alt="${e.name}"
                  />
                  <button>show detail</button>
                  <h4 class="right">${iconStar()} ${e.rating}</h4>
                  <h4>${iconMap()} ${e.city}</h4>
                  <h3>${e.name}</h3>
                </div>
                <p>${shortDescription(e.description)}</p>
              </div>
            `
          })
          .join('')}
      </div>
    `
  }
}
customElements.define('content-list', ContentList)
