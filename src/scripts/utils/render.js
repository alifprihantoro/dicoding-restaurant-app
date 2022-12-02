import $ from './element'

export default function render(element, html, callBack = function (a,e) {}) {
  $(element).innerHTML = html
  callBack($(element),html)
}
