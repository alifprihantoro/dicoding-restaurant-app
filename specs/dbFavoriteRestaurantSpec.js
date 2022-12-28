// /* eslint-disable */
// import { API_URL_LIST } from '../src/scripts/config'
// import { iconLove } from '../src/scripts/icon'
// import eventLoveBtn from '../src/scripts/pages/detail/event/love'
// import FavoriteRestaurantIdb from '../src/scripts/service/indexDb'
// import $ from '../src/scripts/utils/element'
// import get from '../src/scripts/utils/fetch'
// import getApiRestaurant from './helper/get'
//
// describe('add db :', () => {
//   const BTN = '#love-btn svg'
//   let COUNT = 0
//   const addDetailRestaurant = async () => {
//     if (COUNT == 0) {
//       get(API_URL_LIST, async restaurants => {
//         const restaurant = restaurants.restaurants[0]
//         await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
//       })
//       COUNT++
//     }
//     document.body.innerHTML = `<button name='love button' id="love-btn">${iconLove()}</button>`
//   }
//   beforeEach(async () => {
//     await addDetailRestaurant()
//   })
//   it('should nothing on db', async () => {
//     const restaurant = await getApiRestaurant()
//     const movie = await FavoriteRestaurantIdb.getRestaurant(restaurant.id)
//     const isContain = movie !== undefined
//     expect(isContain).toBeFalse()
//   })
//   it('should have list restaurant after klick btn', async () => {
//     const restaurant = await getApiRestaurant()
//     await eventLoveBtn(await restaurant)
//     await $('#love-btn').click()
//     const movie = await FavoriteRestaurantIdb.getRestaurant(restaurant.id)
//     const isContain = movie !== undefined
//     expect(isContain).toBeTrue()
//   })
// })
