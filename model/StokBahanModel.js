import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Pembayaran from "./PembayaranModel.js";

const StokBahan = db.define(
  "StokBahan",
  {
    id_bahan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama_bahan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    satuan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tanggal_kadaluarsa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    tableName: "stokbahan"
  }
);

StokBahan.hasMany(Pembayaran, {foreignKey: "stokbahan_id"});
Pembayaran.belongsTo(StokBahan, {foreignKey: "stokbahan_id"});

export default StokBahan;