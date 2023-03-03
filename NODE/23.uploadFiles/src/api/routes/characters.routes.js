const express = require('express')

const CharactersRoutes = express.Router()

//Importamos la función de subida de ficheros
const { upload } = require('../../middlewares/files.middleware')

const {
  getAllCharacters,
  createCharacter,
  deleteCharacter,
} = require('../controllers/characters.controller')

CharactersRoutes.get('/', getAllCharacters)
//Interferimos en la petición para decirle que use la función de subida de ficheros. Tenemos que indicarle el nombre del campo
CharactersRoutes.post('/', upload.single('image'), createCharacter)
CharactersRoutes.delete('/:id', deleteCharacter)
module.exports = CharactersRoutes
