import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hola from "./components/Hola";

const App = () => {
  const name = "Peter";

  return (
    <div className="App">
      <Header />
      <h1>{name}</h1>
      <Main />
      <Footer />
      <Hola />
    </div>
  );
};

export default App;
