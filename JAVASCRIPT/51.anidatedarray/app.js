const getPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/235");
  const data = await res.json();
  printPokemon(data);
};

const printPokemon = (pokemon) => {
  const container = document.querySelector("#app");
  container.innerHTML = `
  <h2>${pokemon.name}</h2>
  <img src=${pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt=${pokemon.name} />
  `;
  for (const tp of pokemon.types) {
    const p = document.createElement("p");
    p.innerText = tp.type.name;
    container.appendChild(p);
  }
};

//Le hacemos el .join al final para que no salga la coma porque lo estamos pintando dentro del HTML:
//${pokemon.types.map((el) => `<p>${el.type.name}</p>`).join("")}
getPokemon();
