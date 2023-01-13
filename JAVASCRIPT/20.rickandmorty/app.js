const data = require("./characters.json");
const dataTwo = require("./characters2.json");
const dataSW = require("./characterssw.json");

//Almacenamos los personajes de results
const characters = data.results;
const charactersPageTwo = dataTwo.results;
const charactersStarWars = dataSW.characters;

//1º Hacer una función que recupere todos los personajes que tengan la palabra "Rick" en su nombre
const rickCharacters = () => {
  return characters.filter((rickCharacter) =>
    rickCharacter.name.toLowerCase().includes("rick")
  );
};

const ricks = rickCharacters();
console.log("RICKS->", ricks);

//2º Mejorar la función anterior para que se pueda buscar cualquier personaje según su nombre
const filterCharacters = (nameCharacter) => {
  return characters.filter((character) =>
    character.name.toLowerCase().includes(nameCharacter.toLowerCase())
  );
};

const smiths = filterCharacters("sMitH"); //smith por toLowerCase

// Se puede hacer lo mismo sin ES6
const oldFilterCharacters = (nameCharacter) => {
  const filteredCharacters = [];
  characters.forEach((character) => {
    if (character.name.toLowerCase().includes(nameCharacter.toLowerCase())) {
      filterCharacters.push(character);
    }
  });
  return filteredCharacters;
};

//3º Recuperar todos los personajes que estén vivos
const aliveCharacters = () => {
  return characters.filter((character) => character.status === "Alive");
};

console.log(aliveCharacters());

//4º Una función que reciba como param el status del personaje ("Alive", "Dead" o "unknown") y, tras un comprobación, que te devuelva el array corresondiente o un mensaje diciendo como tiene que ser ese param. El objetivo es que solo puedas usar esas tres opciones.,

const checkCharacterStatus = (checkStatus, list) => {
  if (
    checkStatus === "Alive" ||
    checkStatus === "Dead" ||
    checkStatus === "unknown"
  ) {
    return list.filter((character) => character.status === checkStatus);
  } else {
    return "Status solo puede ser 'Alive', 'Dead' o 'unknown'";
  }
};

console.log(checkCharacterStatus("De parranda", characters));

//4º Crear una función que recupere de cualquier array los personajes que contengan en el nombre la palabra que le indiquemos a través de "name"
/* const filterAnyCharacter = (name, list) => {
  const res = list.filter((character) =>
    character.toLowerCase().includes(name.toLowerCase())
  );

  if (res.length) {
    return res;
  } else {
    return "No existe ninguna coincidencia";
  }
};
 */
/* console.log(filterAnyCharacter("Rick", characters));
console.log(filterAnyCharacter("Pepe", charactersPageTwo));
console.log(filterAnyCharacter("Rick", charactersStarWars)); */

//5º Generar un nuevo array con los characters que incluyan el nombre, el status, el nombre del origen en una clave llamada origin, el nombre de location en una clave llamada location y la imagen. Y QUE ESTEN VIVOS.
const generateNewAliveCharacters = (list) => {
  const res = list.map((character) => ({
    name: character.name,
    status: character.status,
    origin: character.origin.name,
    location: character.location.name,
    image: character.image,
  }));
  return checkCharacterStatus("Alive", res);
};

console.log(generateNewAliveCharacters(characters));
