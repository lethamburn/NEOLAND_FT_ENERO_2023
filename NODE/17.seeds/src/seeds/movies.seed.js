//Importamos mongoose para conectarnos a la base de datos
const mongoose = require("mongoose");
//Importamos el modelo Movie
const Movie = require("../models/Movie.model");

const moviesDataSet = [
  {
    title: "The Batman",
    poster:
      "https://xl.movieposterdb.com/22_02/2022/1877830/xl_1877830_764432ad.jpg?v=2023-02-19%2023:41:01",
    year: 2022,
    director: "Matt Reeves",
  },
  {
    title: "Dune",
    poster:
      "https://xl.movieposterdb.com/21_08/2021/1160419/xl_1160419_565d3d10.jpg?v=2023-01-06%2017:55:10",
    year: 2022,
    director: "Denis Villeneuve",
  },
  {
    title: "Jaws",
    poster:
      "https://xl.movieposterdb.com/08_01/1975/73195/xl_73195_04c15a8a.jpg?v=2023-02-25%2009:28:24",
    year: 1975,
    director: "Steven Spielberg",
  },
];

//Convertir cada una de las peliculas del dataset en tipo Movie
const movieDocuments = moviesDataSet.map((movie) => new Movie(movie));

//Una vez tenemos los documentos con su tipo transformados nos conectamos a la base de datos
const MONGO_URI =
  "mongodb+srv://antoniorosales:Neoland2023@cluster0.dnar3wv.mongodb.net/moviesDB?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    //Vamos a encontrar con el metodo find todos los personajes que haya en la base de datos del tipo modelo Movie
    const allMovies = await Movie.find();
    //Si allMovies tiene algo...
    if (allMovies.length) {
      //Borramos toda la colección de movies
      await Movie.collection.drop();
      console.log("Colección borrada");
    }
  })
  .catch((err) => console.log("Error borrando movies", err))
  .then(async () => {
    //Un vez vaciada la colección de movies de la base de datos insertamos todos los elementos que haya en nuestro array de documentos
    await Movie.insertMany(movieDocuments);
    console.log("Colección creada");
  })
  .catch((err) => console.log("Error insertando movies", err))
  //Finalmente nos desconectamos de la base de datos
  .finally(() => mongoose.disconnect());
