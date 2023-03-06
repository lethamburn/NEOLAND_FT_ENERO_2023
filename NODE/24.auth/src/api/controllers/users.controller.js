const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const registerUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    //Almacenamos un usuario que exista si el email coincide
    const userExists = await User.findOne({ email: newUser.email });
    //Si existe nos salimos de la función y devolvemos el error
    if (userExists) {
      return next("User already exists");
    }
    const createdUser = await newUser.save();
    //Una vez guardado en la base de datos, nuleamos el password para no enseñarlo en la resputa
    createdUser.password = null;
    return res.status(201).json(createdUser);
  } catch (error) {
    return next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    //Encontramos al usuario por email
    const user = await User.findOne({ email: req.body.email });
    //Si no lo encontramos nos salimos de la función
    if (!user) {
      return next("User not found");
    }
    //Comprobar la contraseña con bcrypt, comprobamos la que le pasemos con la que tiene el usuario
    if (bcrypt.compareSync(req.body.password, user.password)) {
      //Si las contraseña coinciden creamos un token
      const token = generateToken(user._id, user.email);
      return res.status(200).json(token);
    }
  } catch (error) {
    return next("User cannot login", error);
  }
};

const logoutUser = (req, res, next) => {
  try {
    const token = null;
    return res.status(201).json(token);
  } catch (error) {
    return next(error);
  }
};

module.exports = { registerUser, loginUser, logoutUser };
