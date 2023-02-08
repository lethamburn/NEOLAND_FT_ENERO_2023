import { useParams } from "react-router-dom";
import { getCharacter } from "../data/data";

const CharacterDetail = () => {
  const params = useParams();
  const id = params.id;
  /*   ESTO ES IGUAL A const {id} = useParams() */
  const character = getCharacter(id);
  return (
    <section>
      <h1>{character.name}</h1>
    </section>
  );
};

export default CharacterDetail;
