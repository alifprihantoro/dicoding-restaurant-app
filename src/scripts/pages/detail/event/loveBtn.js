import { FavoriteRestaurantIdb } from '../../../service/tesDb'
import $ from '../../../utils/element'

export default function eventLoveBtn(restaurant) {
  const toogleBtn = (isFirst) => {
    FavoriteRestaurantIdb.getRestaurant(restaurant.id).then((e) => {
      if (e == undefined) {
        !isFirst && FavoriteRestaurantIdb.putRestaurant(restaurant)
        togleStyle(true)
        return
      }
      !isFirst && FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
      togleStyle(false)
    })
  }
  const togleStyle = (isLove) => {
    $('#love-btn svg').style.fill = isLove ? 'white' : 'red'
  }
  toogleBtn(true)
  $('#love-btn').onclick = () => {
    toogleBtn(false)
  }
}
