import { API_URL_LIST } from '../../config'
import handleClickDetail from './handleOpen'
import htmlContentListRestaurant from './html'
// styling
import './main.css'
import './mobile.css'

/**
 * handle list restaurant
 */
class ContentList extends HTMLElement {
  connectedCallback() {
    const URL = API_URL_LIST
    fetch(URL)
      .then((res) => res.json())
      .then((DATAS) => {
        const { restaurants } = DATAS
        this.innerHTML = htmlContentListRestaurant(restaurants) // show content
        handleClickDetail(restaurants)
      })
  }
}
customElements.define('content-list', ContentList)
