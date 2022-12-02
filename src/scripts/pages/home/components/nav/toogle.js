/**
 * event for navigation toogle
 * @returns {void} toogle class open
 */
export default function toogleNav() {
  const navHumberger = document.getElementById('nav-btn')
  navHumberger.addEventListener('click', () => {
    const NAV_ID = document.getElementById('nav')
    NAV_ID.classList.toggle('open')
  })
}
