import restaurantImage from "./restaurant.jpg";

const homePage = document.createElement("div");
homePage.setAttribute("class", "homepage");

function homeHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "home-header");
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
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("id", "image-container");
  const image = new Image();
  image.src = restaurantImage;
  image.setAttribute("id", "home-image");
  imageContainer.appendChild(image);
  homePage.appendChild(imageContainer);
}

function homeDescription() {
  const Description = document.createElement("p");
  Description.setAttribute("id", "home-description");
  Description.textContent =
    "Welcome to The Amazing Restaurant, where we are passionate about providing our guests with a memorable dining experience. Our menu features a wide variety of dishes, each prepared using only the freshest and highest quality ingredients. Whether youre joining us for brunch, lunch, or dinner, we have something to satisfy every palate. Our chefs use innovative cooking techniques to create dishes that are both delicious and visually stunning. In addition to our indoor seating area, we also have a lovely outdoor patio where you can enjoy your meal in the fresh air and sunshine. Our patio is the perfect place to relax and unwind with friends and family. At The Amazing Restaurant we also offer an extensive selection of wines, beers, and cocktails, all carefully chosen to complement our menu. Our knowledgeable staff can help you select the perfect pairing for your meal. Thank you for considering The Amazing Restaurant for your next dining experience. We look forward to serving you soon.";
  homePage.appendChild(Description);
}

function homeFooter() {
  const foot = document.createElement("div");
  foot.setAttribute("id", "home-footer");
  foot.textContent = "Photo by Annie Spratt on Unsplash";
  homePage.appendChild(foot);
}

function createHomepage() {
  homeHeader();
  homeImage();
  homeDescription();
  homeFooter();
  content.appendChild(homePage);
}

export { createHomepage };
