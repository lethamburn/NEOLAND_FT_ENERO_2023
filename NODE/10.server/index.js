//Importamos el modulo http que nos permitirá realizar peticiones
const http = require("http");

//Crear un servidor
const server = http.createServer((req, res) => {
  //Configuramos la respuesta de servidor
  res.statusCode = 200; //La respuesta es OK
  res.setHeader("Content-Type", "text/plain"); //El contenido es texto
  res.end("Buenas!");
});

//Escuchar el servidor para mantenerlo levantado
//8080 es el número del localhost
server.listen(8080, () => {
  console.log("Server listening on port http://localhost:8080");
});
