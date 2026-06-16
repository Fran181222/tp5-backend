require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("../config/database");
const sociosRoutes = require("./routes/socios.routes");
const transaccionesRoutes = require("./routes/transacciones.routes");
const empleadosRoutes = require("./routes/empleados.routes");
const publicacionesRoutes = require("./routes/publicaciones.routes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "15mb" }));

app.get("/", (req, res) => {
  res.json({
    mensaje: "API REST Practica Backend-Frontend",
    rutas: {
      socios: "/api/socios",
      transacciones: "/api/transacciones",
      empleados: "/api/empleados",
      publicaciones: "/api/publicaciones"
    }
  });
});

app.use("/api/socios", sociosRoutes);
app.use("/api/transacciones", transaccionesRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/publicaciones", publicacionesRoutes);

app.use((req, res) => {
  res.status(404).json({ mensaje: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: process.env.DB_SYNC_ALTER === "true" });

    app.listen(PORT, () => {
      console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo iniciar el servidor:", error.message);
    process.exit(1);
  }
}

startServer();

module.exports = app;
