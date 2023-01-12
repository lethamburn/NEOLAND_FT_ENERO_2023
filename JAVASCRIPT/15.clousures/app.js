/*
const saludo = () => {
  const name = "hola";
  return name;
};

const saludoIndependiente = saludo();
console.log(saludoIndependiente);
 */

//Definimos la funcion principal
const principal = () => {
  //La funcion principal tiene una constante llamada x
  const x = "Hola";
  //La funcion principal va a definir una funcion llamda sub que hace uso de esa x (por scope) aparte de su propio argumento y
  const sub = (y) => {
    console.log(x, y);
  };
  //Lo que retorna principal es la función sub, cosa que podemos almacenar en una variable para convertierla en sub
  return sub;
};

//Almacenamos de manera aislada la función sub ejecutando principal sobre una constante
const nuevaFuncionSub = principal();

//Al ejecutar la nueva función sub y pasarle su argumento podemos ver como ha sido capaz de leer la variable x, porque viene dada de principal
nuevaFuncionSub("Adios");
