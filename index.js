import express from "express";
import bodyParser from "body-parser";
// import db from "./utils/connection.js";
import "./model/index.js"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
  console.log("server is running in http://localhost:3000");
});