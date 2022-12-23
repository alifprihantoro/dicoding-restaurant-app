import FavoriteRestaurantIdb from '../../../service/indexDb'
import $ from '../../../utils/element'

export default async function eventLoveBtn(restaurant) {
  const toogleBtn = async (isFirst) => {
    await FavoriteRestaurantIdb.getRestaurant(restaurant.id).then(async (e) => {
      if (e === undefined) {
        // eslint-disable-next-line no-use-before-define
        togleStyle(!isFirst)
        // eslint-disable-next-line no-unused-expressions
        !isFirst && (await FavoriteRestaurantIdb.putRestaurant(restaurant))
        return
      }
      // eslint-disable-next-line no-use-before-define
      togleStyle(!!isFirst)
      // eslint-disable-next-line no-unused-expressions
      !isFirst && (await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id))
    })
  }
  const togleStyle = (isLove) => {
    $('#love-btn svg').style.fill = isLove ? 'red' : 'white'
  }
  await toogleBtn(true)
  $('#love-btn').onclick = () => {
    toogleBtn(false)
  }
}
