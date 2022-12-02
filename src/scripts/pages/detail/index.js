import htmlContent from './html'
import eventCLoseBtn from './event/closeBtn'
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
export default function handleDetailListPost(RESTAURANT, EL_LIST) {
  const URL = API_URL_DERTAIL + RESTAURANT.id
  get(URL, ({ restaurant }) => {
    const callBack = (element) => {
      eventCLoseBtn(element, EL_LIST)
      eventAddLoveBtn(RESTAURANT)
      element.focus()
    }
    render('#detail-content-root', htmlContent(restaurant), callBack)
  })
}
