import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Pesanan from "./PesananModel.js";

const Menu = db.define(
  "Menu",
  {
    id_menu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama_menu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "menu"
  }
);

Menu.hasMany(Pesanan, {foreignKey: "menu_id"});
Pesanan.belongsTo(Menu, {foreignKey: "menu_id"});

export default Menu;