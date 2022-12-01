export default function get(URL, CALLBACK) {
  fetch(URL)
    .then((res) => res.json())
    .then((DATAS) => {
      CALLBACK(DATAS)
    })
}
