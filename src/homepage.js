import restaurantImage from "./restaurant.jpg";

function homeTitle() {
  const Title = document.createElement("h1");
  Title.textContent = "Amazing Restaurant";
  content.appendChild(Title);
}

function homeImage() {
  const homeImage = new Image();
  homeImage.src = restaurantImage;
  content.appendChild(homeImage);
}

function homeDescription() {
  const Description = document.createElement("p");
  Description.textContent =
    "wow look how amazing this restaurant is so amazing wow";
  content.appendChild(Description);
}

export { homeTitle, homeImage, homeDescription };
