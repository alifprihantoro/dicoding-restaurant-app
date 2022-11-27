import './main.css'
import './mobile.css'
import { iconMap } from '../icon'
import { iconClose } from './icon'
import reviewUser from './review/html'
import countRating from "./star";
/**
 * html content detail restaurant
 * @arg {object} DATA
 * @arg {string} id
 * @arg {string} name
 * @arg {string} description
 * @arg {string} pictureId
 * @arg {string} city
 * @arg {number} rating
 * @arg {string} address
 * @arg {object} categories
 * @arg {string} name
 * @arg {object} menus
 * @arg {array} food
 * @arg {string} name
 * @arg {array} drink
 * @arg {string} name
 */
export default function htmlContent(DATA) {
  const { name, description, pictureId, city, rating, address } = DATA
  return `
    <div id="detail-restaurant">
      <div class="pembungkus">
        <button
          id="close-detail"
          name="button close"
        >
          ${iconClose()}
        </button>
        <div class="flex">
          <img
            tabindex="0"
            src="https://restaurant-api.dicoding.dev/images/small/${pictureId}"
            alt="image ${name}"
          />
          <div class="list">
            <h2
              title="title"
              tabindex="0"
            >
              ${name}
            </h2>
            <h3
              title="city"
              tabindex="0"
            >
              ${iconMap()} ${city}
            </h3>
            <h3
              title="address"
              tabindex="0"
            >
              ${iconMap()} ${address}
            </h3>
            <p
              title="description"
              tabindex="0"
            >
              ${description}
            </p>
          </div>
        </div>
        <div class="rating">
          <h3>User Rating ${countRating(rating)}</h3>
          <h3>
            ${rating} average based on ${DATA.customerReviews.length} reviews.
          </h3>
          <br>
          ${reviewUser(DATA)}
        </div>
      </div>
    </div>
  `
}
