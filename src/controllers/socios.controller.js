const Socio = require("../models/socio.model");
const { sendError } = require("../utils/http");

const createSocio = async (req, res) => {
  try {
    const socio = await Socio.create(req.body);
    res.status(201).json(socio);
  } catch (error) {
    sendError(res, error);
  }
};

const listSocios = async (req, res) => {
  try {
    const socios = await Socio.findAll({ order: [["id", "ASC"]] });
    res.json(socios);
  } catch (error) {
    sendError(res, error);
  }
};

const listSociosActivos = async (req, res) => {
  try {
    const socios = await Socio.findAll({
      where: { activo: true },
      order: [["id", "ASC"]]
    });
    res.json(socios);
  } catch (error) {
    sendError(res, error);
  }
};

const updateSocio = async (req, res) => {
  try {
    const socio = await Socio.findByPk(req.params.id);

    if (!socio) {
      return res.status(404).json({ mensaje: "Socio no encontrado" });
    }

    await socio.update(req.body);
    return res.json(socio);
  } catch (error) {
    return sendError(res, error);
  }
};

const deleteSocio = async (req, res) => {
  try {
    const socio = await Socio.findByPk(req.params.id);

    if (!socio) {
      return res.status(404).json({ mensaje: "Socio no encontrado" });
    }

    await socio.destroy();
    return res.json({ mensaje: "Socio eliminado correctamente" });
  } catch (error) {
    return sendError(res, error);
  }
};

module.exports = {
  createSocio,
  listSocios,
  listSociosActivos,
  updateSocio,
  deleteSocio
};
