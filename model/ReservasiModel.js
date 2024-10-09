import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Karyawan from "./KaryawanModel.js";

const Reservasi = db.define(
  "Reservasi",
  {
    id_reservasi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tanggal_reservasi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jumlah_pengunjung: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "reservasi"
  }
);

Reservasi.hasMany(Karyawan, {foreignKey: "reservasi_id"});
Karyawan.belongsTo(Reservasi, {foreignKey: "reservasi_id"});

export default Reservasi;