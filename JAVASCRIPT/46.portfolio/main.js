import "./style.css";
import { Footer } from "./components/Footer/Footer";
import { Navbar, changeTheme } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { linkPage } from "./utils/linkPage";
import { Divider } from "./components/Divider/Divider";

const header = document.querySelector("header");
header.innerHTML = Navbar();
changeTheme();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();

footer.insertAdjacentHTML("beforebegin", Divider());
