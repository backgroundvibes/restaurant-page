const menuPage = document.createElement("div");
menuPage.setAttribute("class", "menu-page");

//Cache Dom
const header = document.createElement("div");
const Title = document.createElement("h1");
const tabBar = document.createElement("div");
for (let i = 0; i < 3; i++) {
  const tab = document.createElement("button");
  tab.setAttribute("class", `tab${i + 1}`);
  tabBar.appendChild(tab);
}
tabBar.setAttribute("id", "tab-bar");

//Functions for filling website with content and appending to homePage node.
function menuHeader() {
  header.setAttribute("id", "header");
  menuTitle(header);
  menuTabs(header);
  menuPage.appendChild(header);
}

function menuTitle(appendee) {
  Title.setAttribute("id", "title");
  Title.textContent = "Menu";
  appendee.appendChild(Title);
}

function menuTabs(appendee) {
  tabBar.getElementsByClassName("tab1")[0].textContent = "Home";
  tabBar.getElementsByClassName("tab2")[0].textContent = "Menu";
  tabBar.getElementsByClassName("tab3")[0].textContent = "Contact Us";

  appendee.appendChild(tabBar);
}

function createMenuPage() {
  menuHeader();
  content.appendChild(menuPage);
}

export { createMenuPage };
