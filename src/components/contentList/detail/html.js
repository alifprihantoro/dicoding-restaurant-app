import './main.css'
import './mobile.css'
import { iconStar, iconMap } from '../icon'
import { iconClose } from './icon'
/**
 * html content detail restaurant
 * @arg {object} DATA
 * @arg {string} id
 * @arg {string} name
 * @arg {string} description
 * @arg {string} pictureId
 * @arg {string} city
 * @arg {number} rating
 * @arg {HTMLElement} EL - element btn
 */
export default function htmlContent(DATA) {
  const { name, description, pictureId, city, rating } = DATA
  return `
    <div id="detail-restaurant">
      <div class="pembungkus">
        <button id="close-detail" name='button close'>${iconClose()}</button>
        <div class="flex">
          <img
            tabindex="0"
            src="${pictureId}"
            alt="image ${name}"
          />
          <div class="list">
            <h2
              title="title"
              tabindex="0"
            >
              ${name}
            </h2>
            <h3
              title="rating"
              tabindex="0"
            >
              ${iconStar()} ${rating}
            </h3>
            <h3
              title="city"
              tabindex="0"
            >
              ${iconMap()} ${city}
            </h3>
            <p
              title="description"
              tabindex="0"
            >
              ${description}
            </p>
          </div>
        </div>
      </div>
    </div>
  `
}
