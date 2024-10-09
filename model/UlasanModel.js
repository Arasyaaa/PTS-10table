import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Ulasan = db.define(
  "Ulasan",
  {
    id_ulasan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    komentar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_ulasan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "ulasan"
  }
);

export default Ulasan;