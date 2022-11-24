// reset style
import "../styles/var.css";
import "../styles/reset.css";
import "./title.css";
import "../styles/mobile.css";

// component
import "./nav";
import "./heroEl";
import "./contentList";
import "./footer";

const root = document.getElementById("root");
root.innerHTML = `
  <a href="#maincontent" class="skip-link">Menuju ke konten</a>
  <my-nav></my-nav>
  <my-hero></my-hero>
  <content-list></content-list>
  <my-footer></my-footer>
`;
