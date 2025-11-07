const express = require("express");
const {
  desglosarString,
  twoSum,
  conversionRomana,
  descomposicion
} = require("../taller-03");

const router = express.Router();

router.post("/desglosar", (req, res, next) => {
  try {
    const { cadena, tipo } = req.body;
    if (typeof cadena !== "string" || cadena.length === 0) {
      return res.status(400).json({ error: "cadena debe ser un texto no vacío" });
    }
    if (tipo !== "vocales" && tipo !== "consonantes") {
      return res.status(400).json({ error: "tipo debe ser 'vocales' o 'consonantes'" });
    }
    const resultado = desglosarString(cadena, tipo);
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

router.post("/two-sum", (req, res, next) => {
  try {
    const { numeros, objetivo } = req.body;
    if (!Array.isArray(numeros)) {
      return res.status(400).json({ error: "numeros debe ser un arreglo" });
    }
    const listaNumerica = numeros.map(Number);
    if (listaNumerica.some((valor) => !Number.isFinite(valor))) {
      return res.status(400).json({ error: "todos los valores deben ser numéricos" });
    }
    if (!Number.isFinite(objetivo)) {
      return res.status(400).json({ error: "objetivo debe ser numérico" });
    }
    const resultado = twoSum(listaNumerica, Number(objetivo));
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

router.post("/romanos", (req, res, next) => {
  try {
    const { numeroRomano } = req.body;
    if (typeof numeroRomano !== "string" || numeroRomano.length === 0) {
      return res.status(400).json({ error: "numeroRomano debe ser un texto no vacío" });
    }
    const resultado = conversionRomana(numeroRomano);
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

router.post("/descomposicion", (req, res, next) => {
  try {
    const { cadena } = req.body;
    if (typeof cadena !== "string" || cadena.length === 0) {
      return res.status(400).json({ error: "cadena debe ser un texto no vacío" });
    }
    const resultado = descomposicion(cadena);
    return res.json({ resultado });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

