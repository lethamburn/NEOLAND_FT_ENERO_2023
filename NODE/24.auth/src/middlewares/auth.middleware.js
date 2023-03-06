const User = require("../api/models/user.model");
const { verifyToken } = require("../utils/token");

//Definimos la función para comprobar que los token son validos o no
const isAuth = async (req, res, next) => {
  //Troceamos el token para quedarnos solo con el token
  // Header Auth -> "Bearer aioshdlgnbasldng"
  const token = req.headers.authorization?.replace("Bearer ", "");
  //Comprobamos si hay token
  if (!token) {
    return next(new Error("Unauthorized"));
  }

  try {
    //Comprbamos que el token es correcto
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    //Si esta todo correcto haremos lo que sea que querramos hacer después de la guarda
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = { isAuth };
