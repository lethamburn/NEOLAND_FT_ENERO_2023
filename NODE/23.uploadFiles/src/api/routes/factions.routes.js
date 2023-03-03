const express = require('express')

const FactionsRoutes = express.Router()

const {
  getAllFactions,
  createFaction,
  editFaction,
} = require('../controllers/factions.controller')

FactionsRoutes.get('/', getAllFactions)
FactionsRoutes.post('/', createFaction)
FactionsRoutes.put('/:id', editFaction)
module.exports = FactionsRoutes
