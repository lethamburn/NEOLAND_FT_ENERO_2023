import { useState } from "react";
import Request from "./components/Request";
import { useDebounce } from "use-debounce";
import "./App.css";

function App() {
  const [text, setText] = useState("Hola");
  const [debounceValue] = useDebounce(text, 3000);

  return (
    <div className="App">
      <input
        type="text"
        defaultValue={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <h2>{text}</h2>
      <h2>{debounceValue}</h2>
      <hr />
      <Request />
    </div>
  );
}

export default App;
