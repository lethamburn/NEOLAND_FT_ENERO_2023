const name = "Peter";
const surname = "Parker";

const myTemplate = `
<h1 id="title">Welcome</h1>
<h2>My name is ${name} ${surname}</h2>
<p>I'm a FullStack Developer</p>
`;

document.body.innerHTML = myTemplate;

//AQUI SI PUEDO HACER UN CONSOLE LOG Y RECUPERAR EL NODO H1 PORQUE EN LA LINEA 10 YA LO HE INYECTADO EN EL DOCUMENTO

//¡¡¡¡¡¡¡¡¡¡¡¡ANTES NO!!!!!!!!!!!!!!!
console.log(document.querySelector("h1"));
