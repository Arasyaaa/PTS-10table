import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import StokBahan from "./StokBahanModel.js";

const DetailPesanan = db.define(
  "detailpesanan",
  {
    id_detail: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "detailpesanan"
  }
);

DetailPesanan.hasMany(StokBahan, {foreignKey: "detailpesanan_id"});
StokBahan.belongsTo(DetailPesanan, {foreignKey: "detailpesanan_id"});

export default DetailPesanan;