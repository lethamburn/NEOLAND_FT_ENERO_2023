//Bucles - Loops

const xmen = ["Wolverine", "Storm", "Cyclops", "Rogue", "Beast"];

for (let index = 0; index < xmen.length; index++) {
  const character = xmen[index];
  console.log(character, index);
}

//Arrancamos el bucle
//1º index = 0 ---- 0 < 5 ---- index++ -> xmen[0]
//2º index = 1 ---- 1 < 5 ---- index++ -> xmen[1]
//3º index = 2 ---- 2 < 5 ---- index++ -> xmen[2]
//4º index = 3 ---- 3 < 5 ---- index++ -> xmen[3]
//5º index = 4 ---- 4 < 5 ---- index++ -> xmen[4]
//6º index = 5 ---- 5 < 5 -----NO, ROMPO EL BUCLE

const family = ["Miercoles", "Cosa", "Morticia", "Fetido", "Gomez"];
const addamsFamily = [];

for (let i = 0; i < family.length; i++) {
  const member = family[i] + " Addams";
  addamsFamily.push(member);
}

console.log(addamsFamily);

for (let i = 1; i <= 10; i++) {
  if (i < 5) {
    console.log("Soy menor que 5");
  } else if (i >= 5 && i < 10) {
    console.log("Soy mayor o igual que 5 y menor que 10");
  } else {
    console.log("Soy un 10");
  }
}

const paises = ["Inglaterra", "China", "Francia", "España", "Portugal"];

for (const pais of paises) {
  console.log(pais);
}

paises.forEach((pais, i) => {
  console.log(pais, i);
});

const movie = {
  title: "Dune",
  year: 2021,
  director: "Denis Villeneuve",
};

console.log(movie["title"]);

for (const key in movie) {
  console.log(`La clave ${key} tiene como valor: ${movie[key]}`);
}

/* const movies = ["Dune", "Titanic", "Rambo"];

for (const key in movies) {
  console.log(key);
} */


const students = [
  {
    name: 'Marta',
    age: 30,
    isNeolander: true
  },
  {
    name: 'Carlos',
    age: 30,
    isNeolander: true
  },
  {
    name: 'Pepe',
    age: 21,
    isNeolander: false
  }
]

let studentsFilteredList = []
for (let i = 0; i < students.length; i++) {
  if (students[i].age == 30 && students[i].isNeolander) {
    studentsFilteredList.push(students[i])
  }
}

console.log(studentsFilteredList)

const listNumber = [3, 2, 1, 3]

for (const number of listNumber) {
  if (number == 3) listNumber.splice(listNumber.indexOf(number))
}

console.log(listNumber)


const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' },
  { id: 40, name: 'Paco' },
  { id: 40, name: 'El gato Doraemon' }
]

let listNoCats = []
for (const toy of toys) {
  if (toy.name.includes('gato') == false) {
    listNoCats.push(toy.name)
    console.log(toy.name)
    // toys.splice(toys.indexOf(toy))
  }
}

console.log(listNoCats)