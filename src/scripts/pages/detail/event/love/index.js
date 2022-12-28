import $ from '../../../../utils/element'
import FavoriteRestaurantIdb from '../../../../service/indexDb'
import dbLove from './db'
import togleBtnLove from './toggle'

export default async function eventLoveBtn(restaurant) {
  $('#love-btn').addEventListener('click', async () => {
    await dbLove(restaurant)
    await togleBtnLove()
  })
  const favoriteCek = await FavoriteRestaurantIdb.getRestaurant(restaurant.id).then((e) => e)
  if (favoriteCek !== undefined) {
    $('#love-btn svg').style.fill = 'red'
  }
}
