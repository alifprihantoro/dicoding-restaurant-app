import toogleNav from './toogle'

// style
import './main.css'
import './mobile.css'
import component from '../../../../utils/component'
import $ from '../../../../utils/element'
import FavoriteRestaurantIdb from '../../../../service/indexDb'
import htmlContentListRestaurant from '../contentList/html'
import handleClickDetail from '../contentList/handleOpen'

const CALLBACK = () => {
  toogleNav()
  $('#nav-favorite').onclick = () => {
    FavoriteRestaurantIdb.getAllRestaurants().then((restaurants) => {
      $('content-list').innerHTML = htmlContentListRestaurant({
        restaurants,
        title: 'Favorite',
      })
      handleClickDetail(restaurants)
    })
  }
  // if home click
  $('#nav-home').onclick = () => {
    const NEW_ELEMEN = document.createElement('content-list')
    $('content-list').after(NEW_ELEMEN)
    $('content-list').remove()
  }
}
const HTML = `
  <nav id="nav" class="" >
    <header>MuryP Food</header>
    <button title="navigation" id="nav-btn" >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a id="nav-favorite" href="#title-list">Favorite</a></li>
      <li><a id="nav-home" href="#title-list">List Restaurants</a></li>
      <li><a href="https://github.com/alifprihantoro">About Us</a></li>
    </ul>
  </nav>
`
component({ NAME_TAG: 'my-nav', HTML, CALLBACK })
