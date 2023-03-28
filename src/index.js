import { createHomepage } from "./homepage";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";
import "./style.css";

const content = document.querySelector("#content");

createHomepage();
const tabBar = document.querySelectorAll("#tab-bar");

const eventListenAdd = () => {
  let tabs = document.querySelectorAll("#tab-bar");
  tabs.forEach((tab) => {
    tab.addEventListener("click", pageGenerate);
  });
  let removeEventListen = () => {
    tabs.forEach((tab) => {
      tab.removeEventListener("click", pageGenerate);
    });
  };
  return { removeEventListen };
};

eventListenAdd();

function pageGenerate(e) {
  let toRemove = content.firstElementChild;
  toRemove.remove();
  if (e.target.textContent == "Home") {
    eventListenAdd.removeEventListen;
    createHomepage();
    eventListenAdd();
  } else if (e.target.textContent == "Menu") {
    eventListenAdd.removeEventListen;
    createMenuPage();
    eventListenAdd();
  } else if (e.target.textContent == "Contact Us") {
    eventListenAdd.removeEventListen;
    createContactPage();
    eventListenAdd();
  }
}

function removeEventListen() {}
