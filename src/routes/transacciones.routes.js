const { Router } = require("express");
const {
  createTransaccion,
  listTransacciones,
  getTransaccionesByCliente,
  getTransaccionesByIdiomas
} = require("../controllers/transacciones.controller");

const router = Router();

// DAR DE ALTA UNA TRANSACCION
router.post("/", createTransaccion);

// RECUPERAR TODAS LAS TRANSACCIONES REGISTRADAS
router.get("/", listTransacciones);

// RECUPERAR HISTORICO POR CLIENTE
router.get("/cliente/:emailCliente", getTransaccionesByCliente);

// RECUPERAR POR IDIOMA ORIGEN Y DESTINO
router.get("/idiomas/:idiomaOrigen/:idiomaDestino", getTransaccionesByIdiomas);

module.exports = router;
