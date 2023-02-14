import { createContext, useState } from "react";

//Creamos y exportamos el contexto, gracias al metodo createContext
export const UserContext = createContext();

//Vamos a crear el proveedor del contexto -> es el "componente" que nos va a facilitar toda la información que le otorgemos
//Importante, hay que indicarle que va a tener efecto en los children que van a ser anidados por el Provider
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("Peter Parker");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

//Estamos definiendo información en nuestro proveedor y con el objeto Provider, estamos creando una etiqueta wrapeadora que proveera de la información indicada en value a todos los elementos que sean chidlren
