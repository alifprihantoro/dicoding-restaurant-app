import $ from "./element";

export default function render (element,html){
  $(element)[0].innerHTML = html
}
