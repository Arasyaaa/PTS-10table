import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Reservasi from "./ReservasiModel.js";
import Ulasan from "./UlasanModel.js";
import Pembayaran from "./PembayaranModel.js";

const Pelanggan = db.define(
  "Pelanggan",
  {
    id_pelanggan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telepon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "pelanggan"
  }
);

Pelanggan.hasMany(Reservasi, {foreignKey: "pelanggan_id"});
Reservasi.belongsTo(Pelanggan, {foreignKey: "pelanggan_id"});

Pelanggan.hasMany(Ulasan, {foreignKey: "pelanggan_id"});
Ulasan.belongsTo(Pelanggan, {foreignKey: "pelanggan_id"});

Pelanggan.hasMany(Pembayaran, {foreignKey: "pelanggan_id"});
Pembayaran.belongsTo(Pelanggan, {foreignKey: "pelanggan_id"});

export default Pelanggan;