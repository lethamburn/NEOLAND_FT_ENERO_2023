import "./App.css";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Image from "./components/Image/Image";

function App() {
  const imageList = [
    {
      src: "https://images.unsplash.com/photo-1675705552912-18f9052a8af4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "Ventana",
    },
    {
      src: "https://images.unsplash.com/photo-1675576466385-1a2429a4b72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      alt: "Playa",
    },
    {
      src: "https://images.unsplash.com/photo-1675706754972-a9f74f3c9093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      alt: "Playa",
    },
    {
      src: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      alt: "Mailchimp",
    },
  ];

  const characters = [
    {
      id: 1,
      name: "Daredevil",
      company: "Marvel",
    },
    {
      id: 2,
      name: "Batman",
      company: "DC",
    },
    {
      id: 3,
      name: "Namor",
      company: "Marvel",
    },
  ];

  return (
    <div className="App">
      {imageList.map((img) => (
        <Image source={img.src} description={img.alt} key={img.src} />
      ))}
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
}

export default App;
