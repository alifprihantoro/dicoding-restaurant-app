import $ from './element'

function defaultFunction(element, html) {
  return { element, html }
}
export default function render(element, html, callBack = defaultFunction) {
  $(element).innerHTML = html
  callBack($(element), html)
}
