const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createProduct = async (req, res) => {
  const { category, term, brand, condition, available, image } = req.body;
  try {
    const newProduct = await Product.create({ category, term, brand, condition, available, image });
    res
      .status(201)
      .send(`New product ${newProduct.term} has been created`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { category, term, brand, condition, available, image  } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { category, term, brand, condition, available, image },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res
      .status(200)
      .send(`Product ${deletedProduct.term} has been deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
