import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//1º CREAR CONTEXTO
export const UserContext = createContext();

//2º CREAR PROVEEDOR CON LA INFORMACION DENTRO
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    if (localStorage.getItem("user")) {
      return localStorage.getItem("user");
    } else {
      return null;
    }
  });

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  //3º RETORNAR LA ETIQUETA WRAPEADORA CON LOS VALUE A COMPARTIR EN LA APLICACION
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

//4º GRAPEAR TODA LA APLICACION EN MAIN CON UserContextProvider
