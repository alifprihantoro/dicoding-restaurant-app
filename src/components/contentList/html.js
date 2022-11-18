import shortDescription from './description'
import { iconStar, iconMap } from './icon'

export default function htmlContentListRestaurant (restaurants){
    return `
      <h2 class="title">list restaurants</h2>
      <div class="content">
        ${restaurants
          .map((e, i) => {
            return `
              <div class="card">
                <div
                  class="detail-show cover-image"
                  value="${i}"
                >
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
