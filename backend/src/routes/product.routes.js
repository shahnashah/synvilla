// // import express from 'express';
// // import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

// // const router = express.Router();

// // router.get('/', getProducts);
// // router.get('/:id', getProductById);
// // router.post('/create',  createProduct);
// // router.put('/:id', updateProduct);
// // router.delete('/:id',  deleteProduct);

// // export default router;



// import express from "express";
// import multer from "multer";
// import cloudinary from "../config/cloudinary.js";
// import Product from "../models/product.model.js";

// const router = express.Router();
// const upload = multer({ storage: multer.memoryStorage() });

// // Add Product
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload_stream(
//       { resource_type: "image" },
//       async (error, result) => {
//         if (error) return res.status(500).json({ error: "Upload failed" });

//         const product = new Product({
//           name: req.body.name,
//           description: req.body.description,
//           image: result.secure_url,
//         });
//         await product.save();
//         res.status(201).json(product);
//       }
//     ).end(req.file.buffer);
//   } catch (error) {
//     res.status(500).json({ error: "Error adding product" });
//   }
// });

// // Get All Products
// router.get("/", async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });

// // Get Product by ID
// router.get("/:id", async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   res.json(product);
// });

// // Update Product
// router.put("/:id", upload.single("image"), async (req, res) => {
//   try {
//     let imageUrl = req.body.image;
//     if (req.file) {
//       const result = await cloudinary.uploader.upload_stream(
//         { resource_type: "image" },
//         async (error, result) => {
//           if (error) return res.status(500).json({ error: "Upload failed" });

//           imageUrl = result.secure_url;
//           const updatedProduct = await Product.findByIdAndUpdate(
//             req.params.id,
//             { name: req.body.name, description: req.body.description, image: imageUrl },
//             { new: true }
//           );
//           res.json(updatedProduct);
//         }
//       ).end(req.file.buffer);
//     } else {
//       const updatedProduct = await Product.findByIdAndUpdate(
//         req.params.id,
//         { name: req.body.name, description: req.body.description },
//         { new: true }
//       );
//       res.json(updatedProduct);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Error updating product" });
//   }
// });

// // Delete Product
// router.delete("/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Error deleting product" });
//   }
// });

// export default router;


//const express = require("express");
//const multer = require("multer");
//const cloudinary = require("cloudinary").v2;
//const Product = require("../models/Product");
import express from "express";

import multer from "multer";
import cloudinary from "multer";
import { Model } from "mongoose";
const router = express.Router();

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
