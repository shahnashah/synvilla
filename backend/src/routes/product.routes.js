import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
//import { Model } from "mongoose";
const router =  express.Router();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Setup for File Upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ Route to Add Product
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price } = req.body;
    
    if (!req.file) return res.status(400).json({ error: "Image is required" });

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
      if (error) return res.status(500).json({ error: "Upload failed" });

      const newProduct = new Product({
        name,
        description,
        price,
        image: result.secure_url,
      });

      newProduct.save()
        .then(product => res.status(201).json(product))
        .catch(err => res.status(500).json({ error: "Database error", details: err }));
    }).end(req.file.buffer);

  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

// ✅ Route to Fetch All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

// ✅ Route to Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
});

export default router;
