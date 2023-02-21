import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ProviderLanguage } from "./context/language-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderLanguage>
      <App />
    </ProviderLanguage>
  </React.StrictMode>
);
