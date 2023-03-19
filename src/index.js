import { homeTitle, homeImage, homeDescription } from "./homepage";

const content = document.querySelector("#content");

const renderHomepage = (() => {
  homeTitle();
  homeImage();
  homeDescription();
})();
