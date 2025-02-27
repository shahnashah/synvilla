import jwt from "jsonwebtoken";
import admins from "../models/Admin.model.js"; 


export const TokenGuard = async (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);
        console.log("Authorization Header:", req.headers.authorization);
        console.log(req.headers.authorization?.split(" ")[1]);
        
        const token = req.headers.authorization?.split(" ")[1]; //req.cookies.jwt || req.headers.authorization?.split(" ")[1];

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
