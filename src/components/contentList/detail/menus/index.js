import listMenu from './list'
import './main.css'
import './desktop.css'

export default function menusRestaurant({ menus }) {
  const { foods, drinks } = menus
  const FOOD_CONTENT = listMenu({
    title: 'List Food',
    className: 'left',
    listMenus: foods,
  })
  const DRINK_CONTENT = listMenu({
    title: 'List Drink',
    className: 'right',
    listMenus: drinks,
  })
  const MENU_CONTENT = `
    <div class="flex menus">${FOOD_CONTENT + DRINK_CONTENT}</div>
  `
  return MENU_CONTENT
}
