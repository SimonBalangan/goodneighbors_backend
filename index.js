require("dotenv").config();
const cors = require("cors");
const express = require("express");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const db = require("./db/db");

const app = express();

const port = process.env.PORT || 8080;

db();

//built-in & third-party middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//Router Implementierung
app.use("/", usersRouter, productsRouter);

app.get("/", async (req, res) => {
  res.send(`<h1>BACKEND GOOD NEIGHBORS</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
