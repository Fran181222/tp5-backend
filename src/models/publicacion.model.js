const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Publicacion = sequelize.define(
  "Publicacion",
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagenAsociada: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fechaPublicacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vigente: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    tableName: "publicaciones"
  }
);

module.exports = Publicacion;
