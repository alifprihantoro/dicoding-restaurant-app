import { IMG_URL, IMG_URL_MEDIUM } from '../../../config'
import { iconLove, iconMap } from '../../../icon'

export default function shortInfo({
  name,
  description,
  pictureId,
  city,
  address,
}) {
  return `
    <div class="flex">
      <div id="detail-restaurant" class="img-detail">
      <picture>
        <source media="(max-width: 600px)" 
          src="${IMG_URL_MEDIUM + pictureId}">
        <img tabindex="0" src="${IMG_URL_MEDIUM + pictureId}" alt="image ${name}" >
      </picture>
        <button name='love button' id="love-btn">${iconLove()}</button>
      </div>
      <div class="list">
        <h2 title="title" tabindex="0" >
          ${name}
        </h2>
        <h3 title="city" tabindex="0" >
          ${iconMap()} ${city}
        </h3>
        <h3 title="address" tabindex="0" >
          ${iconMap()} ${address}
        </h3>
        <p title="description" tabindex="0" >
          ${description}
        </p>
      </div>
    </div>
  `
}
