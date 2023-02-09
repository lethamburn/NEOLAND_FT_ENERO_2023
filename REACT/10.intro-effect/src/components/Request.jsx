import { useState, useEffect } from "react";

const Request = () => {
  //INICIALIZAMOS LOS CHARACTERS CON ARRAY VACIO
  const [characters, setCharacters] = useState([]);
  //INICIALIZAMOS LOADED EN FALSE
  const [loaded, setLoaded] = useState(false);

  //DEFINIMOS LA FUNCION QUE NOS HARA LA PETICIÓN ASYNC
  const getCharacters = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    const charList = data.results;
    //Seteamos los characters con el resultado de la petición
    setCharacters(charList);
    //Seteamos loaded a true para poder comprobar que ha terminado de realizarse la petición
    setLoaded(true);
  };

  //El efecto que tiene el montado del componente Request es lanzar la petición y toda la funcionalidad que tiene getCharacters()
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {/* Si loaded es true me mapeas los personajes y me los pintas, y si no me pintas un h3 con Loading... */}
      {loaded ? (
        characters.map((character) => (
          <h2 key={character.id}>{character.name}</h2>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Request;
