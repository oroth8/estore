import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

dotenv.config();

const App = express();

App.get("/", (req, res) => {
  res.send("Api is running...");
});

App.get("/products", (req, res) => {
  res.send(products);
});

App.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 8080;

App.listen(
  PORT,
  console.log(
    `Server running in "${process.env.NODE_ENV}" mode on port ${PORT}`
  )
);
