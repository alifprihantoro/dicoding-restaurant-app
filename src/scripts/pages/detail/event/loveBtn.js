import { FavoriteRestaurantIdb } from '../../../service/tesDb'
import $ from '../../../utils/element'

export default function eventLoveBtn(restaurant) {
  const isLove = false
  $('#love-btn').onclick = () => {
    FavoriteRestaurantIdb.getRestaurant(restaurant)
      .then(() => {
        FavoriteRestaurantIdb.deleteRestaurant(restaurant)
      })
      .catch((err) => {
        FavoriteRestaurantIdb.putRestaurant(restaurant)
      })
  }
}
