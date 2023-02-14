import "./App.css";
import Component1 from "./components/Component1";

function App() {
  const saludo = "Hola";
  return (
    <div className="App">
      <Component1 saludo={saludo} />
    </div>
  );
}

export default App;
