import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  //Inicializamos "lazy" el useState, no dandole un valor concreto por defecto si no: si puede recuperar el valor de localStorage va a ser ese y si no "dark"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
