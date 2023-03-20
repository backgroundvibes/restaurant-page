import restaurantImage from "./restaurant.jpg";

const homePage = document.createElement("div");
homePage.setAttribute("class", "homepage");

function homeHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  homeTitle(header);
  homeTabs(header);
  homePage.appendChild(header);
}

function homeTitle(head) {
  const Title = document.createElement("h1");
  Title.setAttribute("id", "home-title");
  Title.textContent = "Amazing Restaurant";
  head.appendChild(Title);
}

function homeTabs(head) {
  const tabBar = document.createElement("div");
  tabBar.setAttribute("id", "tab-bar");
  for (let i = 0; i < 3; i++) {
    const tab = document.createElement("button");
    tab.setAttribute("id", `tab${i + 1}`);
    if (i == 0) {
      tab.textContent = "Home";
    } else if (i == 1) {
      tab.textContent = "Menu";
    } else if (i == 2) {
      tab.textContent = "Contact Us";
    } else {
      console.log("homeTabs if statement went wrong");
    }
    tabBar.appendChild(tab);
  }
  head.appendChild(tabBar);
}

function homeImage() {
  const image = new Image();
  image.src = restaurantImage;
  image.setAttribute("id", "home-image");
  homePage.appendChild(image);
}

function homeDescription() {
  const Description = document.createElement("p");
  Description.setAttribute("id", "home-description");
  Description.textContent =
    "wow look how amazing this restaurant is so amazing wow";
  homePage.appendChild(Description);
}

function createHomepage() {
  homeHeader();
  homeImage();
  homeDescription();
  content.appendChild(homePage);
}

export { createHomepage };
