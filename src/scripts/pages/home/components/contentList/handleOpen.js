import handleDetailListPost from '../../../detail'
/**
 * handle click for detail
 * @arg {object[]} restaurants
 * @arg {string} id
 * @arg {string} name
 * @arg {string} description
 * @arg {string} pictureId
 * @arg {string} city
 * @arg {number} rating
 */
export default function handleClickDetail(restaurants) {
  const IMG_EL = document.querySelectorAll('.detail-show') // <HTMLCollection>
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < IMG_EL.length; i++) {
    const IMG_EL_TARGET = IMG_EL[i] // <HTMLElement>
    const clickImage = (e) => {
      const INDEX_DATA = e.path[1].getAttribute('value') // <number> get value number klick
      handleDetailListPost(restaurants[INDEX_DATA], IMG_EL[INDEX_DATA])
    }
    IMG_EL_TARGET.onclick = clickImage
  }
}
