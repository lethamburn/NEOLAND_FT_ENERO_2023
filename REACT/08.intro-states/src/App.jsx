import { useState } from "react";
import "./App.css";

function App() {
  /* VARIABLE DE ESTADO Y FUNCION SETEADORA */
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h2>{count <= 5 ? "Es menor que 5" : "Es mayor que 5"}</h2>
      <p>----------</p>

      <button onClick={() => setLoaded(true)}>Load</button>
      {loaded ? (
        <div>
          <h3>Esta pagina esta cargada</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            quia consectetur a provident nemo. Quam sunt in vitae, praesentium
            explicabo, perspiciatis accusamus atque est recusandae, quo ad
            excepturi. Tempore, tempora.
          </p>
        </div>
      ) : (
        <p>No esta cargada la pagina</p>
      )}
      <p>---------</p>
      <h2>{name}</h2>
      <input type="text" onChange={(ev) => setName(ev.target.value)} />
    </div>
  );
}

export default App;
