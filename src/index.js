import { createHomepage } from "./homepage";
import "./style.css";

const content = document.querySelector("#content");

const renderHomepage = (() => {
  createHomepage();
})();
