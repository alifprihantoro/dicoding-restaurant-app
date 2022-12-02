import { iconStar as halfStarIcon } from '../../../../icon'
import { fullStarIcon, emtyStarIcon } from '../../../../icon'
export default function countRating(rating) {
  const MODULUS = rating % 1
  const PEMBULATAN_RATING = rating - MODULUS
  let CONTEN = ''
  for (let i = 0; i < PEMBULATAN_RATING; i++) {
    CONTEN += fullStarIcon()
  }
  if (MODULUS == 0) {
    const TOTAL_EMTY_STAR = 5 - rating
    for (let i = 0; i < TOTAL_EMTY_STAR; i++) {
      CONTEN += emtyStarIcon()
    }
  } else {
    const TOTAL_EMTY_STAR = 5 - rating - 1
    CONTEN += halfStarIcon()
    for (let i = 0; i < TOTAL_EMTY_STAR; i++) {
      CONTEN += emtyStarIcon()
    }
  }
  return CONTEN
}
