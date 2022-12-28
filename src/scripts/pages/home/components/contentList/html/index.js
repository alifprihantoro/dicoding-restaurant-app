import notFound from './404'
import showList from './show'

export default function htmlContentListRestaurant({ restaurants, title }) {
  if (restaurants.length === 0) {
    return notFound(title)
  }
  return showList(title, restaurants)
}
