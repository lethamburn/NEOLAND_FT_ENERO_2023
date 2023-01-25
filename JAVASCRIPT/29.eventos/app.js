const myBtn = document.querySelector("#btn");

//myBtn.onclick = () => alert("Has hecho click aqui");

myBtn.addEventListener("click", (event) => {
  console.log(
    `Has clickado en un botón con el texto -> ${event.target.innerHTML}`
  );
});

//EXPERIMENTOS
const inputBlur = document.querySelector("#inputBlur");

/* inputBlur.addEventListener("blur", () =>
  console.log("Has perdido el foco de input")
);

inputBlur.addEventListener("change", (ev) => {
  console.log(`El valor de este input ha cambiado a ${ev.target.value}`);
});
 */
console.log(inputBlur);

inputBlur.addEventListener("input", (ev) => console.log(ev.target.value));

document.addEventListener("scroll", (ev) => console.log(ev));

window.addEventListener("resize", (ev) => {
  document.querySelector(
    "#size"
  ).innerHTML = `${ev.currentTarget.innerHeight} x ${ev.currentTarget.innerWidth}`;
});
