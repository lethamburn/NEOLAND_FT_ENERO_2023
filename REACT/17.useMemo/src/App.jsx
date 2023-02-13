import { useState, useMemo } from "react";
import "./App.css";

const numberList = [1, 2, 1, 4, 0, 6];

//Scores es el array de numeros y caller una etiqueta para ver cual de las dos se está ejecutando (memo y no-memo)
const mapScores = (scores, caller) => {
  console.log("Ejecutamos mapScores => ", caller);

  //Hacemos un calculo "pesado", el cual nos devuelve un numero calculado y un color
  return scores.map((score, i) => {
    const calc = (score * 3) / 2;
    const color = calc < 3 ? `🟥` : `🟩`;
    //Por cada uno de estos resultados nos imprime una p con el resultado y el color
    return (
      <p key={i}>
        {calc} - {color}
      </p>
    );
  });
};

function App() {
  //Almacenamos una variable de estado para solicitar un re-render de App que vuelva a ejecutar todo
  const [rerender, setRerender] = useState(false);
  //Almacenamos en content el resultado del calculo
  const content = mapScores(numberList, "no-memo");
  //Almacenamos en contentMemo el resultado del calculo pero memoizado
  const contentMemo = useMemo(() => {
    return mapScores(numberList, "memo");
    //Con el array de dependencias podemos indicarle que re-calcule el calculo. En este caso lo tenemos vacio porque queremos que lo haga solo una vez
  }, []);

  return (
    <div className="App">
      <h2>SIN MEMOIZAR</h2>
      {content}
      <h2>MEMOIZADO</h2>
      {contentMemo}
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
}

export default App;
