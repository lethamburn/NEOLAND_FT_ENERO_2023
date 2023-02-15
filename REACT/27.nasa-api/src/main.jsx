import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Media from "./pages/Media";
import About from "./pages/About";
import "./index.css";
import { NasaContextProvider } from "./context/nasaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <NasaContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/media" element={<Media />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </NasaContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
