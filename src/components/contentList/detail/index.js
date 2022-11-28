import htmlContent from './html'
import handleClosedeatail from './handleClose'
import {API_URL_DERTAIL} from '../../../config'
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
export default function handleDetailListPost(RESTAURANT) {
  const URL = API_URL_DERTAIL + RESTAURANT.id
  fetch(URL)
    .then((res) => res.json())
    .then(({ restaurant }) => {
      const EL_DETAIL = document.getElementById('detail-content-root')
      EL_DETAIL.innerHTML = htmlContent(restaurant)
      handleClosedeatail(EL_DETAIL)
    })
}
