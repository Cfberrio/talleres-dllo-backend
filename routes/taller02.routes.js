const express = require("express");
const {
  findMax,
  includes,
  sum,
  missingNumbers
} = require("../taller-02");

const router = express.Router();

router.post("/maximo", (req, res, next) => {
  try {
    const { numeros } = req.body;
    if (!Array.isArray(numeros) || numeros.length === 0) {
      return res.status(400).json({ error: "numeros debe ser un arreglo no vacío" });
    }
    const listaNumerica = numeros.map(Number);
    if (listaNumerica.some((valor) => !Number.isFinite(valor))) {
      return res.status(400).json({ error: "todos los valores del arreglo deben ser numéricos" });
    }
    const resultado = findMax(listaNumerica);
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

router.post("/incluye", (req, res, next) => {
  try {
    const { numeros, objetivo } = req.body;
    if (!Array.isArray(numeros)) {
      return res.status(400).json({ error: "numeros debe ser un arreglo" });
    }
    const listaNumerica = numeros.map(Number);
    if (listaNumerica.some((valor) => !Number.isFinite(valor))) {
      return res.status(400).json({ error: "todos los valores del arreglo deben ser numéricos" });
    }
    if (!Number.isFinite(objetivo)) {
      return res.status(400).json({ error: "objetivo debe ser numérico" });
    }
    const resultado = includes(listaNumerica, Number(objetivo));
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

router.post("/suma", (req, res, next) => {
  try {
    const { numeros } = req.body;
    if (!Array.isArray(numeros)) {
      return res.status(400).json({ error: "numeros debe ser un arreglo" });
    }
    const listaNumerica = numeros.map(Number);
    if (listaNumerica.some((valor) => !Number.isFinite(valor))) {
      return res.status(400).json({ error: "todos los valores del arreglo deben ser numéricos" });
    }
    const resultado = sum(listaNumerica);
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

router.post("/faltantes", (req, res, next) => {
  try {
    const { numeros } = req.body;
    if (!Array.isArray(numeros)) {
      return res.status(400).json({ error: "numeros debe ser un arreglo" });
    }
    const listaNumerica = numeros.map(Number);
    if (listaNumerica.some((valor) => !Number.isFinite(valor))) {
      return res.status(400).json({ error: "todos los valores del arreglo deben ser numéricos" });
    }
    const resultado = missingNumbers(listaNumerica);
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

