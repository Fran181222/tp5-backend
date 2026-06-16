const { Router } = require("express");
const {
  createPublicacion,
  listPublicaciones,
  searchPublicacionesByQuery,
  searchPublicacionesByBody,
  updatePublicacion,
  deletePublicacion
} = require("../controllers/publicaciones.controller");

const router = Router();

// DAR DE ALTA UNA PUBLICACION Y ENVIAR AL EMPLEADO COMO PROPIEDAD
router.post("/", createPublicacion);

// RECUPERAR TODAS LAS PUBLICACIONES INCLUYENDO LA INFO DE LOS EMPLEADOS
router.get("/", listPublicaciones);

router.get("/buscar", searchPublicacionesByQuery);
router.post("/buscar", searchPublicacionesByBody);

// EDITAR UNA PUBLICACION
router.put("/:id", updatePublicacion);

// ELIMINAR UNA PUBLICACION
router.delete("/:id", deletePublicacion);

module.exports = router;
