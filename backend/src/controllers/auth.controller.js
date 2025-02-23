import { generateToken } from "../lib/utils.js";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import path from "path";

// signup ----------------------------------------------------------------------------------------------------
export const signup = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  console.log(fullName, email, password);
  try {
    if (!fullName || !email || !password) {
      const error = new Error("All Fields Required!!!");
      error.statusCode = 400;
      next(error);
      return;
    }

    if (password.length < 10) {
      const error = new error("Password must contain at least 10 character");
      error.statusCode = 400;
      next(error);
      return;
    }

    const user = await User.findOne({ email });

    if (user) {
      const error = new Error("Email already Exist");
      error.statusCode = 400;
      next(error);
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    console.log(newUser._id);
    res.status(201).json({ message: `Welcome to  SynVilla ${fullName}` });
  } catch (error) {
    next(error);
    return;
  }
};

// login------------------------------------------------------------------------------------------------------

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    if (!email || !password) {
      const error = new Error("All fields Required!!!");
      error.statusCode = 400;
      next(error);
      return;
    }
    if (password.length < 10) {
      const error = new Error("Password Must contains at least 10 Characters");
      error.statusCode = 400;
      next(error);
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("Invalid Email or Password");
      error.statusCode = 404;
      next(error);
      return;
    }

<<<<<<< HEAD:backend/src/controllers/auth.js
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid Credentials");
      error.statusCode = 400;
      next(error);
      return;
    }
=======
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            const error = new Error("Invalid Credentials")
            error.statusCode=400;
            next(error);
            return;
        }
>>>>>>> bcd8ac0ce25243bfc74a67109f3f057188e5b54e:backend/src/controllers/auth.controller.js

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      const error = new Error("Invalid Email or password");
      error.statusCode = 404;
      next(error);
      return;
    }
    generateToken(user.id, res);

    res.status(200).json({
      message: `Welcome Back ${user.fullName}`,
      fullName: user.fullName,
      email: user.email,
      userProfile: user.userProfile,
    });
  } catch (error) {
    next(error);
  }
};

//logout -----------------------------------------------------------------------------------------------------

export const logout = (req, res, next) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "See you Soon" });
  } catch (error) {
    next(error);
  }
};

<<<<<<< HEAD:backend/src/controllers/auth.js
//update phoneNumber--------------------------------------------------------------------------------------------

//galat hai

// export const updatephoneNumber = async (req,res,next)=>{
//     try{
//         console.log("Received file:" ,req.file);
//         const phoneNumber = req.file ? `${rootPath}/${req.file.fileName}` :null;
//         const userID = req.user._id;

//         if(!/^\d{10}$/.test(newPhone)) {
//             const error = new Error("Invalid Phone Number format");
//             error.statusCode = 400;
//             return next(error);
//         }
//         const uploadResponse = await mongoose.uploader.upload( phoneNumber, {
//             folder: "SynVilla",
//         });
//         console.log("file uploaded to Db:", uploadResponse);

//         if(!Updateuser){
//             console.log("User not found");
//             return;
//         }
//         console.log("phone number updated successfully:", updatephoneNumber)

//         await User.findByIdUpdate(
//             userID,
//             {phoneNumber: uploadResponse.secure_url},
//             {new: true}
//         );
//         console.log("Uploaded to MongoDB");
//           res.status(200).json({ message: "phoneNumber Uploaded" });
//
//     }catch(error){
//         next(error);
//     }

// }

//sudhar kar
// export const updatePhoneNumber = async (req, res, next) => {
//     try {
//         console.log("Received file:", req.file);

//         // Extract phoneNumber from request file
//         const phoneNumber = req.file ? `${rootPath}/${req.file.filename}` : null;
//         const userID = req.user._id;

//         // Validate phone number format
//         if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
//             const error = new Error("Invalid Phone Number format");
//             error.statusCode = 400;
//             return next(error);
//         }

//         // Upload to Cloudinary (assuming Cloudinary is used)
//         const uploadResponse = await cloudinary.uploader.upload(phoneNumber, {
//             folder: "SynVilla",
//         });

//         console.log("File uploaded to Cloudinary:", uploadResponse.secure_url);

//         // Find user
//         const user = await User.findById(userID);
//         if (!user) {
//             console.log("User not found");
//             return res.status(404).json({ error: "User not found" });
//         }

//         // Update phone number in the database
//         await User.findByIdAndUpdate(
//             userID,
//             { phoneNumber: uploadResponse.secure_url },
//             { new: true }
//         );

//         console.log("Phone number updated successfully");
//         res.status(200).json({ message: "Phone number uploaded successfully" });

//     } catch (error) {
//         next(error);
//     }
=======

    
>>>>>>> bcd8ac0ce25243bfc74a67109f3f057188e5b54e:backend/src/controllers/auth.controller.js

//checking all the information are athentiicate or not---------------------------------------------------
export const checkAuth = (req, res, next) => {
  try {
    res.status(200).json({
      _id: req.user._id,
      email: req.user.email,
      fullName: req.user.fullName,
      //profilePic: req.user.profilePic,
    });
  } catch (error) {
    next(error);
  }
};
