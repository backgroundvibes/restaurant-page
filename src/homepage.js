const Home = () => {
  const content = document.querySelector("#content");
  const Title = document.createElement("h1");

  Title.textContent = "Amazing Restaurant";
  content.appendChild(Title);
};

export { Home };
