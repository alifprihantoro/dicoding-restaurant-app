import { FavoriteRestaurantIdb } from '../../../service/indexDb'
import $ from '../../../utils/element'

export default function eventLoveBtn(restaurant) {
  const toogleBtn = (isFirst) => {
    FavoriteRestaurantIdb.getRestaurant(restaurant.id).then((e) => {
      console.log(e)
      if (e == undefined) {
        console.log('hello')
        togleStyle(isFirst ? false : true)
        !isFirst && FavoriteRestaurantIdb.putRestaurant(restaurant)
        return
      }
      togleStyle(isFirst ? true : false)
      !isFirst && FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
    })
  }
  const togleStyle = (isLove) => {
    $('#love-btn svg').style.fill = isLove ? 'red' : 'white'
  }
  toogleBtn(true)
  $('#love-btn').onclick = () => {
    toogleBtn(false)
  }
}
