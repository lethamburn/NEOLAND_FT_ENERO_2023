import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SongContext } from "../context/songContext";

const GalleryDetail = () => {
  const [song, setSong] = useState({});
  //Recuperamos las canciones seteadas por Gallery en el contexto
  const { songs } = useContext(SongContext);
  //Recuperamos el id de los params
  const { id } = useParams();

  //Nos quedamos con la cancion que coincida el id con el de los params
  const findSong = () => {
    setSong(songs.find((song) => song.id === id));
  };

  useEffect(() => {
    findSong();
  }, []);

  return (
    <main>
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3>
      <p>Genre: {song.genre}</p>
      <Link to="/">Go back</Link>
    </main>
  );
};

export default GalleryDetail;
