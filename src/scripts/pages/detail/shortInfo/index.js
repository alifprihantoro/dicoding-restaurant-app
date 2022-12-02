import { IMG_URL } from '../../../config'
import { iconMap } from '../../../icon'
// style
import './main.css'
import './mobile.css'
export default function shortInfo({
  name,
  description,
  pictureId,
  city,
  address,
}) {
  return `
    <div class="flex">
      <div class="img-detail">
        <img tabindex="0" src="${IMG_URL + pictureId}" alt="image ${name}" />
        <button id="love-btn">love</button>
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
