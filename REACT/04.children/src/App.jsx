import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Center from "./layout/Center";
import Grid from "./layout/Grid";

function App() {
  return (
    <div className="App">
      <Header />
      <Button>Click</Button>
      <Button>Haz click aqui</Button>
      <Button>Logout</Button>
      <Center>
        <h2>Hola</h2>
      </Center>
      <Grid>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </Grid>
    </div>
  );
}

export default App;
