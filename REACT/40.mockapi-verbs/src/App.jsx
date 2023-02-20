import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: "",
    poster: "",
  });
  const [error, setError] = useState(null);
  const [editMovie, setEditMovie] = useState({
    title: "",
    year: "",
    poster: "",
  });

  //GET
  const getMovies = async () => {
    const res = await fetch(
      "https://63f34c53864fb1d60013d215.mockapi.io/movies"
    );
    const data = await res.json();
    setMovies(data);
    setLoaded(true);
  };

  //CREATE
  const createMovie = (ev) => {
    ev.preventDefault();
    if (!newMovie.title || !newMovie.poster || !newMovie.year) {
      setError("Formulario incompleto");
    } else {
      setError(null);
      fetch("https://63f34c53864fb1d60013d215.mockapi.io/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      }).then((res) => {
        getMovies();
      });
    }
  };

  //DELETE
  const deleteMovie = (id) => {
    fetch(`https://63f34c53864fb1d60013d215.mockapi.io/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      getMovies();
    });
  };

  //PUT
  const handleEditMovie = (ev, id) => {
    ev.preventDefault();
    fetch(`https://63f34c53864fb1d60013d215.mockapi.io/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editMovie),
    }).then((res) => {
      getMovies();
    });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="App">
      {loaded ? (
        movies.map((movie) => (
          <div className="moviecard" key={movie.id}>
            <h3>{movie.title}</h3>
            <h3>{movie.year}</h3>
            <img src={movie.poster} alt={movie.title} />
            <button onClick={() => setEditMovie(movie)}>Edit</button>
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
      <h2>CREATE MOVIE</h2>
      <form onSubmit={(ev) => createMovie(ev)}>
        <input
          type="text"
          placeholder="Title"
          onChange={(ev) =>
            setNewMovie({ ...newMovie, title: ev.target.value })
          }
        />
        <input
          type="number"
          placeholder="Year"
          onChange={(ev) => setNewMovie({ ...newMovie, year: ev.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          onChange={(ev) =>
            setNewMovie({ ...newMovie, poster: ev.target.value })
          }
        />
        <button type="submit">Create Movie</button>
      </form>
      {error && <h3>{error}</h3>}
      <h2>EDIT MOVIE</h2>
      <form onSubmit={(ev) => handleEditMovie(ev, editMovie.id)}>
        <input
          type="text"
          placeholder="Title"
          value={editMovie.title}
          onChange={(ev) =>
            setEditMovie({ ...editMovie, title: ev.target.value })
          }
        />
        <input
          type="number"
          placeholder="Year"
          value={editMovie.year}
          onChange={(ev) =>
            setEditMovie({ ...editMovie, year: ev.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={editMovie.poster}
          onChange={(ev) =>
            setEditMovie({ ...editMovie, poster: ev.target.value })
          }
        />
        <button type="submit">Edit Movie</button>
      </form>
    </div>
  );
}

export default App;
