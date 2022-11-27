/**
 * handle click if user click minimize btn
 * @arg {HTMLElement} EL_DETAIL
 * @return {void} - delete html
 */
export default function handleClosedeatail(EL_DETAIL) {
  const BTN_CLOSE = document.getElementById('close-detail')
  BTN_CLOSE.onclick = () => {
    EL_DETAIL.innerHTML = ''
      const URL = '#detail-show'
      window.location.href = URL;
  }
}
