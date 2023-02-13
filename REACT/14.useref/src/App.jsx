import { useState, useRef } from "react";
import "./App.css";
import ChangeColor from "./components/ChangeColor";

function App() {
  const [name, setName] = useState("Peter");
  //Inicializamos la referencia con null, la cual la setearemos gracias al atributo ref
  const textInput = useRef(null);

  const showValue = () => {
    console.log(textInput);
    //Gracias a la referencia puedo leer el objeto real del DOM y leer su value -> ESTO ES DEL DOM
    const inputValue = textInput.current.value;
    //Si existe el valor lo seteamos
    if (inputValue) {
      setName(inputValue);
    }
  };

  return (
    <div className="App">
      <h2>{name}</h2>
      {/*  Este input se va a almacenar en la ref textInput */}
      <input type="text" placeholder="Name" ref={textInput} />
      <button onClick={() => showValue()}>Mostrar el nombre</button>
      <hr />
      <ChangeColor />
    </div>
  );
}

export default App;
