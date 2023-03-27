import restaurantImage from "./restaurant.jpg";

const homePage = document.createElement("div");
homePage.setAttribute("class", "homepage");

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
const imageContainer = document.createElement("div");
const image = new Image();
const Description = document.createElement("p");
const quoteSect = document.createElement("div");
for (let i = 0; i < 6; i++) {
  let quote = document.createElement("p");
  quote.setAttribute("class", `quote${i + 1}`);
  quoteSect.appendChild(quote);
}
quoteSect.setAttribute("id", "quote-section");
const foot = document.createElement("div");

//Functions for filling website with content and appending to homePage node.
function homeHeader() {
  header.setAttribute("id", "home-header");
  homeTitle(header);
  homeTabs(header);
  homePage.appendChild(header);
}

function homeTitle(appendee) {
  Title.setAttribute("id", "home-title");
  Title.textContent = "Amazing Restaurant";
  appendee.appendChild(Title);
}

function homeTabs(appendee) {
  tabBar.getElementsByClassName("tab1")[0].textContent = "Home";
  tabBar.getElementsByClassName("tab2")[0].textContent = "Menu";
  tabBar.getElementsByClassName("tab3")[0].textContent = "Contact Us";

  appendee.appendChild(tabBar);
}

function homeImage() {
  imageContainer.setAttribute("id", "image-container");
  image.src = restaurantImage;
  image.setAttribute("id", "home-image");
  imageContainer.appendChild(image);
  homePage.appendChild(imageContainer);
}

function homeDescription() {
  Description.setAttribute("id", "home-description");
  Description.textContent =
    "Welcome to The Amazing Restaurant, where we are passionate about providing our guests with a memorable dining experience. Our menu features a wide variety of dishes, each prepared using only the freshest and highest quality ingredients. Whether youre joining us for brunch, lunch, or dinner, we have something to satisfy every palate. Our chefs use innovative cooking techniques to create dishes that are both delicious and visually stunning. In addition to our indoor seating area, we also have a lovely outdoor patio where you can enjoy your meal in the fresh air and sunshine. Our patio is the perfect place to relax and unwind with friends and family. At The Amazing Restaurant we also offer an extensive selection of wines, beers, and cocktails, all carefully chosen to complement our menu. Our knowledgeable staff can help you select the perfect pairing for your meal. Thank you for considering The Amazing Restaurant for your next dining experience. We look forward to serving you soon.";
  homePage.appendChild(Description);
}

function homeQuoteSection() {
  homeQuotes();
  homePage.appendChild(quoteSect);
}

function homeQuotes() {
  const quotes = [
    "From the moment I walked in, I knew I was in for a treat. The atmosphere was warm and inviting, and the service was impeccable. I couldn't wait to see what was on the menu, and I was not disappointed. This restaurant is a must-visit for anyone who loves great food and a great experience. -ChatGPT",
    "The flavors in every dish were exquisite, and the presentation was a work of art. Each bite was like a journey through a symphony of tastes and textures. This restaurant is truly a hidden gem that deserves to be discovered. -ChatGPT",
    "I've been to many restaurants in my time, but this one stands out as a true standout. The attention to detail is evident in everything from the décor to the food. This is a place where you can truly relax and enjoy a meal that is both satisfying and memorable. -ChatGPT",
    "This restaurant exceeded all of my expectations. The staff was friendly and attentive, and the food was out of this world. Every dish was prepared with care and attention to detail, and the flavors were perfectly balanced. I can't wait to come back and try more! -ChatGPT",
    "If you're looking for a dining experience that is both sophisticated and fun, this restaurant is the perfect choice. The menu is diverse and innovative, with something to please every palate. I can't recommend this place enough. -ChatGPT",
    "I was blown away by the quality of the food and the service at this restaurant. It's clear that the chef and staff take great pride in what they do, and it shows in every dish. This is the kind of restaurant that you'll want to come back to again and again. -ChatGPT",
  ];

  quoteSect.getElementsByClassName("quote1")[0].textContent = quotes[0];
  quoteSect.getElementsByClassName("quote2")[0].textContent = quotes[1];
  quoteSect.getElementsByClassName("quote3")[0].textContent = quotes[2];
  quoteSect.getElementsByClassName("quote4")[0].textContent = quotes[3];
  quoteSect.getElementsByClassName("quote5")[0].textContent = quotes[4];
  quoteSect.getElementsByClassName("quote6")[0].textContent = quotes[5];
}

function homeFooter() {
  foot.setAttribute("id", "home-footer");
  foot.textContent = "Photo by Annie Spratt on Unsplash";
  homePage.appendChild(foot);
}

function createHomepage() {
  homeHeader();
  homeImage();
  homeDescription();
  homeQuoteSection();
  homeFooter();
  content.appendChild(homePage);
}

export { createHomepage };
