const express = require("express");
const taller01Routes = require("./routes/taller01.routes");
const taller02Routes = require("./routes/taller02.routes");
const taller03Routes = require("./routes/taller03.routes");

const app = express();

app.use(express.json());

app.use("/api/taller-01", taller01Routes);
app.use("/api/taller-02", taller02Routes);
app.use("/api/taller-03", taller03Routes);

app.use((req, res) => {
  return res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((error, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(error);
  return res.status(500).json({ error: "Error interno del servidor" });
});

module.exports = app;

