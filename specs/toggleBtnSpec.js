/* eslint-disable */
import { iconLove } from '../src/scripts/icon'
import togleBtnLove from '../src/scripts/pages/detail/event/love/toggle'
import $ from '../src/scripts/utils/element'

describe('like btn :', () => {
  const BTN = '#love-btn svg'
  const addDetailRestaurant = async () => {
    document.body.innerHTML = `<button name='love button' id="love-btn">${iconLove()}</button>`
    const clickBtn = async () => {
      await togleBtnLove()
    }
    $('#love-btn').onclick = clickBtn
  }
  beforeEach(async () => {
    await addDetailRestaurant()
  })
  it('should have love btn', async () => {
    expect($(BTN)).toBeDefined()
  })
  it('love btn fill white when in first', async () => {
    const COLOR = await $(BTN).style.fill
    expect(COLOR).toEqual('white')
  })
  it('love btn fill red when click if fill on white', async () => {
    await $('#love-btn').dispatchEvent(new Event('click'))
    const COLOR = await $(BTN).style.fill
    expect(COLOR).toEqual('red')
  })
  it('love btn fill white when click if fill on red', async () => {
    $(BTN).style.fill = 'red'
    await $('#love-btn').dispatchEvent(new Event('click'))
    const COLOR = await $(BTN).style.fill
    expect(COLOR).toEqual('white')
  })
})
