import restaurantImage from "./restaurant.jpg";

const homePage = document.createElement("div");
homePage.setAttribute("class", "homepage");

function homeTitle() {
  const Title = document.createElement("h1");
  Title.setAttribute("id", "home-title");
  Title.textContent = "Amazing Restaurant";
  homePage.appendChild(Title);
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
  homeTitle();
  homeImage();
  homeDescription();
  content.appendChild(homePage);
}

export { createHomepage };
