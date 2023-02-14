import "./App.css";
import ChangeName from "./components/ChangeName";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ChangeName />
    </div>
  );
}

export default App;
