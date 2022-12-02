import { FavoriteRestaurantIdb } from '../../../service/tesDb'
import $ from '../../../utils/element'

export default function eventLoveBtn(restaurant) {
  $('#love-btn').onclick = () => {
    FavoriteRestaurantIdb.getRestaurant(restaurant.id).then((e) => {
      if (e == undefined) {
        FavoriteRestaurantIdb.putRestaurant(restaurant)
        return
      }
      FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
    })
  }
}
