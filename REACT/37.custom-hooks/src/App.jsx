import { useState } from "react";
import "./App.css";
import useDebounce from "./hooks/useDebounce";
import useFetch from "./hooks/useFetch";
import useLowerCase from "./hooks/useLowerCase";

function App() {
  const [name, setName] = useState("");
  const debouncedValue = useDebounce(name, 1000);
  const [data] = useFetch("https://63ecd80832a0811723a32563.mockapi.io/users");
  const [stringValue] = useLowerCase("HoLa A tOdOs");
  const [newStringValue] = useLowerCase(1);
  return (
    <div className="App">
      <h2>{debouncedValue}</h2>
      <h3>{stringValue}</h3>
      <h3>{newStringValue}</h3>
      <input type="text" onChange={(ev) => setName(ev.target.value)} />
      {data && data.map((item) => <h2 key={item.id}> {item.name}</h2>)}
    </div>
  );
}

export default App;
