import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //Estado del usuario
  const [user, setUser] = useLocalStorage("user", null);
  //Navegador
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate("/dashboard/profile", { replace: true });
  };

  //Le indicamos replace true para que, esté en la ruta que esté se asegure de reemplazar toda la ruta por barra vacia
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  //Vamos a memoizar nuestras funciones y usuario para que, siempre que no cambie el usuario, no tengamos re-render de más
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//Creamos un custom hook que nos recoja el AuthContext con useContext, para solamente utilizar useAuth y no tener que importar todas las veces lo mismo
export const useAuth = () => {
  return useContext(AuthContext);
};
