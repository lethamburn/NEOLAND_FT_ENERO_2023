import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import "./index.css";
import { SongContextProvider } from "./context/songContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <SongContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Gallery />} />
            <Route path="/:id" element={<GalleryDetail />} />
          </Route>
        </Routes>
      </SongContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
