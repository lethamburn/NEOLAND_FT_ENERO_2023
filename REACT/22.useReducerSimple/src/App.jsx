import { useReducer } from "react";
import "./App.css";

//Creamos un estado inicial
let initialCounter = 0;

//Creamos una función reductora que va a recibir por fuera un estado una acción
//Estas acciones las definiermos con los casos del switch
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "DUPLICATE":
      return state * 2;
    case "HALF":
      return state / 2;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

function App() {
  //useReducer se va a encargar de gestionar los estados de counter y ademas se va a encargar de leer que accion tiene que "despachar".
  //useReducer recibe dos argumentos iniciales. 1º la función encargada de disparar dichas acciones, 2º el estado inicial, en este caso de counter
  const [counter, dispatch] = useReducer(reducer, initialCounter);

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "DUPLICATE" })}>*</button>
      <button onClick={() => dispatch({ type: "HALF" })}>/</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default App;
