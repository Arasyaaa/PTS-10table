import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Ulasan from "./UlasanModel.js";

const Pembayaran = db.define(
  "Pembayaran",
  {
    id_pembayaran: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    metode_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_pembayaran: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "pembayaran"
  }
);

Pembayaran.hasMany(Ulasan, {foreignKey: "pembayaran_id"});
Ulasan.belongsTo(Pembayaran, {foreignKey: "pembayaran_id"});

export default Pembayaran;