import htmlContent from './html'
import eventAddLoveBtn from './event/loveBtn'
import { API_URL_DERTAIL } from '../../config'
import get from '../../utils/fetch'
import render from '../../utils/render'
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
  get(URL, ({ restaurant }) => {
    const callBack = () => {
      eventAddLoveBtn(RESTAURANT)
      // eslint-disable-next-line no-restricted-globals
      location.href = '#'
    }
    const HTML = `
      <a href="#detail-restaurant" class="skip-link">Menuju ke konten</a>
      <my-nav></my-nav>
      ${htmlContent(restaurant)}
      <my-footer></my-footer>
      `
    render('#root', HTML, callBack)
  })
}
