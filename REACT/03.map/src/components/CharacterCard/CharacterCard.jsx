const CharacterCard = ({ character }) => {
  return (
    <figure>
      <h2>{character.name}</h2>
      <h3>{character.company}</h3>
    </figure>
  );
};

export default CharacterCard;
