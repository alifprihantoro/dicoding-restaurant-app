export default function listMenu({ className, listMenus, title }) {
  const CONTENT = listMenus
    .map(({ name }) => {
      return ` <span class="list">${name}</span> `
    })
    .join('')

  const COUNTAINER = `
    <div class="${className}">
      <h3 class="title"><span>${title}</span></h3>
      <div class="content-menus">${CONTENT}</div>
    </div>
  `
  return COUNTAINER
}
