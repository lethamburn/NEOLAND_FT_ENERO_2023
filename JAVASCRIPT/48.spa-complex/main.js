import "./style.css";
import { printTemplate as HeaderTemplate } from "./components/Header/Header";
import { printTemplate as HomeTemplate } from "./pages/Home/Home";
import { printTemplate as GalleryTemplate } from "./pages/Gallery/Gallery";
import { printTemplate as AboutTemplate } from "./pages/About/About";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
//Esta será la función que lance los templates según una "ruta", dependiendo de la palabra que le indiquemos por argumento
export const initContent = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? HomeTemplate() : LoginTemplate();
      break;
    case "Home":
      HomeTemplate();
      break;
    case "Gallery":
      GalleryTemplate();
      break;
    case "About":
      AboutTemplate();
      break;
    case "Login":
      LoginTemplate();
      break;
  }
};

//Aqui ya hemos pintado el Header, y solo se ejecuta esta vez para que se quedé siempre en la web
HeaderTemplate();

//Por defecto ejecutamos initContent que como es undefined el argumento pintará el Home al arrancar
initContent();
