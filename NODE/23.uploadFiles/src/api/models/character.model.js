const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  status: {
    type: String,
    required: true,
    trim: true,
    enum: ['dead', 'alive'],
    default: 'alive',
  },
  image: { type: String, required: true, trim: true },
})

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character
