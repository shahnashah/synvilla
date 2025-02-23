import express from "express";
import path, { format } from"path";
import { signup ,
    login,
    logout,
} from "../controllers/auth.controller.js"

import { TokenGuard } from "../middleware/auth.middleware.js";

const router = express.Router();


router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

export default router;