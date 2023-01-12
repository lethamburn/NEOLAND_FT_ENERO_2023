//Tiene un scope global
const list = [1, 2, 3, 4, 5];

for (const item of list) {
  console.log(item);
}

const viewItem = () => {
  for (const item of list) {
    console.log(item);
  }
  //X tiene un scope local
  const x = 10;
  //Aquí si puedo ver x porque estoy en el mismo scope
  console.log(x);
};

//No puedo ver x porque tiene un scope local dentro de viewItem
console.log(x);
//Si puedo ver que tiene list porque tiene un scope global
console.log(list);
