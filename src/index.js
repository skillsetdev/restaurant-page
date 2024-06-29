import createMain from "./main-page";
import createMenu from "./menu";
function createNav() {
  const header = document.querySelector("#header");
  const nav = document.createElement("nav");
  const name = document.createElement("div");
  name.textContent = "La Belle Cucina";
  const mainButton = document.createElement("button");
  mainButton.id = "main-button";
  mainButton.textContent = "Main";
  mainButton.addEventListener("click", switchPages);
  const menuButton = document.createElement("button");
  menuButton.id = "menu-button";
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", switchPages);
  const contactButton = document.createElement("button");
  contactButton.id = "contact-button";
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", switchPages);
  nav.appendChild(name);
  nav.appendChild(mainButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  header.appendChild(nav);
}
function switchPages(e) {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  switch (e.target.id) {
    case "main-button":
      createMain();
      break;
    case "menu-button":
      createMenu();
      break;
    case "contact-button":
      alert("Sorry no contacts yet!");
      break;
  }
}

createNav();
createMain();
