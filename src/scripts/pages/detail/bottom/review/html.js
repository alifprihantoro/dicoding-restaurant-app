import './main.css'

export default function reviewUser(customerReviews) {
  const LIST_REVIEW_HTML = customerReviews.map((DATAS_REVIEW) => {
    const { name, date, review } = DATAS_REVIEW
    return `
      <div class="review-container">
        <div class="review-head" name='name and date review'>
          ${name} - ${date}
        </div>
        <p class='review-comment' name='comment review'>${review}</p>
      </div>
    `
  }).join('')
  return LIST_REVIEW_HTML
}
