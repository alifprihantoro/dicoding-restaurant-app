import './main.css'
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
        <button id="close-detail">${iconClose()}</button>
        <div class="flex">
          <img
            src="${pictureId}"
            alt="${name}"
          />
          <div class="list">
            <h2>${name}</h2>
            <h3>${iconStar()} ${rating}</h3>
            <h3>${iconMap()} ${city}</h3>
            <p>${description}</p>
          </div>
        </div>
      </div>
    </div>
  `
}
