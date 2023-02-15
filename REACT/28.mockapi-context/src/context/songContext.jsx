import { createContext, useState, useEffect } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  //Como las canciones estan en el contexto no tengo que hacer dos peticiones nunca más
  const [songs, setSongs] = useState([]);
  //Seteamos un estado de carga para indicarle que se espere a poder hacer la petición antes de la propia pagina
  const [loaded, setLoaded] = useState(false);

  const getSongs = async () => {
    const res = await fetch(
      "https://63ecd80832a0811723a32563.mockapi.io/songs"
    );
    const data = await res.json();
    console.log("LANZANDO PETICIÓN");
    //Seteamos las canciones en el contexto
    setSongs(data);
    setLoaded(true);
  };
  //Al setear esto desde el contexto, solo se hace una petición en toda la navegación, porque no le estoy diciendo ni a Gallery ni a GalleryDetail que la hagan
  useEffect(() => {
    getSongs();
  }, []);

  return (
    <SongContext.Provider value={{ songs, setSongs, loaded }}>
      {children}
    </SongContext.Provider>
  );
};
