import jwt from "jsonwebtoken";
import admins from "../models/admin.model.js"; 


export const TokenGuard = async (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);
        
        
        const token = req.cookies.jwt;

        console.log(token);
        

        if (!token) {
            return res.status(401).json({ error: "Access Denied: No Token Provided" });
        }
        console.log("Token Verified");
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Access Denied: Token Expired or Invalid" });
        }
        console.log("Decoding Done");
        console.log(decoded)
        const user = await admins.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User Not Found" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or Expired Token" });
    }
};
