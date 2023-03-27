import { createHomepage } from "./homepage";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";
import "./style.css";

const content = document.querySelector("#content");

createHomepage();

const tabs = document.querySelectorAll("#tab-bar");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    let toRemove = tab.closest("#content > div");
    toRemove.remove();
    if (e.target.textContent == "Home") {
      createHomepage();
    } else if (e.target.textContent == "Menu") {
      createMenuPage();
    } else if (e.target.textContent == "Contact Us") {
      createContactPage();
    }
  });
});
