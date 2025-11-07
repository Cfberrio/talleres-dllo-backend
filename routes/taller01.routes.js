const express = require("express");
const {
  convertidorTemp,
  resolvedor,
  mejorParidad,
  peorParidad
} = require("../taller-01");

const router = express.Router();

router.post("/convertidor-temperatura", (req, res, next) => {
  try {
    const { celsius } = req.body;
    if (!Number.isFinite(celsius)) {
      return res.status(400).json({ error: "El valor de celsius debe ser numérico" });
    }
    const fahrenheit = convertidorTemp(celsius);
    return res.json({ resultado: fahrenheit });
  } catch (error) {
    return next(error);
  }
});

router.post("/formula-general", (req, res, next) => {
  try {
    const { coefA, coefB, coefC, raizPositiva } = req.body;
    if (!Number.isFinite(coefA) || !Number.isFinite(coefB) || !Number.isFinite(coefC)) {
      return res.status(400).json({ error: "coefA, coefB y coefC deben ser numéricos" });
    }
    if (coefA === 0) {
      return res.status(400).json({ error: "coefA no puede ser cero" });
    }

    const solucion = resolvedor(coefA, coefB, coefC, raizPositiva === undefined ? true : Boolean(raizPositiva));
    if (solucion === null) {
      return res.status(400).json({ error: "El discriminante es negativo, no hay soluciones reales" });
    }
    return res.json({ resultado: solucion });
  } catch (error) {
    return next(error);
  }
});

router.post("/mejor-paridad", (req, res, next) => {
  try {
    const { numero } = req.body;
    if (!Number.isInteger(numero)) {
      return res.status(400).json({ error: "numero debe ser un entero" });
    }
    const resultado = mejorParidad(numero);
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

router.post("/peor-paridad", (req, res, next) => {
  try {
    const { numero } = req.body;
    if (!Number.isInteger(numero)) {
      return res.status(400).json({ error: "numero debe ser un entero" });
    }
    const resultado = peorParidad(numero);
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

