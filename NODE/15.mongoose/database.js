//Importamos dotenv
const dotenv = require("dotenv");
//Configuramos dotenv
dotenv.config();
//Importamos mongoose
const mongoose = require("mongoose");

//CONFIGURACION DE MONGO_URL EN .env
const example =
  "mongodb+srv://antoniorosales:CONTRASEÑA@cluster0.dnar3wv.mongodb.net/NOMBRE_DB?retryWrites=true&w=majority";

//Almacenamos nuestra URL secreta en una variable
const MONGO_URL = process.env.MONGO_URL;

//Declaramos la función que conectará con nuesrtra base de datos
const connect = async () => {
  //TRYCATCH
  try {
    const db = await mongoose.connect(MONGO_URL, {
      //Parsea la URL de MONGO
      useNewUrlParser: true,
      //Convertir a legible caracteres especiales
      useUnifiedTopology: true,
    });
    //Sacamos name y host de db para poder enseñarlo por consola
    const { name, host } = db.connection;
    console.log(`Conectado a la DB ${name} en el host ${host}`);
  } catch (error) {
    console.log("Error conectando a la base de datos", error);
  }
};

//Exportamos la funcion con ES5
module.exports = { connect };
