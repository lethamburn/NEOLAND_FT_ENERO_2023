import { createContext, useState } from "react";

export const NasaContext = createContext();

export const NasaContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <NasaContext.Provider value={{ items, setItems }}>
      {children}
    </NasaContext.Provider>
  );
};
