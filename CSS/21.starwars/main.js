import "./style.css";

const container = document.querySelector("#app");

container.innerHTML = `<div class="spinner_container"><span class="spinner"></span></div>`;

const getCharacters = async () => {
  const res = await fetch(
    "https://starwars-databank.vercel.app/characters?page=1&limit=40"
  );
  const data = await res.json();
  container.innerHTML = "";
  mapCharacters(data.characters);
};

const mapCharacters = (characters) => {
  const mappedCharacters = characters.map((character) => ({
    name: character.name,
    description: character.description,
    image: character.image,
  }));

  printCharacters(mappedCharacters);
};

const printCharacters = (characters) => {
  for (const character of characters) {
    container.innerHTML += `
      <figure>
      <div class="image_container">
        <img src=${character.image} alt=${character.name} />
        </div>
        <h2>${character.name}</h2>
        <div class="description">
        <p>${character.description}</p>
        </div>
      </figure>
    `;
  }
};

getCharacters();
