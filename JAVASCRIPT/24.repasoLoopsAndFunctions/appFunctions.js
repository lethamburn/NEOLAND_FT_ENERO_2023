//Funciones
//1º Comprar los ingrendientes: Huevo, aceite, sal
//2º Calentar el aceite
//3º Echar el huevo x tiempo
//4º Servir el huevo

const huevoDeTiranosaurio = "🥚";
const aceiteDeGirasol = "🧴";
const salDelHimalaya = "🧂";

//Declaramos funcion hacerUnHuevoFrito que acepta 3 argumentos
const hacerUnHuevoFrito = (
  ingredienteHuevo,
  ingredienteAceite,
  ingredienteSal
) => {
  console.log(
    `Tenemos como ingredientes: ${ingredienteHuevo}, ${ingredienteAceite}, ${ingredienteSal} `
  );
  //Dentro de hacerUnHuevoFrito se empieza a ejecutar calentarElAceite y le pasamos argumentos
  calentarElAceite(ingredienteAceite, ingredienteHuevo, ingredienteSal);
};

const calentarElAceite = (
  ingredienteAceite,
  ingredienteHuevo,
  ingredienteSal
) => {
  console.log(`Calentando el ${ingredienteAceite}`);
  freirHuevoYSalarlo(ingredienteHuevo, ingredienteSal);
};

const freirHuevoYSalarlo = (ingredienteHuevo, ingredienteSal) => {
  console.log(
    `Acabamos de echar el ${ingredienteHuevo} y le ponemos un poquito de ${ingredienteSal}`
  );
  servirHuevoFrito();
};

const servirHuevoFrito = () => {
  console.log(`Servimos el huevo y a comer 🍳`);
};

//Es la única que ejecutamos nosotros
hacerUnHuevoFrito(huevoDeTiranosaurio, aceiteDeGirasol, salDelHimalaya);

const actual = new Date();
const yearActual = actual.getFullYear();
//EJEMPLO 2
const calcularEdad = (bornYear, name, actualYear = yearActual) => {
  const age = actualYear - bornYear;
  generadorNombreYEdad(name, age);
};

const generadorNombreYEdad = (name, age) => {
  console.log(`Te llamas ${name} y tienes ${age} años.`);
};

calcularEdad(1990, "Antonio");
//Caso de uso fuera de negocio
generadorNombreYEdad("Pepe", 78);
