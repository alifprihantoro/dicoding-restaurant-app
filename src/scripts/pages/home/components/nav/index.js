import toogleNav from './toogle'
import component from '../../../../utils/component'
import $ from '../../../../utils/element'
import FavoriteRestaurantIdb from '../../../../service/indexDb'
import htmlContentListRestaurant from '../contentList/html'
import handleClickDetail from '../contentList/handleOpen'
import render from '../../../../utils/render'
// eslint-disable-next-line import/no-cycle
import renderHome from '../..'

const CALLBACK = () => {
  toogleNav()
  $('#nav-favorite').onclick = () => {
    FavoriteRestaurantIdb.getAllRestaurants().then((restaurants) => {
      const HTML = `
  <a href="#title-list" class="skip-link">Menuju ke konten</a>
  <my-nav></my-nav>
  ${htmlContentListRestaurant({
    restaurants,
    title: 'Favorite',
  })}
  <my-footer></my-footer>
  `
      render('#root', HTML, () => handleClickDetail(restaurants))
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
      <li><a id="nav-favorite" href="#">Favorite</a></li>
      <li><a id="nav-home" href="#">List Restaurants</a></li>
      <li><a href="https://github.com/alifprihantoro">About Us</a></li>
    </ul>
  </nav>
`
component({ NAME_TAG: 'my-nav', HTML, CALLBACK })
