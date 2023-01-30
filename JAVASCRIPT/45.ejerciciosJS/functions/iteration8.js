//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

//SOLUCION 1
/* function repeatCounter(param) {
  //Inicializamos el contador para el resultado final
  let counter = [];
  //Recorrer las palabras
  for (let i = 0; i < param.length; i++) {
    //Si la palabra no está en counter
    console.log(counter[param[i]], i);
    if (counter[param[i]] !== undefined) {
      //Le metemos la palabra y le sumamos 1
      counter[param[i]]++;
    } else {
      counter[param[i]] = 1;
    }
  }

  return counter;
}

console.log(repeatCounter(counterWords)); */

//SOLUCION 2

function repeatCounter(paramRept) {
  //Inicializamos un objeto vacio
  const emptyObject = {};
  //Recorremos cada una de las palabras
  for (word of paramRept) {
    //Si la palabra esta dentro del objeto
    if (word in emptyObject) {
      //Clave += 1
      emptyObject[word] += 1;
      //Si no esta en el objeto, es simplemente = 1
    } else emptyObject[word] = 1;
  }
  return emptyObject;
}
console.log(repeatCounter(counterWords));
