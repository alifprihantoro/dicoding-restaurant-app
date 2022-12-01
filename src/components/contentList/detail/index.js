import htmlContent from './html'
import handleClosedeatail from './handleClose'
import { API_URL_DERTAIL } from '../../../config'
/**
 * handle detail restaurant
 * @arg {object} RESTAURANT
 * @arg {string} id
 * @arg {string} name
 * @arg {string} description
 * @arg {string} pictureId
 * @arg {string} city
 * @arg {number} rating
 */
export default function handleDetailListPost(RESTAURANT,EL_LIST) {
  const URL = API_URL_DERTAIL + RESTAURANT.id
  fetch(URL)
    .then((res) => res.json())
    .then(({ restaurant }) => {
      const DETAIL_ELEMENT = document.getElementById('detail-content-root')
      DETAIL_ELEMENT.innerHTML = htmlContent(restaurant)
      handleClosedeatail(DETAIL_ELEMENT,EL_LIST)
      DETAIL_ELEMENT.focus()
    })
}
