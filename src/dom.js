import restaurantImage from "./restaurant.jpg";

const content = document.querySelector("#content");

function createTitle() {
  const Title = document.createElement("h1");
  Title.textContent = "Amazing Restaurant";
  content.appendChild(Title);
}

function renderImage() {
  const homeImage = new Image();
  homeImage.src = restaurantImage;
  content.appendChild(homeImage);
}

function createDescription() {
  const Description = document.createElement("p");
  Description.textContent =
    "wow look how amazing this restaurant is so amazing wow";
  content.appendChild(Description);
}

export { createTitle, renderImage, createDescription };
