import "./main.css";
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>Copyright © 2022 - MuryP Food</footer>
    `
  }
}
customElements.define('my-footer', MyFooter)
