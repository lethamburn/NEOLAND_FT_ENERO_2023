import { useState } from "react";
import "./App.css";
import Review from "./components/Review";
import Videogame from "./components/Videogame";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Videogame
        name="Returnal"
        cover="https://as01.epimg.net/meristation/imagenes/2020/12/11/game_cover/295861371607676234.jpg"
      />
      <Review name="Returnal" score={score} />
      <input
        type="number"
        value={score}
        onChange={(ev) => setScore(ev.target.value)}
      />
    </div>
  );
}

export default App;
