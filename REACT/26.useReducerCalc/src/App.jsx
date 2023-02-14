import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [result, setResult] = useState(0);
  const [typeAction, setTypeAction] = useState("");

  const memoizedFirstNumber = useMemo(() => {
    return firstNumber;
  }, [toggle]);

  const operation = (type) => {
    switch (type) {
      case "SUMA":
        setResult(firstNumber + memoizedFirstNumber);
        setFirstNumber(firstNumber + memoizedFirstNumber);
        break;
      case "RESTA":
        setResult(memoizedFirstNumber - firstNumber);
        setFirstNumber(memoizedFirstNumber - firstNumber);
        break;
      case "MULTI":
        setResult(memoizedFirstNumber * firstNumber);
        setFirstNumber(memoizedFirstNumber * firstNumber);
        break;
      case "DIV":
        setResult(memoizedFirstNumber / firstNumber);
        setFirstNumber(memoizedFirstNumber / firstNumber);
        break;
    }
  };
  return (
    <div className="App">
      <h2>Resultado: {result}</h2>
      <h2>Primer numero = {firstNumber}</h2>
      <h2>Segundo numero = {memoizedFirstNumber}</h2>
      <h2>TYPE: {typeAction}</h2>
      <button onClick={() => setFirstNumber(1)}>1</button>
      <button onClick={() => setFirstNumber(2)}>2</button>
      <button onClick={() => setFirstNumber(3)}>3</button>
      <button onClick={() => setFirstNumber(4)}>4</button>
      <button onClick={() => setFirstNumber(5)}>5</button>
      <button onClick={() => setFirstNumber(6)}>6</button>
      <button onClick={() => setFirstNumber(7)}>7</button>
      <button onClick={() => setFirstNumber(8)}>8</button>
      <button onClick={() => setFirstNumber(9)}>9</button>
      <button onClick={() => setFirstNumber(0)}>0</button>
      <hr />
      <button
        onClick={() => {
          setToggle(!toggle);
          setTypeAction("SUMA");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setToggle(!toggle);
          setTypeAction("RESTA");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setToggle(!toggle);
          setTypeAction("MULTI");
        }}
      >
        x{" "}
      </button>
      <button
        onClick={() => {
          setToggle(!toggle);
          setTypeAction("DIV");
        }}
      >
        /
      </button>
      <button onClick={() => operation(typeAction)}>=</button>
    </div>
  );
}

export default App;
