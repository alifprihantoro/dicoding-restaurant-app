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
    const URL = 'https://restaurant-api.dicoding.dev/list'
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
