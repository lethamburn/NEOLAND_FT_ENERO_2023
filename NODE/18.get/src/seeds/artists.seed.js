const mongoose = require("mongoose");

const Artist = require("../models/artist.model");

const artistsDataSet = [
  {
    name: "Metallica",
    origin: "USA",
    genre: "Trash Metal",
  },
  {
    name: "Chayanne",
    origin: "Puerto Rico",
    genre: "Baladas latinas",
    age: 54,
  },
  {
    name: "Camela",
    origin: "España",
    genre: "Fantasia",
  },
  {
    name: "Immortal",
    origin: "Noruega",
    genre: "Black Metal",
  },
];

const artistsDocuments = artistsDataSet.map((artist) => new Artist(artist));

mongoose
  .connect(
    "mongodb+srv://antoniorosales:Neoland2023@cluster0.dnar3wv.mongodb.net/musicDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    const allArtists = await Artist.find();

    if (allArtists.length) {
      await Artist.collection.drop();
      console.log("Collection dropped");
    }
  })
  .catch((error) => console.log("Error deleting artists", error))
  .then(async () => {
    await Artist.insertMany(artistsDocuments);
    console.log("Artist collection created");
  })
  .catch((error) => console.log("Error inserting artists", error))
  .finally(() => mongoose.disconnect());
