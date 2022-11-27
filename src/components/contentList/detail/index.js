import htmlContent from './html'
import handleClosedeatail from './handleClose'
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
  const URL = 'https://restaurant-api.dicoding.dev/detail/' + RESTAURANT.id
  fetch(URL)
    .then((res) => res.json())
    .then(({ restaurant }) => {
      const EL_DETAIL = document.getElementById('detail-content-root')
      EL_DETAIL.innerHTML = htmlContent(restaurant)
      handleClosedeatail(EL_DETAIL)
    })
}
