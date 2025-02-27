import express from "express";
import multer from "multer";
import Product from "../models/product.model.js";

const router = express.Router();

// Multer storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Get products by category
router.get("/list", async (req, res) => {
  try {
    const { category } = req.query;
    const products = await Product.find(category ? { category } : {});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get new arrival products
router.get("/new", async (req, res) => {
  try {
    const products = await Product.find({ isNewArrival: true });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
