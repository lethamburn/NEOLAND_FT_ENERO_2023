import inquirer from "inquirer";

const respuestas = [
  "RickyMorty: Te gusta mucho consultar APIs",
  "Doraimon: Tienes un bolsillo mágico",
  "Pikachu: Te gustan mucho los objetos anidados",
  "Asyncawait: Te gusta la asincronia",
];

inquirer
  .prompt([
    {
      name: "name",
      message: "¿Cual es tu nombre?",
    },
    {
      type: "list",
      name: "goal",
      message: "¿Cuál es tu objetivo en la vida?",
      choices: [
        "Beber",
        "Leer documentación",
        "No volverme loco",
        "Tener paciencia",
      ],
    },
  ])
  .then((answers) => {
    if (answers.goal === "Beber") {
      console.log(`${answers.name}, ${respuestas[0]}`);
    } else if (answers.goal === "Leer documentación") {
      console.log(`${answers.name}, ${respuestas[1]}`);
    } else if (answers.goal === "No volverme loco") {
      console.log(`${answers.name}, ${respuestas[2]}`);
    } else if (answers.goal === "Tener paciencia") {
      console.log(`${answers.name}, ${respuestas[3]}`);
    }
  });
