import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Users = () => {
  const APIKEY = "2fe335f082bbb92b86a34c5aba28f15e";
  const [user, setUser] = useState("lethamburn");
  const [userAlbums, setUserAlbums] = useState(null);

  const getUserInfo = async () => {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${user}&api_key=${APIKEY}&format=json`
    );
    const data = await res.json();
    setUserAlbums(data.topalbums.album);
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <main>
      {userAlbums !== null ? (
        userAlbums.map((al) => (
          <img
            key={JSON.stringify(al)}
            src={al.image[3]["#text"]}
            alt={al.name}
          />
        ))
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Users;
