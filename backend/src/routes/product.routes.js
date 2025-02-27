import express from "express";
import { getProductsByCategory, getNewProducts, getProductById } from "../controllers/productController.js";

const router = express.Router();

router.get("/list", getProductsByCategory);
router.get("/new", getNewProducts);
router.get("/:id", getProductById);

export default router;
