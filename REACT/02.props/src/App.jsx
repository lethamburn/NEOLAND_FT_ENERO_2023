import "./App.css";
import Image from "./components/Image";
import Title from "./components/Title";

function App() {
  const title = "Este es el titulo";
  const image =
    "https://images.unsplash.com/photo-1675539252647-12e6eb164b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";
  const imageTitle = "Zapatos";
  return (
    <div className="App">
      {/* Le estamos pasando la prop text con el contenido de la constante title */}
      <Title text={title} />
      <Image
        source="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="Mujer programando"
      />
      <Image source={image} title={imageTitle} />
    </div>
  );
}

export default App;
