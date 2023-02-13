import { memo } from "react";

const Videogame = memo(({ name, cover }) => {
  console.log("Renderizando Videogame");
  return (
    <div>
      <h2>{name}</h2>
      <img src={cover} alt={name} />
    </div>
  );
});

export default Videogame;
