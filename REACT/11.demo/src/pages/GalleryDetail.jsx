import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./GalleryDetail.css";

const GalleryDetail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const getCharacter = async () => {
    const res = await axios.get(
      `https://starwars-server.vercel.app/characters/${id}`
    );
    const data = res.data.data.characters;
    setCharacter(data);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <main>
      <figure className="sw-section-detail">
        <img
          src={character.image}
          alt={character.name}
          referrerPolicy="no-referrer"
        />
        <h3>{character.name}</h3>
        <h3>{character.origin}</h3>
        <h3>{character.role}</h3>
        <figcaption>{character.description}</figcaption>
      </figure>
    </main>
  );
};

export default GalleryDetail;
