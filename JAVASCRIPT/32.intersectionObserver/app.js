//Primero recuperamos el elemento a controlar a través del IntersectionObserver
const animatedText = document.querySelector(".animated-text");
const box = document.querySelector("#box");
const spans = document.querySelectorAll("span");

//Crear una función que manipule la intersección
const handleIntersection = (entries) => {
  //Esta función recibe un array de items, aunque solo tengamos uno
  entries.map((entry) => {
    //Si el item se está cruzando en la vista del navegador le añadimos la clase visible, y si no se la quitamos
    if (entry.isIntersecting) {
      entry.target.classList.add("rotate");
      document.body.classList.add("dark");
    } else {
      entry.target.classList.remove("rotate");
      document.body.classList.remove("dark");
    }
  });
};

//Creamos un ente observador, que va a ser el que va a estar pendiente de los elementos que entran en la vista
const observer = new IntersectionObserver(handleIntersection);

// Al observador le podemos pedir que esté pendiente de uno o más elementos
observer.observe(box);

//DOMContentLoaded
window.addEventListener("DOMContentLoaded", (ev) => {});

window.addEventListener("resize", (ev) => {
  console.log(ev);
  if (ev.currentTarget.innerWidth <= 700) {
    document.body.innerHTML = `<h1>Comprate un ordenador</h1>`;
  } else {
    document.body.innerHTML = `Ahora tienes un ordenador`;
  }
});
