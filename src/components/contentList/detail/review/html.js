export default function reviewUser({ customerReviews }) {
  const LIST_REVIEW_HTML= customerReviews.map((DATAS_REVIEW) => {
    const { name, date, review } = DATAS_REVIEW
    return `
      <div class="">
        <div class="">
          ${name} - ${date}
        </div>
        <p>${review}</p>
      </div>
    `
  })
  return LIST_REVIEW_HTML
}
