import db from "../utils/connection.js";
import Pelanggan from "./PelangganModel.js";
import Menu from "./MenuModel.js";
import Pesanan from "./PesananModel.js";
import DetailPesanan from "./DetailPesananModel.js";
import Pembayaran from "./PembayaranModel.js";
import Karyawan from "./KaryawanModel.js";
import Meja from "./MejaModel.js";
import Reservasi from "./ReservasiModel.js";
import Ulasan from "./UlasanModel.js";
import StokBahan from "./StokBahanModel.js";

await db.sync({ alter: true });