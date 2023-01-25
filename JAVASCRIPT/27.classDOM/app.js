//Creamos un div con la clase box
const myBox = document.createElement("div");
document.body.appendChild(myBox);

//Una vez insertamos los elementos en el documento se pueden seguir manipulando, al igual que si los hubieramos recuperado por querySelector
myBox.id = "box";

//Manipular las clases de los nodos
myBox.classList.add("box", "box1");

myBox.classList.remove("box1");
myBox.classList.toggle("box1");

console.log(myBox.classList.contains("box1"));
