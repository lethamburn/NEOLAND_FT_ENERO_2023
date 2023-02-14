import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContextProvider } from "./context/userContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

//Estamos envolviendo todo App con el UserContextProvider para que toda la aplicación tenga acceso al contexto
