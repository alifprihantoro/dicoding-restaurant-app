import { API_URL_LIST } from '../../src/scripts/config'

export default async function getApiRestaurant() {
  const restaurant = await fetch(API_URL_LIST)
    .then((res) => res.json())
    .then(({ restaurants }) => restaurants[0])
  return restaurant
}
