import $ from '../../../../utils/element'

export default async function togleBtnLove() {
  const BTN_LOVE = await $('#love-btn svg').style.fill
  $('#love-btn svg').style.fill = BTN_LOVE === 'white' ? 'red' : 'white'
}
