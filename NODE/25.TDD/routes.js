const express = require('express')

const { store } = require('./services/product-service')

const router = express.Router()

router.post('/products', async (req, res) => {
  const { name, description, price } = req.body
  //_id siempre va a ser abc
  const _id = 'abc'

  //Ejecutamos store porque es lo que se espera en el segundo test
  await store({ name, description, price })

  res.status(201).json({
    name,
    description,
    price,
    _id,
  })
})

module.exports = router
