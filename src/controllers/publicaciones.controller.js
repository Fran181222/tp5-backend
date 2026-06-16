const { Op } = require("sequelize");
const Empleado = require("../models/empleado.model");
const Publicacion = require("../models/publicacion.model");
const { sendError } = require("../utils/http");

Empleado.hasMany(Publicacion, {
  foreignKey: {
    name: "empleadoId",
    allowNull: false
  },
  as: "publicaciones",
  onDelete: "CASCADE"
});

Publicacion.belongsTo(Empleado, {
  foreignKey: {
    name: "empleadoId",
    allowNull: false
  },
  as: "empleado"
});

const buildSearchWhere = ({ titulo, vigente }) => {
  const where = {};

  if (titulo) {
    where.titulo = { [Op.iLike]: `%${titulo}%` };
  }

  if (vigente !== undefined) {
    where.vigente = vigente === true || vigente === "true";
  }

  return where;
};

const createPublicacion = async (req, res) => {
  try {
    const empleadoId = req.body.empleadoId || req.body.empleado?.id;
    const empleado = await Empleado.findByPk(empleadoId);

    if (!empleado) {
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    }

    const publicacion = await Publicacion.create({
      titulo: req.body.titulo,
      contenido: req.body.contenido,
      imagenAsociada: req.body.imagenAsociada,
      fechaPublicacion: req.body.fechaPublicacion,
      vigente: req.body.vigente,
      empleadoId: empleado.id
    });

    const publicacionConEmpleado = await Publicacion.findByPk(publicacion.id, {
      include: [{ model: Empleado, as: "empleado" }]
    });

    return res.status(201).json(publicacionConEmpleado);
  } catch (error) {
    return sendError(res, error);
  }
};

const listPublicaciones = async (req, res) => {
  try {
    const publicaciones = await Publicacion.findAll({
      include: [{ model: Empleado, as: "empleado" }],
      order: [["id", "ASC"]]
    });
    res.json(publicaciones);
  } catch (error) {
    sendError(res, error);
  }
};

const searchPublicacionesByQuery = async (req, res) => {
  try {
    const publicaciones = await Publicacion.findAll({
      where: buildSearchWhere(req.query),
      include: [{ model: Empleado, as: "empleado" }],
      order: [["id", "ASC"]]
    });
    res.json(publicaciones);
  } catch (error) {
    sendError(res, error);
  }
};

const searchPublicacionesByBody = async (req, res) => {
  try {
    const publicaciones = await Publicacion.findAll({
      where: buildSearchWhere(req.body),
      include: [{ model: Empleado, as: "empleado" }],
      order: [["id", "ASC"]]
    });
    res.json(publicaciones);
  } catch (error) {
    sendError(res, error);
  }
};

const updatePublicacion = async (req, res) => {
  try {
    const publicacion = await Publicacion.findByPk(req.params.id);

    if (!publicacion) {
      return res.status(404).json({ mensaje: "Publicacion no encontrada" });
    }

    const empleadoId = req.body.empleadoId || req.body.empleado?.id;

    if (empleadoId) {
      const empleado = await Empleado.findByPk(empleadoId);

      if (!empleado) {
        return res.status(404).json({ mensaje: "Empleado no encontrado" });
      }
    }

    await publicacion.update({
      titulo: req.body.titulo,
      contenido: req.body.contenido,
      imagenAsociada: req.body.imagenAsociada,
      fechaPublicacion: req.body.fechaPublicacion,
      vigente: req.body.vigente,
      empleadoId: empleadoId || publicacion.empleadoId
    });

    const publicacionActualizada = await Publicacion.findByPk(publicacion.id, {
      include: [{ model: Empleado, as: "empleado" }]
    });

    return res.json(publicacionActualizada);
  } catch (error) {
    return sendError(res, error);
  }
};

const deletePublicacion = async (req, res) => {
  try {
    const publicacion = await Publicacion.findByPk(req.params.id);

    if (!publicacion) {
      return res.status(404).json({ mensaje: "Publicacion no encontrada" });
    }

    await publicacion.destroy();
    return res.json({ mensaje: "Publicacion eliminada correctamente" });
  } catch (error) {
    return sendError(res, error);
  }
};

module.exports = {
  createPublicacion,
  listPublicaciones,
  searchPublicacionesByQuery,
  searchPublicacionesByBody,
  updatePublicacion,
  deletePublicacion
};
