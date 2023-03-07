const server = require('./app.js')

const PORT = 8080

//Solamente se va a arrancar el server si lo iniciamos desde index.js
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

module.exports = server
