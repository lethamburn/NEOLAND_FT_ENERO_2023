import { Link } from "react-router-dom";
import "./CharacterPortrait.css";

const CharacterPortrait = ({ character }) => {
  return (
    <Link className="sw-portrait" to={`/gallery/${character._id}`}>
      <h3>{character.name}</h3>
      <img
        src={character.portrait}
        alt={character.name}
        referrerPolicy="no-referrer"
      />
    </Link>
  );
};

export default CharacterPortrait;
