function doNothing() {}
export default function component({ NAME_TAG, HTML, CALLBACK = doNothing }) {
  class Component extends HTMLElement {
    connectedCallback() {
      this.innerHTML = HTML
      CALLBACK()
    }
  }
  customElements.define(NAME_TAG, Component)
}
