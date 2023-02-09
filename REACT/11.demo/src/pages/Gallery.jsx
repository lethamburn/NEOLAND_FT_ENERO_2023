import { useState, useEffect } from "react";
import axios from "axios";
import CharacterPortrait from "../components/CharacterPortrait";
import "./Gallery.css";
import Loading from "../components/Loading";
import MainGallery from "../layout/MainGallery";
const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getCharacters = async () => {
    const res = await axios.get(
      "https://starwars-server.vercel.app/characters"
    );
    const data = res.data.data.characters;
    setCharacters(data);
    setLoaded(true);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <main className="sw-section-gallery">
      <h2>Gallery</h2>
      <MainGallery>
        {loaded ? (
          characters.map((character) => (
            <CharacterPortrait character={character} key={character._id} />
          ))
        ) : (
          <Loading />
        )}
      </MainGallery>
    </main>
  );
};

export default Gallery;
