import toogleNav from './toogle'

// style
import './main.css'
import './mobile.css'
import component from '../../../../utils/component'
import $ from '../../../../utils/element'
import FavoriteRestaurantIdb from '../../../../service/indexDb'
import htmlContentListRestaurant from '../contentList/html'
import handleClickDetail from '../contentList/handleOpen'
import render from '../../../../utils/render'
import renderHome from '../..'

const CALLBACK = () => {
  toogleNav()
  $('#nav-favorite').onclick = () => {
    FavoriteRestaurantIdb.getAllRestaurants().then((restaurants) => {
      const HTML = `
  <my-nav></my-nav>
  ${htmlContentListRestaurant({
    restaurants,
    title: 'Favorite',
  })}
  <my-footer></my-footer>
  `
      render('#root', HTML, handleClickDetail(restaurants))
      // eslint-disable-next-line no-restricted-globals
      location.href = '#title-list'
    })
  }
  // if home click
  $('#nav-home').onclick = () => {
    renderHome()
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
