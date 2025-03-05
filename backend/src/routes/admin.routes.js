import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  adminSignup,
  adminLogin,
  addProduct,
  updateProduct,
  deleteProduct,
  fetchProducts,
} from "../controllers/admin.controller.js";
import adminMiddleware from "../middleware/admin.middleware.js";
import { TokenGuard } from "../middleware/auth.middleware.js";

const router = express.Router();

// 🔹 Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔹 Multer Setup for Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// ✅ Admin Routes
router.post("/signup", adminSignup);
router.post("/login", adminLogin);

// ✅ Product Routes
router.post(
  "/productAdd",
  TokenGuard,
  adminMiddleware,
  upload.single("image"),
  addProduct
);
router.put(
  "/productManage/:id",
  TokenGuard,
  adminMiddleware,
  upload.single("image"),
  updateProduct
);
router.delete("/productDelete/:id", TokenGuard, adminMiddleware, deleteProduct);
router.get("/products", TokenGuard, adminMiddleware, fetchProducts);

export default router;
