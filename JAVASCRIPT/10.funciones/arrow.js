const nameFunction = () => {
  console.log('Hola a todos')
}

const suma = (numA, numB) => {
  return numA + numB
}

const sumaReturnImp = (numA, numB) => numA + numB

const sayMyName = name => `hola tu nombre es ${name}`

// valor por defecto -> si no me envias un valor - le pongo el que tengo
const sumaDefaultParam = (numA = 5, numB = 8, numC = 14) => numA + numB + numC

let totalDefaultParam = sumaDefaultParam(10)

console.log(totalDefaultParam)

const sumaDefaultObject = (obj) => {
  let acc = 0;
  // for in -> recorre el objecto y te retorna su clave
  for (const pepe in obj) {
    console.log(typeof (obj[pepe]))
    // obj[pepe] -> recoger el valor
    if (typeof (obj[pepe]) === 'number') acc += obj[pepe]
  }
  return acc
}

let totalObject = sumaDefaultObject({
  a: 25,
  b: 'María',
  c: 100,
  d: 350,
  e: true,
  f: 700
})

console.log(totalObject)

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta', 'Led Zeppelin camiseta']

// 1. meterlo en una función
const RemoveProductsNoShirts = (products) => {
  for (const product of products) {
    // 2. función de filtrado
    filteredPorducts(product)
  }
}
// 2. función que invocamos
const filteredPorducts = (product) => {
  if (product.toUpperCase().includes('CAMISETA')) console.log(product)
}

const filtered = product => product.toUpperCase().includes('CAMISETA') ? console.log(product) : ''

for (const product of products) {
  if (product.includes('Camiseta')) console.log(product)
}

RemoveProductsNoShirts(products)

