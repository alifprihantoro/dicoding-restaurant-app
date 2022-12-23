/* eslint-disable */
import { API_URL_LIST } from '../src/scripts/config'
import { iconLove } from '../src/scripts/icon'
import eventLoveBtn from '../src/scripts/pages/detail/event/loveBtn'
import FavoriteRestaurantIdb from '../src/scripts/service/indexDb'
import $ from '../src/scripts/utils/element'
import get from '../src/scripts/utils/fetch'

describe('like btn :', () => {
  const BTN = '#love-btn svg'
  let COUNT = 0
  const addDetailRestaurant = async () => {
    if (COUNT == 0) {
      get(API_URL_LIST, async restaurants => {
        const restaurant = restaurants.restaurants[0]
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
      })
      COUNT++
    }
    document.body.innerHTML = `<button name='love button' id="love-btn">${iconLove()}</button>`
  }
  beforeEach(async () => {
    await addDetailRestaurant()
  })
  it('should have love btn', async () => {
    expect($(BTN)).toBeDefined()
  })
  it('love btn fill white when in first', async () => {
    const COLOR = $(BTN).style.fill
    expect(COLOR).toEqual('white')
  })
  it('love btn fill red when klick', () => {
    get(API_URL_LIST, async restaurants => {
      const restaurant = restaurants.restaurants[0]
      await eventLoveBtn(restaurant)
      await $('#love-btn').click()
      const COLOR = $(BTN).style.fill
      expect(COLOR).toEqual('red')
    })
  })
  it('love btn fill white when klick again', () => {
    get(API_URL_LIST, async restaurants => {
      const restaurant = restaurants.restaurants[0]
      await eventLoveBtn(restaurant)
      await $('#love-btn').click()
      const COLOR = $(BTN).style.fill
      expect(COLOR).toEqual('white')
    })
  })
})
