import { iconStar as halfStarIcon, fullStarIcon, emtyStarIcon } from '../../../../icon'

export default function countRating(rating) {
  const MODULUS = rating % 1
  const PEMBULATAN_RATING = rating - MODULUS
  let CONTEN = ''
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < PEMBULATAN_RATING; i++) {
    CONTEN += fullStarIcon()
  }
  if (MODULUS === 0) {
    const TOTAL_EMTY_STAR = 5 - rating
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < TOTAL_EMTY_STAR; i++) {
      CONTEN += emtyStarIcon()
    }
  } else {
    const TOTAL_EMTY_STAR = 5 - rating - 1
    CONTEN += halfStarIcon()
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < TOTAL_EMTY_STAR; i++) {
      CONTEN += emtyStarIcon()
    }
  }
  return CONTEN
}
