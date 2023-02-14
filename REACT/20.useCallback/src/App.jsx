import { useState, useCallback, memo } from "react";
import "./App.css";

//En el ejemplo de memo, no teniamos ninguna funcionalidad en el componente del poster y el titulo, por lo tanto no necesitabamos hacer uso de useCallback. En este caso, Button si está ejecutando una funcion y la podemos memoizar.

const Button = memo(({ name, handleClick }) => {
  console.log(`Button ${name} renderizado`);
  return <button onClick={handleClick}>{name}</button>;
});

const App = () => {
  console.log("App renderizado");
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  //Estamos memoizando las funciones, en este caso setCountOne, para que el DOM vea que es exactamente la misma función y no vuelva a disparar un re-render a no ser que le indiquemos que valor tiene que vigilar en el array de dependencias
  const memoizedSetCountOne = useCallback(() => {
    setCountOne(countOne + 1);
  }, [countOne]);
  const memoizedSetCountTwo = useCallback(() => {
    setCountTwo(countTwo + 1);
  }, [countTwo]);

  return (
    <div className="App">
      <h2>
        {countOne} - {countTwo}
      </h2>
      <Button name="button1" handleClick={memoizedSetCountOne} />
      <Button name="button2" handleClick={memoizedSetCountTwo} />
    </div>
  );
};

export default App;
