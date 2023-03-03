const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connect = require('./utils/connect')
const { configCloudinary } = require('./middlewares/files.middleware')
const CharactersRoutes = require('./api/routes/characters.routes')
const FactionsRoutes = require('./api/routes/factions.routes')
dotenv.config()

const PORT = process.env.PORT

//Contectamos con Cloudinary
configCloudinary()

const server = express()
connect()
server.use(
  cors({
    origin: '*',
    credentials: true,
  })
)

server.use(express.json({ limit: '5mb' }))
server.use(express.urlencoded({ limit: '5mb', extended: true }))

server.use('/api/v1/characters', CharactersRoutes)
server.use('/api/v1/factions', FactionsRoutes)

server.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  return next(error)
})

server.disabled('x-powered-by')

server.listen(PORT, () => {
  console.log(`Server running on htpp://localhost:${PORT}`)
})
