const mongoose = require('mongoose')

const FactionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    enum: ['demon slayer', 'demon'],
  },
  location: { type: String, required: false, trim: true },
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
})

const Faction = mongoose.model('Faction', FactionSchema)

module.exports = Faction
