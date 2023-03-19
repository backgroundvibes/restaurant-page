import { createHomepage } from "./homepage";

const content = document.querySelector("#content");

const renderHomepage = (() => {
  createHomepage();
})();
