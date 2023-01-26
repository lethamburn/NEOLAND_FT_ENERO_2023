let list;

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((res) => {
    list = res.results;
    console.log(list);
  });
