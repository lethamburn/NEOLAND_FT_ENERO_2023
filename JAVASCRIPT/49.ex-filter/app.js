const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const BASE_URL = "https://rickandmortyapi.com/api/character";
let allCharacters = [];

const init = () => {
  getCharacters();
};

const getCharacters = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  const characters = data.results;
  mapCharacters(characters);
};

const mapCharacters = (characters) => {
  allCharacters = characters.map((character) => ({
    name: character.name,
    status: character.status,
    image: character.image,
    origin: character.origin.name,
  }));
  printCharacters(allCharacters);
};

const printCharacters = (characters) => {
  const container = document.querySelector("#app");
  container.innerHTML = "";
  for (const character of characters) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>${character.name}</h2>
    <h3 class=${character.status.toLowerCase()}>${character.status}</h3>
    <h3>${character.origin}</h3>
    <img src=${character.image} alt=${character.name} />
    `;
    container.appendChild(div);
  }
};

//Le pasamos una lista de characters (seran los characters globales)
const filterCharacters = (characters) => {
  //Creamos un nuevo array filtrando los personajes
  const filteredCharacters = characters.filter((character) =>
    //El nombre del personaje en minuscula tiene que incluir el valor de input en minuscula
    character.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  printCharacters(filteredCharacters);
};

/* searchInput.addEventListener("input", () => filterCharacters(allCharacters)); */
searchBtn.addEventListener("click", () => filterCharacters(allCharacters));

init();

//AVISO! NO HAGAIS MAS PETICIONES AL FILTRAR -> RECUPERAD LOS DATOS Y TRABAJAD CON LOS DATOS RECUPERADOS, NO HAGAIS SOBRE-PETICIONES

//EN VEZ DE PONER UN INPUT SE PUEDEN PONER BOTONES PARA FILTRAR
//SI CLICAS EN UN BOTON QUE PONGA ALIVE, SE FILTRAR LOS PERSONAJES CUYO status === "Alive"
//SI CLICAS EN UN BOTON QUE PONGA DEAD, SE FILTRAN LOS PERSONAJES CUYO status === "Dead"
