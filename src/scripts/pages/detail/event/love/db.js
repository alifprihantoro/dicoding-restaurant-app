import FavoriteRestaurantIdb from '../../../../service/indexDb'

export default async function dbLove(restaurant) {
  const favoriteCek = await FavoriteRestaurantIdb.getRestaurant(restaurant.id).then((e) => e)
  if (favoriteCek === undefined) {
    const addToDb = await FavoriteRestaurantIdb.putRestaurant(restaurant)
      .then((e) => e)
      .catch(() => 'err')
    return addToDb
  }
  const addToDb = await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
    .then((e) => e)
    .catch(() => 'err')
  return addToDb
}
