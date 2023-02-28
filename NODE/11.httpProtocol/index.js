//Importamos el modulo http
const http = require("http");
//Importamos el modulo file system
const fs = require("fs");

//Definimos el numero de puerto
const PORT = 8080;

//Definimos el manejador de peticiones
const requestHandler = (req, res) => {
  console.log(req.url);
  //Vamos a inspeccionar la url
  //Si la petición es "/" a través de la dirección de navegador
  if (req.url === "/") {
    //El contenido es texto html
    res.setHeader("Content-Type", "text/html");
    //Seteamos el codigo de respuesta del servidor
    res.writeHead(200);
    //Setemos la respuesta
    res.end(`<h1>Welcome!</h1>`);
    //Si la petición es de tipo GET en /users
  } else if (req.url === "/users" && req.method === "GET") {
    //El contenido es en formato json
    res.setHeader("Content-Type", "application/json");
    //Seteamos el código de la respuesta
    res.writeHead(200);
    //Seteamos la respuesta
    res.end(JSON.stringify({ name: "Peter", surname: "Parker", age: 25 }));
  }
};

//Creamos el servidor
const server = http.createServer(requestHandler);

//Escuchamos el server
server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
