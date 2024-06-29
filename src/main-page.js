import imageSrc from "./_8613a0fd-2b74-491b-bca4-d39a2eca048f.jpg";

function createMain() {
  const content = document.querySelector("#content");
  const text = document.createElement("div");
  const img = document.createElement("img");
  img.src = imageSrc;
  text.textContent =
    "Welcome to La Bella Cucina, where culinary artistry meets the warmth of home. Nestled in the heart of downtown, our restaurant offers a unique blend of traditional Italian flavors and contemporary flair. Each dish is crafted with the finest ingredients, sourced locally and imported from Italy, ensuring an authentic and unforgettable dining experience. Whether you're here for a casual lunch, a romantic dinner, or a special celebration, our cozy ambiance and attentive staff are dedicated to making your visit exceptional. Join us at La Bella Cucina and indulge in the essence of Italy, right in your neighborhood.";
  content.appendChild(img);
  content.appendChild(text);
}
export default createMain;
