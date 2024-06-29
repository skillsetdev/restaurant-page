import imageSrc from "./_42076939-433d-45ff-88fa-aaee6b24b369.jpg";

function createMenu() {
  const content = document.querySelector("#content");
  const text = document.createElement("div");
  const img = document.createElement("img");
  img.src = imageSrc;
  text.textContent = "Our Menu:";
  content.appendChild(text);
  content.appendChild(img);
}
export default createMenu;
