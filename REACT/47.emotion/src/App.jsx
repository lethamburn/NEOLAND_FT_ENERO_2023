import "./App.css";
import Button from "./ui/Button";

function App() {
  return (
    <div className="App">
      <h1>Bienvenidos a @emotion</h1>
      <p>Este es nuestro tema</p>
      <Button>Hola</Button>
      <Button variant="error">Error</Button>
      <Button variant="success">Sucess</Button>
      <Button variant="warning">Warning</Button>
    </div>
  );
}

export default App;
