const Empleado = require("../models/empleado.model");
const { sendError } = require("../utils/http");

const createEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.create(req.body);
    res.status(201).json(empleado);
  } catch (error) {
    sendError(res, error);
  }
};

const listEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll({ order: [["id", "ASC"]] });
    res.json(empleados);
  } catch (error) {
    sendError(res, error);
  }
};

const getEmpleadoById = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);

    if (!empleado) {
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    }

    return res.json(empleado);
  } catch (error) {
    return sendError(res, error);
  }
};

module.exports = {
  createEmpleado,
  listEmpleados,
  getEmpleadoById
};
