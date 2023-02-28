//Importamos mongoose
const mongoose = require("mongoose");

//Sacamos Schema de mongoose para escribir mejor
const Schema = mongoose.Schema;

//Definimos el esqueleto de Character
//Type define el tipo de dato
//Required define si es obligatorio o no tener ese campo
const CharacterSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: false },
    image: { type: String, required: true },
  },
  {
    //Esta propiedad estampará la fecha de creación y modificación
    timestamps: true,
  }
);

//Creamos el modelo indicandole el nombre de el modelo y los datos
const Character = mongoose.model("Character", CharacterSchema);
//Exportamos Character
module.exports = Character;
