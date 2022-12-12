import render from '../../utils/render'
// style
import './title.css'
// component
import './components/nav'
import './components/heroEl'
import './components/contentList'
import './components/footer'

export default function renderHome() {
  const CONTENT = `
    <my-nav></my-nav>
    <my-hero></my-hero>
    <content-list></content-list>
    <my-footer></my-footer>
  `
  render('#root', CONTENT)
}
