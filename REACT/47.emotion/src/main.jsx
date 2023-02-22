import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./style/GlobalStyles";
import { theme } from "./style/theme";
import "./index.css";
import { createTheme } from "./style/utils";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(theme)}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
