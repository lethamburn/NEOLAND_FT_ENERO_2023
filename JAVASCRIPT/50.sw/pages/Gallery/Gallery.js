import "./Gallery.css";
import axios from "axios";

const template = () => `
<section class="gallery">
    <h2>Gallery</h2>
    <nav>
        <ul>
            <li>
                <button id="characters" class="selectBtn">Characters</button>
            </li>
            <li>
                <button id="creatures" class="selectBtn">Creatures</button>
            </li>
            <li>
                <button id="droids" class="selectBtn">Droids</button>
            </li>
            <li>
                <button id="locations" class="selectBtn">Locations</button>
            </li>
            <li>
                <button id="organizations" class="selectBtn">Organizations</button>
            </li>
            <li>
                <button id="species" class="selectBtn">Species</button>
            </li>
            <li>
                <button id="vehicles" class="selectBtn">Vehicles</button>
            </li>
            <li>
                <button id="weaponsandtech" class="selectBtn">Weapons & Tech</button>
            </li>
        </ul>
    </nav>
    <div>
    <button id="prevBtn">Prev</button>
    <button id="nextBtn">Next</button>
    </div>
    <div class="gallery-container"></div>
</section>
`;

//Inicializamos las variables de los datos, la info y el type
let data;
let info;
let type = "characters";

//Le indicamos el tipo por argumento para que podamos hacer una función genérica
const getData = (type) => {
  //Concatenamos la baseURL y el tipo (characters, droids, locations,...)
  axios.get(`https://starwars-databank.vercel.app/${type}`).then((res) => {
    //Nos quedamos en data con los objetos
    data = res.data[type];
    //Y en info con el objeto info de la petición
    info = res.data.info;
    //Vamos a comprobar el estado de los botones
    checkListenersPrevNext();
    //Y ejecutamos el pintado de los datos
    printData(data);
  });
};

const getPrevData = () => {
  axios.get(`https://starwars-databank.vercel.app${info.prev}`).then((res) => {
    info = res.data.info;
    data = res.data[type];
    console.log(info);
    checkListenersPrevNext();
    printData(data);
  });
};

const getNextData = () => {
  axios.get(`https://starwars-databank.vercel.app${info.next}`).then((res) => {
    info = res.data.info;
    data = res.data[type];
    console.log(info);
    checkListenersPrevNext();
    printData(data);
  });
};

const printData = (list) => {
  const galleryContainer = document.querySelector(".gallery-container");
  //Limpiamos el contenedor para que no se repitan las cosas
  galleryContainer.innerHTML = "";
  for (const item of list) {
    const figure = document.createElement("figure");
    figure.innerHTML = `
    <img src=${item.image} alt=${item.name} class="${item.type}" />
    <h3>${item.name}</h3>
    <figcaption>${item.description}</figcaption>
    `;
    //AND OPERATOR
    item.name.includes("ANAKIN") && figure.classList.add("important");
    galleryContainer.appendChild(figure);
  }
};

const addButtonsListeners = () => {
  //Recuperamos todos los botones del nav
  const allBtns = document.querySelectorAll(".selectBtn");
  //Le añadimos un addEventListener a cada uno de ellos
  for (const btn of allBtns) {
    btn.addEventListener("click", (ev) => {
      getData(ev.target.id);
      //Cambiamos el valor de type por el id
      type = ev.target.id;
    });
  }
  //Añadirle el escuchador de eventos
  prevBtn.addEventListener("click", () => getPrevData());
  nextBtn.addEventListener("click", () => getNextData());
};

const checkListenersPrevNext = () => {
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  info.prev === null ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
  info.next === null ? (nextBtn.disabled = true) : (nextBtn.disabled = false);
};
export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getData(type);
  addButtonsListeners();
};
