const baseUrl = "https://api.nationalize.io";

//Recuperamos el input
const input = document.querySelector("input");

const getNameInfo = async () => {
  //Concatenamos la baseUrl con el param name y el valor de input
  const res = await fetch(`${baseUrl}?name=${input.value}`);
  const data = await res.json();
  console.log(data);
  printInfo(data.country, data.name);
};

const printInfo = (countries, name) => {
  for (const country of countries) {
    const div = document.createElement("div");
    //Por cada pais de countries creamos una p
    const p = document.createElement("p");
    //Le damos texto
    p.textContent = `El nombre ${name} tiene un ${Math.floor(
      country.probability * 100
    )}% de ser de ${country.country_id} `;
    //Lo metemos en el body
    div.appendChild(p);

    //Creamos el boton que borra cada uno de los parrafos
    const btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.addEventListener("click", () => div.remove());
    div.appendChild(btn);

    document.body.appendChild(div);
  }
};

const btn = document.querySelector("button");
//Al hacer click en el botón se ejecutará la función
btn.addEventListener("click", () => {
  getNameInfo();
});
