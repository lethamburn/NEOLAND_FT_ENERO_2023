//Recuperamos el botón de more
const moreBtn = document.querySelector("#moreBtn");
//Recuperamos el botón de prev
const prevBtn = document.querySelector("#prevBtn");
//Por defecto prevBtn va a estar desactivado
prevBtn.disabled = true;

let pageNum = 1;

const getDroids = async () => {
  //Esta función asincrona recupera los datos de la URL
  const data = await fetch(
    `https://starwars-databank.vercel.app/droids?page=${pageNum}&limit=10`
  );
  //Los transforma en json
  const json = await data.json();
  //Nos quedamos solo con el array droids
  const droids = json.droids;
  //Al terminar ejecuto la función mapDroids, a la que le pasamos droids
  mapDroids(droids);
};

const mapDroids = (droids) => {
  //Crear por cada uno de los droides un nuevo objeto
  const mappedDroids = droids.map((droid) => ({
    name: droid.name,
    image: droid.image,
    description: droid.description,
  }));

  //Le pasamos los droides mapeados a printDroids
  printDroids(mappedDroids);
};

const printDroids = (droids) => {
  //Recuperamos el div container que tenemos en html
  const container = document.querySelector("#container");
  //Limpiamos el contenedor
  container.innerHTML = "";
  //Recorremos los droides
  for (const droid of droids) {
    //Crea un figure vacio en JS
    const figure = document.createElement("figure");
    //Le metemos contenido interno al figure
    figure.innerHTML = `
    <h2>${droid.name}</h2>
    <img src=${droid.image} alt=${droid.name}/>
    <p>${droid.description}</p>
    `;
    //Por cada uno de ellos le inyectamos a container el figure
    container.appendChild(figure);
  }
};

getDroids();

//Le vamos a añadir un escuchador de eventos, que al hacer click vuelva a lanzar la función getDroids, pero como al final de getDroids se suma 1 a pageNum, va a recuperar los droides de la pagina siguiente

moreBtn.addEventListener("click", () => {
  //Le sumamos 1 a pageNum
  pageNum++;
  if (pageNum > 1) {
    prevBtn.disabled = false;
    getDroids();
  }
  if (pageNum >= 7) {
    moreBtn.disabled = true;
  }
});

prevBtn.addEventListener("click", () => {
  pageNum--;
  if (pageNum <= 1) {
    prevBtn.disabled = true;
    getDroids();
  } else {
    getDroids();
  }
});
