import { useState } from "react";

const ComplexState = () => {
  const [character, setCharacter] = useState({
    name: "",
    surname: "",
  });

  return (
    <div>
      <h2>
        {character.name} {character.surname}
      </h2>
      {/* con setCharacter, hacemos un spread operator para copiar el estado actual de character con ... y concretamente le cambiamos la clave name con el valor del target del evento (INPUT) */}
      <input
        type="text"
        value={character.name}
        onChange={(ev) => {
          setCharacter({
            ...character,
            name: ev.target.value,
          });
          console.log(ev);
        }}
      />
      <input
        type="text"
        value={character.surname}
        onChange={(ev) => {
          setCharacter({
            ...character,
            surname: ev.target.value,
          });
        }}
      />
      <button onClick={() => console.log(character)}>Register</button>
    </div>
  );
};

export default ComplexState;
