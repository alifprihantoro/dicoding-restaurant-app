import './main.css'
import './mobile.css'
import { iconClose } from './icon'
import bottomDetail from './bottom'
import shortInfo from './shortInfo'
import menusRestaurant from './menus'
/**
 * html content detail restaurant
 * @arg {object} DATA
 * @arg {string} id
 * @arg {string} name
 * @arg {string} description
 * @arg {string} pictureId
 * @arg {string} city
 * @arg {number} rating
 * @arg {string} address
 * @arg {object} categories
 * @arg {string} name
 * @arg {object} menus
 * @arg {array} food
 * @arg {string} name
 * @arg {array} drink
 * @arg {string} name
 */
export default function htmlContent(DATA) {
  return `
    <div id="detail-restaurant">
      <div class="pembungkus">
        <button id="close-detail" name="button close" >
          ${iconClose()}
        </button>
        ${shortInfo(DATA)} 
        ${menusRestaurant(DATA)} 
        ${bottomDetail(DATA)}
      </div>
    </div>
  `
}
