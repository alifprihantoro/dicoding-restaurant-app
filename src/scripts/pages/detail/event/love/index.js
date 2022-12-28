import $ from '../../../../utils/element'
import dbLove from './db'
import togleBtnLove from './toggle'
import FavoriteRestaurantIdb from '../../../../service/indexDb'

export default async function eventLoveBtn(restaurant) {
  const test = async () => {
    const addToDb = await dbLove(restaurant)
    await togleBtnLove()
    if (addToDb === 'err') {
      // eslint-disable-next-line no-alert
      alert('your browser db doesnt exist or you turn off')
    }
  }
  $('#love-btn').onclick = await test()
  const favoriteCek = await FavoriteRestaurantIdb.getRestaurant(restaurant.id).then((e) => e)
  if (favoriteCek !== undefined) {
    $('#love-btn svg').style.fill = 'red'
  }
}
