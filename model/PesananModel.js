import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import DetailPesanan from "./DetailPesananModel.js";

const Pesanan = db.define(
  "Pesanan",
  {
    id_pesanan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tanggal_pesanan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "pesanan"
  }
);
Pesanan.hasMany(DetailPesanan, {foreignKey: "pesanan_id"});
DetailPesanan.belongsTo(Pesanan, {foreignKey: "pesanan_id"});

export default Pesanan;