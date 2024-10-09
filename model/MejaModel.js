import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Menu from "./MenuModel.js";

const Meja = db.define(
  "Meja",
  {
    id_meja: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nomor_meja: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kapasitas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "meja"
  }
);

Meja.hasMany(Menu, {foreignKey: "meja_id"});
Menu.belongsTo(Meja, {foreignKey: "meja_id"});

export default Meja;