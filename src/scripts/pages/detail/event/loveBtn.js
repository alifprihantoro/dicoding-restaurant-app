import FavoriteRestaurantIdb from '../../../service/indexDb'
import $ from '../../../utils/element'

export default function eventLoveBtn(restaurant) {
  const toogleBtn = (isFirst) => {
    FavoriteRestaurantIdb.getRestaurant(restaurant.id).then((e) => {
      if (e === undefined) {
        // eslint-disable-next-line no-use-before-define
        togleStyle(!isFirst)
        // eslint-disable-next-line no-unused-expressions
        !isFirst && FavoriteRestaurantIdb.putRestaurant(restaurant)
        return
      }
      // eslint-disable-next-line no-use-before-define
      togleStyle(!!isFirst)
      // eslint-disable-next-line no-unused-expressions
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
