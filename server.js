const http = require("http");
const app = require("./app");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

