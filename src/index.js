import { createTitle, createDescription, renderImage } from "./dom.js";

const renderHomepage = (() => {
  createTitle();
  renderImage();
  createDescription();
})();
