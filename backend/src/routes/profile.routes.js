import express from "express";
import { updateProfile } from "../controllers/profileController.js";
import TokenGuard from "../middleware/TokenGuard.js";

const router = express.Router();

router.put("/update", TokenGuard, updateProfile);

export default router;
