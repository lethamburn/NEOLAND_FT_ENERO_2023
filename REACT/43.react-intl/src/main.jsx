import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import App from "./App";
import "./index.css";

import Spanish from "./lang/es.json";
import English from "./lang/en.json";
import French from "./lang/fr.json";

const recoverLang = () => {
  if (navigator.language === "es-ES") {
    return Spanish;
  } else if (navigator.language === "fr-FR") {
    return French;
  } else if (navigator.language === "en-US") {
    return English;
  } else {
    return Spanish;
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IntlProvider locale={navigator.language} messages={recoverLang()}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
