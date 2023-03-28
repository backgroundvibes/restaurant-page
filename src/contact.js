const contactPage = document.createElement("div");
contactPage.setAttribute("class", "contact-page");

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
function contactHeader() {
  header.setAttribute("id", "header");
  contactTitle(header);
  contactTabs(header);
  contactPage.appendChild(header);
}

function contactTitle(appendee) {
  Title.setAttribute("id", "title");
  Title.textContent = "Contact Us";
  appendee.appendChild(Title);
}

function contactTabs(appendee) {
  tabBar.getElementsByClassName("tab1")[0].textContent = "Home";
  tabBar.getElementsByClassName("tab2")[0].textContent = "Menu";
  tabBar.getElementsByClassName("tab3")[0].textContent = "Contact Us";

  appendee.appendChild(tabBar);
}

function createContactPage() {
  contactHeader();
  content.appendChild(contactPage);
}

export { createContactPage };
