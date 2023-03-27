import { createHomepage } from "./homepage";
import "./style.css";

const content = document.querySelector("#content");

createHomepage();

const tabs = document.querySelectorAll("#tab-bar");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    if (e.target.textContent == "Home") {
      let toRemove = tab.closest("#content > div");
      toRemove.remove();
      createHomepage();
    }
  });
});
