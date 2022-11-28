import reviewUser from './review/html'
import countRating from './star'
import './main.css'
export default function bottomDetail(DATAS) {
  const { rating, customerReviews } = DATAS
  return `
    <div class="rating">
      <div class="left">
        <div class="rating-header">User Rating ${countRating(rating)}</div>
        <div class="rating-bottom">
          ${rating} average based on ${customerReviews.length} reviews.
        </div>
      </div>
      <div class="right">${reviewUser(customerReviews)}</div>
    </div>
  `
}
