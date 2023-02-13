import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Request = () => {
  const [characters, setCharacters] = useState(null);
  const [nameCharacter, setNameCharacter] = useState("Rick");
  //Hasta que nameCharacter no tenga su estado "quieto" durante un segundo, no se va a setear en debounceName
  const [debounceName] = useDebounce(nameCharacter, 1000);

  const getCharacters = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nameCharacter}`
    );
    const res = await data.json();
    setCharacters(res.results);
  };

  //Por lo tanto, como debounceName esta en el array de dependencias del useEffect, no se va a relanzar la petición hasta que debounceName esté seteado
  useEffect(() => {
    getCharacters();
  }, [debounceName]);

  return (
    <div>
      <h2>Peticiones con Debounce</h2>
      <input type="text" onChange={(ev) => setNameCharacter(ev.target.value)} />
      {characters !== null &&
        characters.map((char) => <h4 key={char.id}>{char.name}</h4>)}
    </div>
  );
};

export default Request;
