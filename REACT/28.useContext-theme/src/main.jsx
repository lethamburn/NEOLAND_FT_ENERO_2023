import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import "./index.css";
import { ThemeContextProvider } from "./context/themeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
