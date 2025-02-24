// import Product from '../models/product.model.js';

// // Get all products (with filters)
// export const getProducts = async (req, res) => {
//     try {
//         const products = await Product.find(req.query);
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Get product details by ID
// export const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) return res.status(404).json({ message: 'Product not found' });
//         res.json(product);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Add new product (Admin only)
// export const createProduct = async (req, res) => {
//     try {
//         const newProduct = new Product(req.body);
//         const savedProduct = await newProduct.save();
//         res.status(201).json(savedProduct);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// // Update product details (Admin only)
// export const updateProduct = async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
//         res.json(updatedProduct);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// // Delete product (Admin only)
// export const deleteProduct = async (req, res) => {
//     try {
//         const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//         if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
//         res.json({ message: 'Product deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };


import Product from '../models/product.model.js';
import axios from "axios";

// Get all products (with filters)
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(req.query);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get product details by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new product (Admin only)
export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update product details (Admin only)
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete product (Admin only)
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
