/**
 * handle click if user click minimize btn
 * @arg {HTMLElement} EL_DETAIL
 * @return {void} - delete html
 */
export default function eventCloseBtn(EL_DETAIL,EL_LIST) {
  const BTN_CLOSE = document.getElementById('close-detail')
  BTN_CLOSE.onclick = () => {
    EL_DETAIL.innerHTML = ''
    EL_LIST.childNodes[1].focus()
  }
}
