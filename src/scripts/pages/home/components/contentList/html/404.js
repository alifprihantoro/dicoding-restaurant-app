export default function notFound(title) {
  return `
      <h2 id="title-list" class="title" tabindex="0" id="maincontent">
        <span>${title} Restaurants wkwk</span>
      </h2>
      <div class="warning">
        <p>anda belum memasukkan favorite restaurants</p>
        <a class="btn" href="/">return to home</a>
      </div>
    `
}
