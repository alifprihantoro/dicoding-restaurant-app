import { IMG_URL } from '../../config'
import shortDescription from './description'
import { iconStar, iconMap } from './icon'

export default function htmlContentListRestaurant(restaurants) {
  return `
    <h2 class="title" tabindex="0" id='maincontent' >
      <span>list restaurants</span>
    </h2>
    <div class="content">
      ${restaurants
        .map((e, i) => {
          return `
            <div class="card">
              <div class="detail-show cover-image" value="${i}" >
                <img
                  src="${IMG_URL + e.pictureId}"
                  alt="${e.name}"
                  tabindex="0"
                />
                <button>show detail</button>
                <h4 class="right" tabindex="0" title="rating ${e.rating}" >
                  ${iconStar(e.rating)} ${e.rating}
                </h4>
                <h4 tabindex="0" title="city ${e.city}" >
                  ${iconMap()} ${e.city}
                </h4>
                <h3 tabindex="0" title="nama restaurant ${e.name}" >
                  ${e.name}
                </h3>
              </div>
              <p title="description" tabindex="0" >
                ${shortDescription(e.description)}
              </p>
            </div>
          `
        })
        .join('')}
    </div>
  `
}
