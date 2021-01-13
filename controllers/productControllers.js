import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";

// @desc GET all products
// @route GET /products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  // returns all products
  const products = await Product.find({});

  res.json(products);
});

// @desc GET all products
// @route GET /products/:id
// @access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProductById, getProducts };