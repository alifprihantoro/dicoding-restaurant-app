import FavoriteRestaurantIdb from '../../../../service/indexDb'
import $ from '../../../../utils/element'

export default async function dbLove(restaurant) {
  if ($('#love-btn svg').style.fill === 'white') {
    await FavoriteRestaurantIdb.putRestaurant(restaurant)
  } else {
    await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
  }
}
