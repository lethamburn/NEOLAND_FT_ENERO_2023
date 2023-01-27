const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data.json");
const middelwares = jsonServer.defaults();

server.use(middelwares);
server.use(router);

server.listen(8080, () => {
  console.log("Server running on port http://localhost:8080");
});
