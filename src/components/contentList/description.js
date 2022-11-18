/**
 * handle description cut word
 * @arg {string} DESCRIPTION_DATA - get full data description
 * @returns {string}
 */
export default function shortDescription (DESCRIPTION_DATA){
  const MAX_WORD = 15
  return DESCRIPTION_DATA.split(' ',MAX_WORD).join(' ')
}
