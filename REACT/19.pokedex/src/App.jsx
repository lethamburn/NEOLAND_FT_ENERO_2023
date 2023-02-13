import "./App.css";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    photo: "",
  });
  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon({
          name: res.data.name,
          photo: res.data.sprites.front_default,
        });
      });
    setPokemonChosen(true);
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value.toLowerCase());
          }}
        />
        <button onClick={() => searchPokemon()}>Search Pokémon</button>

        {pokemonChosen ? (
          <figure>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.photo} alt={pokemon.name} />
          </figure>
        ) : (
          <h2>Choose Pokemon</h2>
        )}
      </div>
    </div>
  );
};

export default App;
