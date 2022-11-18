import htmlContent from './html'
import handleClosedeatail from "./handleClose";
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
  const EL_DETAIL = document.getElementById('detail-content-root')
  EL_DETAIL.innerHTML = htmlContent(RESTAURANT)
  handleClosedeatail(EL_DETAIL)
}
