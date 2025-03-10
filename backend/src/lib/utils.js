
import jwt from "jsonwebtoken";

export const generateToken =(userID,res)=>{
    const token = jwt.sign({userID}, process.env.JWT_SECRET  , {
        expiresIn:"4d",
    });

  

    res.cookie("jwt", token, {
        maxAge: 4 * 24 * 60 * 60 * 1000,
        httpOnly: true, 
        sameSite:"strict",
        secure: process.env.NODE_MODE !== "development",

    });

    return token;
}
