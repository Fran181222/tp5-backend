const Transaccion = require("../models/transaccion.model");
const { sendError } = require("../utils/http");

const createTransaccion = async (req, res) => {
  try {
    const transaccion = await Transaccion.create(req.body);
    res.status(201).json(transaccion);
  } catch (error) {
    sendError(res, error);
  }
};

const listTransacciones = async (req, res) => {
  try {
    const transacciones = await Transaccion.findAll({ order: [["id", "ASC"]] });
    res.json(transacciones);
  } catch (error) {
    sendError(res, error);
  }
};

const getTransaccionesByCliente = async (req, res) => {
  try {
    const transacciones = await Transaccion.findAll({
      where: { emailCliente: req.params.emailCliente },
      order: [["id", "ASC"]]
    });
    res.json(transacciones);
  } catch (error) {
    sendError(res, error);
  }
};

const getTransaccionesByIdiomas = async (req, res) => {
  try {
    const transacciones = await Transaccion.findAll({
      where: {
        idiomaOrigen: req.params.idiomaOrigen,
        idiomaDestino: req.params.idiomaDestino
      },
      order: [["id", "ASC"]]
    });
    res.json(transacciones);
  } catch (error) {
    sendError(res, error);
  }
};

module.exports = {
  createTransaccion,
  listTransacciones,
  getTransaccionesByCliente,
  getTransaccionesByIdiomas
};
