import render from '../../utils/render'

export default function renderHome() {
  const CONTENT = `
    <a href="#title-list" class="skip-link">Menuju ke konten</a>
    <my-nav></my-nav>
    <my-hero></my-hero>
    <content-list></content-list>
    <my-footer></my-footer>
  `
  render('#root', CONTENT)
}
