const { Router } = require("express");
const {
  createSocio,
  listSocios,
  listSociosActivos,
  updateSocio,
  deleteSocio
} = require("../controllers/socios.controller");

const router = Router();

// CREAR SOCIO
router.post("/", createSocio);

// LISTAR SOCIOS
router.get("/", listSocios);

// LISTAR SOCIOS ACTIVOS
router.get("/activos", listSociosActivos);

// EDITAR SOCIO POR ID
router.put("/:id", updateSocio);

// BORRAR SOCIO
router.delete("/:id", deleteSocio);

module.exports = router;
