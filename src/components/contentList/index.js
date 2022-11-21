// get data from json
import DATA from '../../DATA.json'
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
    const { restaurants } = DATA // data restorant from json
    this.innerHTML = htmlContentListRestaurant(restaurants) // show content
    handleClickDetail(restaurants)
  }
}
customElements.define('content-list', ContentList)
