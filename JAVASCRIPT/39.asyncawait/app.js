//THEN

const getThenCharacters = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((data) => data.json())
    .then((info) => console.log("THEN", info));
};

getThenCharacters();

//ASYNCAWAIT

const getAsyncCharacters = async () => {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const info = await data.json();
  console.log("ASYNCAWAIT", info);
};

getAsyncCharacters();
