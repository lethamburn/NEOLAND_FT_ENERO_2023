import { useMemo, useState } from "react";
import "./App.css";

const addAddams = (family, etiqueta) => {
  console.log("Esta funcion está:", etiqueta);
  return family.map((fa) => {
    const fullName = `${fa} Addams`;

    return <h2 key={fullName}>{fullName}</h2>;
  });
};

function App() {
  const [family, setFamily] = useState([
    "Miercoles",
    "Cosa",
    "Morticia",
    "Gomez",
    "Fétido",
  ]);
  const addamsFamily = addAddams(family, "no memoizado");

  const addamsFamilyMemoized = useMemo(() => {
    return addAddams(family, "memoizado");
  }, []);

  return (
    <div>
      <div>{addamsFamily}</div>
      <div>{addamsFamilyMemoized}</div>
      <button
        onClick={() => {
          setFamily([...family, "Paco"]);
        }}
      >
        Render
      </button>
    </div>
  );
}

export default App;
