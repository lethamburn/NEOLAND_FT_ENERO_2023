import { useContext } from "react";
import { Link } from "react-router-dom";
import { SongContext } from "../context/songContext";

const Gallery = () => {
  //Nos traemos el seter y las canciones del contexto
  const { songs, loaded } = useContext(SongContext);
  return (
    <main>
      {loaded ? (
        songs.map((song) => (
          <div key={song.id}>
            <h2>{song.title}</h2>
            {/*  Le indicamos que al hacer click nos pinter GalleryDetail con el id de cada una de las canciones */}
            <Link to={`/${song.id}`}>Ver más</Link>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Gallery;
