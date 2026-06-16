const { Router } = require("express");
const {
  createEmpleado,
  listEmpleados,
  getEmpleadoById
} = require("../controllers/empleados.controller");

const router = Router();

// DAR DE ALTA UN EMPLEADO
router.post("/", createEmpleado);

// OBTENER TODOS LOS EMPLEADOS
router.get("/", listEmpleados);

// OBTENER UN EMPLEADO
router.get("/:id", getEmpleadoById);

module.exports = router;
