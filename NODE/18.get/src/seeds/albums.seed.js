const mongoose = require("mongoose");

const Album = require("../models/album.model");

const albumDataSet = [
  {
    title: "Ride the Lightning",
    cover: "https://m.media-amazon.com/images/I/716FcW7qgSL._SL1200_.jpg",
    artist: "Metallica",
    year: 1984,
  },
  {
    title: "Atado a tu amor",
    cover: "https://m.media-amazon.com/images/I/61BCOynkb-L._SY355_.jpg",
    artist: "Chayanne",
    year: 1998,
  },
  {
    title: "Que la musica de acompañe",
    cover:
      "https://static.fnac-static.com/multimedia/Images/ES/NR/01/f5/77/7861505/1540-1.jpg",
    artist: "Camela",
    year: 2022,
  },
  {
    title: "Pure Holocaust",
    cover:
      "https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw015b3c24/images/4/0/7/0/407028.jpg?sw=1000&sh=800&sm=fit&sfrm=png",
    artist: "Immortal",
    year: 1993,
  },
];

const albumsDocuments = albumDataSet.map((album) => new Album(album));

mongoose
  .connect(
    "mongodb+srv://antoniorosales:Neoland2023@cluster0.dnar3wv.mongodb.net/musicDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    const allAlbums = await Album.find();

    if (allAlbums.length) {
      await Album.collection.drop();
      console.log("Collection dropped");
    }
  })
  .catch((error) => console.log("Error deleting albums", error))
  .then(async () => {
    await Album.insertMany(albumsDocuments);
    console.log("Album collection created");
  })
  .catch((error) => console.log("Error inserting albums", error))
  .finally(() => mongoose.disconnect());
