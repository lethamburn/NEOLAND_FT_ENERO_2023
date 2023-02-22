import "./App.css";
import Avatar from "./ui/Avatar";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import FlexContainer from "./ui/FlexContainer";
import GridContainer from "./ui/GridContainer";
function App() {
  return (
    <div className="App">
      <Button text="Register" action={() => console.log("Hola")} />
      <Button
        text="Login"
        action={() => console.log("Login")}
        variant="contained"
      />
      <Button
        text="Text"
        action={() => console.log("Text")}
        variant="text"
        color="crimson"
      />
      <FlexContainer gap="2rem" direction="row">
        <Heading size="xl" as="h1">
          Title
        </Heading>
        <Heading size="lg">Subtitle</Heading>
        <Heading size="md" as="h3">
          Soy un h3
        </Heading>
      </FlexContainer>
      <Avatar
        name="Peter Parker"
        image="https://i.pinimg.com/originals/fa/18/b1/fa18b187cb2eb4c63f218883e98fc1b0.jpg"
        size="xl"
      />
      <FlexContainer gap="2rem" direction="row">
        <Avatar name="Tony Stark" size="md" />
        <Avatar name="Thor Odinson" size="md" />
        <Avatar name="Bruce Banner" size="md" />
        <Avatar name="Natasha Romanov" size="md" />
      </FlexContainer>
      <GridContainer cols="3" colSize="300px" rows="3" rowSize="100px">
        <img src="https://picsum.photos/200/300" alt="Random photo" />
        <img src="https://picsum.photos/200/300" alt="Random photo" />
        <img src="https://picsum.photos/200/300" alt="Random photo" />
        <img src="https://picsum.photos/200/300" alt="Random photo" />
        <img src="https://picsum.photos/200/300" alt="Random photo" />
        <img src="https://picsum.photos/200/300" alt="Random photo" />
        <img src="https://picsum.photos/200/300" alt="Random photo" />
      </GridContainer>
    </div>
  );
}

export default App;
