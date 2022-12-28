/* eslint-disable */
import { iconLove } from '../src/scripts/icon'
import eventLoveBtn from '../src/scripts/pages/detail/event/love'
import FavoriteRestaurantIdb from '../src/scripts/service/indexDb'
import $ from '../src/scripts/utils/element'
import getApiRestaurant from './helper/get'

describe('indexDb :', () => {
  const onClickBtn = async restaurant => {
    await eventLoveBtn(restaurant)
    await $('#love-btn').dispatchEvent(new Event('click'))
  }
  const addDetailRestaurant = async () => {
    document.body.innerHTML = `<button name='love button' id="love-btn">${iconLove()}</button>`
    const restaurant = await getApiRestaurant()
    await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
    await onClickBtn(restaurant)
  }
  beforeEach(async () => {
    await addDetailRestaurant()
  })
  it('should add restaurant after klick btn', async () => {
    const restaurant = await getApiRestaurant()
    const getRestaurant = await FavoriteRestaurantIdb.getRestaurant(
      restaurant.id
    )
    const isContain = getRestaurant !== undefined
    expect(isContain).toBeTrue()
  })
  it('should have restaurant after klick btn', async () => {
    const restaurant = await getApiRestaurant()
    const getRestaurant = await FavoriteRestaurantIdb.getRestaurant(
      restaurant.id
    )
    const isObject = typeof getRestaurant === 'object'
    expect(isObject).toBeTrue()
    const isContainFavoriteRestaurant = getRestaurant?.id === restaurant.id
    expect(isContainFavoriteRestaurant).toBeTrue()
  })
  it('should delete restaurant after klick btn if restaurant on favorite', async () => {
    const restaurant = await getApiRestaurant()
    await onClickBtn(restaurant)
    const getRestaurant = await FavoriteRestaurantIdb.getRestaurant(
      restaurant.id
    )
    const isContain = getRestaurant !== undefined
    expect(isContain).toBeFalse()
  })
})
