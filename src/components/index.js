// reset style
import "../styles/var.css";
import "../styles/reset.css";

// component
import "./nav";
import "./heroEl";

const root = document.getElementById("root");
root.innerHTML = `
  <my-nav></my-nav>
  <my-hero></my-hero>
  <my-list></my-list>
  <my-footer></my-footer>
`;
