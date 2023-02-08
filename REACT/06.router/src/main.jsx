import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*   Le indicamos a la aplicación completa desde el main que va a estar enrutada y que sea capaz de leer las urls del navegador */}
    <BrowserRouter basename="/">
      {/*  Le indicamos al router que aqui vamos a anidar todas las rutas individuales */}
      <Routes>
        {/* La ruta padre va a renderizar en la barra vacia App */}
        <Route path="/" element={<App />}>
          {/* En App, dependiendo de las rutas se van a pintar a través del Outlet las diferentes paginas */}
          {/* index indica que la ruta corresponda a la ruta padre, por lo tanto por defecto se va a renderizar Home */}
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
