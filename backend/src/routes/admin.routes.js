// import express from "express";
// import { TokenGuard } from "../middleware/auth.middleware.js";
// import { adminDashboard } from "../controllers/admin.controller.js";

// const router = express.Router();

// router.get("/admin", TokenGuard,adminDashboard (req, res) => {
//     res.json({ message: "Welcome Admin" });
// });

// export default router;

import express from "express";
import { TokenGuard } from "../middleware/auth.middleware.js";
import { adminDashboard } from "../controllers/admin.controller.js";


const router = express.Router();

//  Corrected Route
router.get("/admin", TokenGuard, adminDashboard);

export default router;

