// funciones sin parametros
// funciones con parametros -> no hay obligatorios - con su uso son udenfined
// -> parametros por defecto
// funciones que retornan valores
// funciones que no retorna valores

function nameFucntion(name = "Rafael") {
  console.log('Hola Neolanders ' + name)
}

nameFucntion("Carla")
nameFucntion("Guadalupe")
nameFucntion()

function suma(a, b, c) {
  return a + b + c
}

let totalSum = suma(1, 2, 5)

console.log(totalSum)

const listNumber = [1, 2, 3, 4, 5, 6, 7, 2];

// 1
function removeDuplicates(list) {
  let orderedItems = orderListItem(list)
  console.log(orderedItems)
  iterateList(orderedItems)
  console.log(orderedItems)
  return orderedItems
}

function orderListItem(list) {
  return list.sort()
}

// función transformadora
function iterateList(list) {
  for (const item of list) {
    if (item == list[list.indexOf(item) + 1]) {
      list.splice(list.indexOf(item), 1)
    }
  }
}


let listNoDuplicate = removeDuplicates(listNumber)

console.log(listNoDuplicate)

function sayHello(name, language) {
  return chooseLanguage(language, name)
}

function chooseLanguage(language, name) {
  let message;
  switch (language) {
    case 'esp':
      message = `Hola mi nombre es ${name}`
      break;
    case 'ger':
      message = `Aleman ${name}`
      break;
    case 'eng':
      message = `Ingles ${name}`
      break;
    default:
      message = `Tu nombre no tiene origen ${name}`
      break;
  }
  return message
}

console.log(sayHello('Pedro', 'tur'))

function nombre(params) {
  // no return
  return
}