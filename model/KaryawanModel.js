import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Meja from "./MejaModel.js";

const Karyawan = db.define(
  "Karyawan",
  {
    id_karyawan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posisi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gaji: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telepon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "karyawan"
  }
);

Karyawan.hasMany(Meja, {foreignKey: "karyawan_id"});
Meja.belongsTo(Karyawan, {foreignKey: "karyawan_id"});

export default Karyawan;