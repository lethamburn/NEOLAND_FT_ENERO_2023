fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((res) => console.log(res));
