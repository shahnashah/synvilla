// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";




// export const TokenGuard = async(req,res,next)=>{
    
//     try{
//         const token =req.cookies.jwt;

//         if(!token){
//             const error = new Error("Acess Denied");
//             error.statusCode=401;
//             next(error);
//         }
//         const decode =jwt.verify(token,process.env.JWT_SECRET);

//         if(!decode){
//             const error = newError("Access Denied Token Expire");
//             error.statusCode=401;
//             next(error);
//         }

//         const user = await User.findById(decode.userID).select("-password");
//         if(!user){
//             const error = new Error("User Not Found");
//             error.statusCode=404;
//             next(error);
//         }
//         if (user.role !== "admin") {
//             return res.status(403).json({ error: "Access Forbidden: Admins Only" });
            
//         }
//         req.user=user;
//         next();
//     }


    
    
    
//     catch(error)
//     {
//         next(error);
//     }
// };

import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const TokenGuard = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Access Denied: No Token Provided" });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({ error: "Access Denied: Token Expired or Invalid" });
        }

        const user = await User.findById(decode.userID).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User Not Found" });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid or Expired Token" });
    }
};

// Admin Authentication Middleware


export const adminAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Not an admin" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};





