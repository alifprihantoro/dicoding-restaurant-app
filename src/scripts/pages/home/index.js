import render from '../../utils/render'
// style
import './title.css'
// component
import './components/nav'
import './components/heroEl'
import './components/contentList'
import './components/footer'

const CONTENT = `
  <a href="#maincontent" class="skip-link">Menuju ke konten</a>
  <my-nav></my-nav>
  <my-hero></my-hero>
  <content-list></content-list>
  <my-footer></my-footer>
`
render('#root', CONTENT)