const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const app = express();
const path = require("path");
const pagesRouter = require("./routes/pages");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
});

db.connect((err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname + "/public")));
app.set("view engine", "hbs");
app.use(pagesRouter);

app.listen(PORT, () => {
  console.log("started on port", PORT);
});
