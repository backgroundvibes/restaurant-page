const content = document.querySelector("#content");

function createTitle() {
  const Title = document.createElement("h1");
  Title.textContent = "Amazing Restaurant";
  content.appendChild(Title);
}

function createDescription() {
  const Description = document.createElement("p");
  Description.textContent =
    "wow look how amazing this restaurant is so amazing wow";
  content.appendChild(Description);
}

export { createTitle, createDescription };
