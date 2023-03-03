const Faction = require('../models/faction.model')

const getAllFactions = async (req, res, next) => {
  try {
    const factions = await Faction.find().populate('characters')
    return res.status(200).json({
      info: 'All Factions',
      status: 'OK',
      results: factions,
    })
  } catch (error) {
    return next('Factions not found', error)
  }
}

const createFaction = async (req, res, next) => {
  try {
    const newFaction = new Faction(req.body)
    const createdFaction = await newFaction.save()
    return res.status(201).json(createdFaction)
  } catch (error) {
    return next('Failed creating Faction', error)
  }
}

const editFaction = async (req, res, next) => {
  try {
    const { id } = req.params
    const newFaction = new Faction(req.body)
    newFaction._id = id
    //Buscamos la faction original para respetarle ciertos campos
    const foundFaction = await Faction.findById(id)
    //Hacemos una copia de los datos en la nueva faccion
    newFaction.characters = [
      ...newFaction.characters,
      ...foundFaction.characters,
    ]

    const updatedFaction = await Faction.findByIdAndUpdate(id, newFaction)
    return res.status(200).json({
      new: newFaction,
      old: updatedFaction,
    })
  } catch (error) {
    return next('Error updating faction', error)
  }
}
module.exports = { getAllFactions, createFaction, editFaction }
