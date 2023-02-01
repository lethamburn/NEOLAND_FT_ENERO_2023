import "./Gallery.css";
import axios from "axios";

const template = () => `
<section class="gallery">
    <h2>Gallery</h2>
    <div class="container"></div>
</section>
`;

const getCharacters = () => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => printCharacters(res.data.results));
};

const printCharacters = (characters) => {
  for (const character of characters) {
    document.querySelector(
      ".container"
    ).innerHTML += `<img src=${character.image} alt=${character.name} />`;
  }
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getCharacters();
};
