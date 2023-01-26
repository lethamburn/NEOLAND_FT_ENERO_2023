//Declaramos una función
const addItem = (item, list) => {
  //Generamos una promesa
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject("No existe la lista");
    }

    setTimeout(() => {
      list.push(item);
      resolve(list);
    }, 2000);
  });

  return promise;
};

const items = ["Ordenador", "Videoconsola", "TV"];

addItem("Lavadora", items)
  .then((list) => {
    console.log(list);
  })
  .catch((err) => {
    throw new Error(err);
  });
