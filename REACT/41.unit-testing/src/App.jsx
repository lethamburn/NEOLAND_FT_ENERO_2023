import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  const [text, setText] = useState("");

  const handleInput = (ev) => {
    setText(ev.target.value);
  };

  return (
    <div className="App">
      <div>
        <Header />
        <Title />
        <input
          type="text"
          placeholder="Escribe tu nombre!"
          data-testid="inputName"
          onChange={handleInput}
        />
        <h1>Hello, {text}</h1>
        <img
          aria-label="unsplash"
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80"
          alt="Gato enfadado"
          data-testid="cat-img"
        />
        <img
          aria-label="unsplash"
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Perrito"
        />
        <img
          src="https://images.unsplash.com/photo-1676912116272-ef4450a2dc67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          aria-label="unsplash"
        />
      </div>
    </div>
  );
}

export default App;
