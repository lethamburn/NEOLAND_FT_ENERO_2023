const Character = require('../models/character.model')

//Importamos la función de borrado de imagenes
const { deleteImgCloudinary } = require('../../middlewares/files.middleware')

const getAllCharacters = async (req, res, next) => {
  try {
    //Vamos a comprobar por queryparams que la pagina existe y que se distinto a NaN
    if (req.query.page && !isNaN(parseInt(req.query.page))) {
      //Contamos el numero de personajes que hay
      const numCharacters = await Character.countDocuments()
      //Recuperamos el numero de pagina solicitado
      let page = parseInt(req.query.page)
      //Vamos a indicarle el limite de elementos y si no está indicado que sea 10 por defecto
      let limit = req.query.limit ? parseInt(req.query.limit) : 10
      //Hacemos el calculo del numero de paginas que hay en base al limit y al total de numeros de personajes que hay en la colección
      let numPages =
        numCharacters % limit > 0
          ? numCharacters / limit + 1
          : numCharacters / limit
      //Si la pagina es mayor que el numero de paginas o menor que 1 la pagina sera por defecto 1
      if (page > numPages || page < 1) {
        page = 1
      }
      //Vamos a definir una constante skip para que inicie en un punto concreto de la colección. Tiene que empezar teniendo en cuenta el limit
      const skip = (page - 1) * limit

      //Hacemos find en el modelo que nos recogera todos los personajes y los guardaremos en allCharacters indicandole el skip y el limite definidos
      const allCharacters = await Character.find().skip(skip).limit(limit)

      //Vamos a devolver en la respuesta el calculo y los datos para definir si hay pagina siguiente o pagina anterior
      return res.status(200).json({
        info: {
          total: numCharacters,
          page: page,
          limit: limit,
          next:
            numPages >= page + 1
              ? `/api/v1/characters?page=${page + 1}&limit=${limit}`
              : null,
          prev:
            page != 1
              ? `/api/v1/characters?page=${page - 1}&limit=${limit}`
              : null,
        },
        results: allCharacters,
      })
    } else {
      //Este es el valor por defecto si no le indicamos nada por query
      const allCharacters = await Character.find().limit(10)
      const numCharacters = await Character.countDocuments()

      return res.status(200).json({
        info: {
          total: numCharacters,
          page: 1,
          limit: 10,
          next:
            numCharacters > 10 ? `/api/v1/characters?page=2&limit=10` : null,
          prev: null,
        },
        results: allCharacters,
      })
    }
  } catch (error) {
    return next('Cannot find characters', error)
  }
}

const createCharacter = async (req, res, next) => {
  try {
    const newCharacter = new Character({
      ...req.body,
      image: req.file ? req.file.path : 'Not image found',
    })
    const createdCharacter = await newCharacter.save()
    return res.status(201).json(createdCharacter)
  } catch (error) {
    return next('Failed creating Character', error)
  }
}

const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params
    const character = await Character.findByIdAndDelete(id)
    //Si tiene algo en el campo image lo borramos con el middleware
    if (character.image) {
      deleteImgCloudinary(character.image)
    }
    return res.status(200).json(character)
  } catch (error) {
    return next('Error deleting character', error)
  }
}

module.exports = { getAllCharacters, createCharacter, deleteCharacter }
