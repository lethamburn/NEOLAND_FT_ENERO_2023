import { initContent } from "../../main";
import "./Header.css";

//Configuramos el template que queremos pintar
const template = () => `
<nav>
    <ul>
        <li>
            <a href="#" id="homelink">Home</a>
        </li>
        <li>
            <a href="#" id="gallerylink">Gallery</a>
        </li>
        <li>
            <a href="#" id="aboutlink">About</a>
        </li>
        <li>
        <a href="#" id="loginlink">Login</a>
    </li>
    </ul>
</nav>
`;

//Configuramos la funcionalidad que queremos otorgarle al template
const addListeners = () => {
  document
    .querySelector("#homelink")
    .addEventListener("click", () => initContent("Home"));
  document
    .querySelector("#gallerylink")
    .addEventListener("click", () => initContent("Gallery"));
  document
    .querySelector("#aboutlink")
    .addEventListener("click", () => initContent("About"));
  document
    .querySelector("#loginlink")
    .addEventListener("click", () => initContent("Login"));
};

//Para tener todo el codigo organizado y por orden vamos a exportar solo una función que pinte el template y después le añada los listeners
export const printTemplate = () => {
  //Primero pintamos el header
  document.querySelector("header").innerHTML = template();
  //Le añadimos los listeners una vez este pintado
  addListeners();
};

//ESTO ES MUY IMPORTANTE PORQUE COMO SABREIS ES IMPOSIBLE AÑADIRLE LISTENERS A ALGO QUE NO EXISTE EN EL DOM, POR LO TANTO CON ESTA METODOLOGIA DE TEMPLATE -> LISTENER NUNCA TENDREMOS PROBLEMAS
