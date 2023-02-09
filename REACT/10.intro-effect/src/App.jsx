import { useState } from "react";
import "./App.css";
import SimpleEffect from "./components/SimpleEffect";
import MountComponent from "./components/MountComponent";
import Depend from "./components/Depend";
import Request from "./components/Request";

function App() {
  const [showMount, setShowMount] = useState(true);
  return (
    <div className="App">
      <SimpleEffect />
      {showMount ? <MountComponent /> : ""}
      <button
        onClick={() => {
          showMount ? setShowMount(false) : setShowMount(true);
        }}
      >
        Montar - Desmontar
      </button>
      <Depend />
      <Request />
    </div>
  );
}

export default App;
