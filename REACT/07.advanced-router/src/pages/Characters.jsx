import { getCharacters } from "../data/data";
import { Link } from "react-router-dom";

const Characters = () => {
  const characters = getCharacters();

  return (
    <section>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.id}</h2>
          <h2>{character.name}</h2>
          <h3>{character.role}</h3>
          <Link to={`/characters/${character.id}`}>View Detail</Link>
        </div>
      ))}
    </section>
  );
};

export default Characters;
