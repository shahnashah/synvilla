

import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import { adminAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/dashboard", adminAuth, (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
});

export default router;
