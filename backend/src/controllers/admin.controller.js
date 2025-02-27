// admin.controller.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Product from "../models/product.model.js";
import Admin from "../models/Admin.model.js";

// ✅ Admin Signup
export const adminSignup = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      const error = new Error("All Fields Are Required!");
      error.statusCode = 400;
      throw error;
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      const error = new Error("Admin already exists!");
      error.statusCode = 400;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ name, email, password: hashedPassword, role });
    await admin.save();

    res.status(201).json({ message: "Admin Created Successfully!" });
  } catch (error) {
    next(error);
  }
};

// ✅ Admin Login
export const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      const error = new Error("Invalid Credentials");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.status(200).json({ message: "Login Successful!", token });
  } catch (error) {
    next(error);
  }
};

// ✅ Add Product
export const addProduct = async (req, res, next) => {
  try {
    const { name, description, price, category, isNewArrival } = req.body;
    if (!name || !description || !price || !category) {
      const error = new Error("All Fields Are Required!");
      error.statusCode = 400;
      throw error;
    }

    const image = req.file ? req.file.path : null;
    const product = new Product({
      name,
      description,
      price,
      category,
      isNewArrival,
      image,
    });
    await product.save();

    res.status(201).json({ message: "Product Added Successfully!", product });
  } catch (error) {
    next(error);
  }
};

// ✅ Update Product
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedProduct) {
      const error = new Error("Product Not Found!");
      error.statusCode = 404;
      throw error;
    }

    res.json({ message: "Product Updated Successfully!", updatedProduct });
  } catch (error) {
    next(error);
  }
};

// ✅ Delete Product
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      const error = new Error("Product Not Found!");
      error.statusCode = 404;
      throw error;
    }

    res.json({ message: "Product Deleted Successfully!" });
  } catch (error) {
    next(error);
  }
};
