import { useState, useEffect } from "react";
import ArtistCard from "../components/ArtistCard";
import Loading from "../components/Loading";
import searchIcon from "../assets/icons/search.png";
import "./Artists.css";
import AlbumLayout from "../layout/AlbumLayout";
import AlbumCard from "../components/AlbumCard";

const Artists = () => {
  const APIKEY = "2fe335f082bbb92b86a34c5aba28f15e";
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [actualArtist, setActualArtist] = useState("");
  const [artistName, setArtistName] = useState("Muse");

  const getArtistInfo = async () => {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${APIKEY}&format=json`
    );
    const data = await res.json();
    if (data.error) {
      setArtist(null);
    } else {
      setArtist(data.artist);
    }
  };

  const getArtistAlbums = async () => {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=${APIKEY}&format=json`
    );
    const data = await res.json();
    setAlbums(data.topalbums.album);
  };

  useEffect(() => {
    getArtistInfo();
    getArtistAlbums();
  }, [actualArtist]);

  return (
    <main className="nf-section-artists">
      <input
        placeholder="Artist name..."
        type="text"
        onChange={(ev) => setArtistName(ev.target.value)}
      />
      <button onClick={() => setActualArtist(artistName)}>
        <img src={searchIcon} alt="Search icon" />
      </button>

      {artist !== null ? <ArtistCard artist={artist} /> : <Loading />}
      <AlbumLayout>
        {albums !== null ? (
          albums.map((al) => <AlbumCard al={al} key={al.name} />)
        ) : (
          <Loading />
        )}
      </AlbumLayout>
    </main>
  );
};

export default Artists;
