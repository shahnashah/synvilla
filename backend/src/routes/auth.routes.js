import express from "express";

import { signup ,
    login,
    logout,
    userReset,
    userUpdate,
    userDelete,
    userCheck,
} from "../controllers/auth.controller.js"
import { confirmUser, userLog } from "../middleware/auth.middleware.js";

const router = express.Router();


router.post("/signup",userLog,confirmUser,signup);
router.post("/login",userLog,confirmUser,login);
router.post("/logout",userLog,confirmUser,logout);
router.post("/reset",userLog,confirmUser,userReset);
router.post("/update",userLog,confirmUser,userUpdate);
router.post("/delete",userLog,confirmUser,userDelete);
router.post("/check",userLog,confirmUser,userCheck);

export default router;