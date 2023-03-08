//Requerimos el repositorio de mongo
const conn = require('../repositories/mongo.repository');

//Exportamos cada una de las funciones solamente con su estructura funcional. Si hay algun error nos saldremos de la funcion. Posteriormente a través del servicio nos encargaremos de comprobar los datos recogidos por estas funciones y darles forma.
exports.GetAll = async () => {
  try {
    return await conn.db.connMongo.Show.find();
  } catch (error) {
    console.log('err odm-show.getAll =', error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create = async (Title, Poster) => {
  try {
    const data = await new conn.db.connMongo.Show({
      title: Title,
      poster: Poster,
    });
    data.save();
    return true;
  } catch (error) {
    console.log('err odm-show.Create =', error);
    return await { err: { code: 123, message: error } };
  }
};
