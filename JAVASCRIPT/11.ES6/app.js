//Template string
const name = "Peter";
const surname = "Parker";
const age = 25;
const quote = `Hola, mi nombre es ${name} ${surname}, y tengo ${age} años.`;
const myHTML = `
<div>
    <ul>
        <li>${name}</li>
        <li>${surname}</li>
    </ul>
</div>
`;

//Destructuring
const movie = {
  title: "Tenet",
  director: "Christopher Nolan",
  year: 2020,
  actors: {
    mainCharacter: "Noseque Washington",
    secondaryCharacter: "Robert Pattinson",
  },
};

/* const title = movie.title;
const year = movie["year"];
console.log(title);
console.log(year); */

const { title, director, year, actors } = movie;
const { mainCharacter } = actors;
console.log(mainCharacter);

const data = {
  fullName: "Pepito Perez",
  years: 60,
  job: "Full Stack Developer",
  experience: [
    {
      year: 1993,
      job: "Charcutero",
    },
    {
      year: 1999,
      job: "Bailarín",
    },
  ],
};
//Página about
const { fullName, years, job } = data;
//Página experience
const { experience } = data;

//Spread Operator
const heroes = ["Luke", "Leia", "Han Solo"];
const villains = ["Palpatine", "Darth Vader", "Moff Tarkin"];
const characters = [...heroes, ...villains, "Chewie"];
console.log(characters);

console.log([..."👨🏼‍💻"]);

//Map
const numbers = [1, 2, 3, 4, 5, 6];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

const humans = ["😀", "😀", "😀", "😀", "😀"];
const zombies = humans.map((human, index) => "🧟‍♀️" + index);
console.log(zombies);

const movies = [
  {
    title: "The Batman",
    year: 2022,
  },
  {
    title: "Dune",
    year: 2021,
  },
  {
    title: "Gremlins",
    year: 1985,
  },
];

const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);

const shows = [
  {
    title: "Breaking Bad",
    seasons: 5,
    year: 2004,
  },
  {
    title: "Cuéntame",
    seasons: 89,
    year: 1956,
  },
  {
    title: "Juego de Tronos",
    seasons: 7,
    year: 2008,
  },
];

const mappedShows = shows.map((show) => ({
  titulo: show.title,
  year: show.year,
  viewed: true,
}));

console.log(mappedShows);

const happyHumans = ["😀", "😡", "😀", "😀", "😀"];
const happyZombies = happyHumans.map((human) => (human != "😡" ? "🧟‍♂️" : "🤖"));
console.log(happyZombies);

//Filter
const ESDLAcharacters = [
  {
    name: "Frodo",
    species: "Hobbit",
    age: 24,
  },
  {
    name: "Legolas",
    species: "Elve",
    age: 160,
  },
  {
    name: "Sam",
    species: "Hobbit",
    age: 25,
  },
];

const hobbits = ESDLAcharacters.filter(
  (character) => character.species === "Hobbit"
);
console.log(hobbits);

const colors = ["red", "blue", "green", "yeLLow", "bLack", "white"];
const onlyLWord = colors.filter((color) => color.toLowerCase().includes("l"));
console.log(onlyLWord);

const youngCharacters = ESDLAcharacters.filter(
  (character) => character.age < 80
);

console.log(youngCharacters);

//Find
const sam = ESDLAcharacters.find((character) => character.name === "Sam");
console.log(sam);

//Reduce
const charactersAges = ESDLAcharacters.reduce(
  (acumulador, character) => acumulador + character.age,
  0
);

console.log(charactersAges);

//Every
const vegan = ["🥝", "🥝", "🥝", "🥝", "🍔", "🥝"];
const isVegan = vegan.every((item) => item === "🥝");
console.log("¿Todos son veganos?", isVegan);

//Some
const someIsVegan = vegan.some((item) => item === "🥝");
console.log("¿Hay algo vegano en el menú?", someIsVegan ? "Si" : "No");

//Mix
const superheroes = [
  {
    name: "Wolverine",
    type: "Mutant",
    power: 65,
  },
  {
    name: "Hulk",
    type: "Human",
    power: 80,
  },
  {
    name: "Magneto",
    type: "Mutant",
    power: 78,
  },
  {
    name: "Iron Man",
    type: "Human",
    power: 60,
  },
];

//1º Necesito generar un nuevo array de objetos en el que el "type" se transforme en "specie"
//2º Necesito quedarme con solamente los mutantes
//3º Necesito saber cual es el total de poder combinado de todos los mutantes

//1º
const superheroesSpecies = superheroes.map((superheroe) => ({
  name: superheroe.name,
  specie: superheroe.type,
  power: superheroe.power,
}));

console.log(superheroesSpecies);

//2º
/* for (let i = 0; i < superheroesSpecies.length; i++) {
  const superheroe = superheroesSpecies[i];
}
 */
const mutants = superheroesSpecies.filter(
  (superheroe) => superheroe.specie === "Mutant"
);

console.log(mutants);

//3º
const totalMutantPower = mutants.reduce((acc, mutant) => acc + mutant.power, 0);

/* let total = 0;
for (let i = 0; i < mutants.length; i++) {
  const mutant = mutants[i];
  total += mutant.power;
}
console.log(total); */

console.log(totalMutantPower);

//En una linea
const totalSpecieMutantPower = superheroes
  .map((superheroe) => ({
    name: superheroe.name,
    specie: superheroe.type,
    power: superheroe.power,
  }))
  .filter((superheroe) => superheroe.specie === "Mutant")
  .reduce((acc, mutant) => acc + mutant.power, 0);

console.log(totalSpecieMutantPower);
