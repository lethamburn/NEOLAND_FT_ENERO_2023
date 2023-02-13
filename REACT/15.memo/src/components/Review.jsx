const Review = ({ name, score }) => {
  console.log("Renderizando Review");
  return (
    <div>
      <h2>El videojuego {name}</h2>
      <h2>Tiene como puntuación: {score}</h2>
    </div>
  );
};

export default Review;
