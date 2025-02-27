import Product from "../models/product.model.js";

// Get products by category
export const getProductsByCategory = async (req, res) => {
  try {
    const category = req.query.category;
    const products = await Product.find({ category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get new arrival products
export const getNewProducts = async (req, res) => {
  try {
    const products = await Product.find({ isNew: true });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
