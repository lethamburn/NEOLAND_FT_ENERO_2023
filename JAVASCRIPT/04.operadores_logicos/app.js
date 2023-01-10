//Operadores logicos
const tengoCarnet = true;
const tengoCoche = false;

//Y - &&
const puedoConducir = tengoCarnet && tengoCoche;

//No puedo conducir porque tengoCarnet pero no tengoCoche
console.log(puedoConducir);

//O - ||
const puedoConducirOr = tengoCarnet || tengoCoche;
console.log(puedoConducirOr);

//EJEMPLO NO
const noPuedoConducir = !tengoCarnet || !tengoCoche;

//Operadores comparacion

const numA = 2;
//Igual que
const res = numA == "2";
console.log(res);

//Estrictamente igual
const resTwo = numA === 2;
console.log(resTwo);

//Diferente que
const resThree = numA != "2";
console.log(resThree);

//Estrictamente diferente
const resFour = numA !== "2";
console.log(resFour);

//Mayor que
const resFive = numA > 2;
console.log(resFive);

//Mayor o igual que
const resSix = numA >= 2;
console.log(resSix);

//Menor que
const resSeven = numA < 2;
console.log(resSeven);

//Menor o igual que
const resEight = numA <= 2;
console.log(resEight);
