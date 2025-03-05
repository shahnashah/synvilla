
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


// export const generateToken = (userID, res) => {
//     if (!process.env.JWT_SECRET) {
//         throw new Error("JWT_SECRET is not defined in environment variables.");
//     }

//     const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
//         expiresIn: "4d",
//     });

//     res.cookie("jwt", token, {
//         maxAge: 4 * 24 * 60 * 60 * 1000,  // 4 days
//         httpOnly: true, 
//         sameSite: "strict",
//         secure: process.env.NODE_ENV !== "development",
//     });

//     return token;
// };