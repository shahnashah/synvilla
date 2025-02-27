import { generateToken } from "../lib/utils.js";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import path from "path";

// Signup ----------------------------------------------------------------------------------------------------
export const signup = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  console.log(fullName, email, password);
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: "All Fields Required!!!" });
    }

    if (password.length < 10) {
      return res.status(400).json({ error: "Password must contain at least 10 characters" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ fullName, email, password: hashedPassword });

    console.log(newUser._id);
    res.status(201).json({ message: `Welcome to SynVilla, ${fullName}!` });
  } catch (error) {
    next(error);
  }
};

// Login ----------------------------------------------------------------------------------------------------
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "All fields required!!!" });
    }

    if (password.length < 10) {
      return res.status(400).json({ error: "Password must contain at least 10 characters" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Invalid Email or Password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    generateToken(user.id, res);
    res.status(200).json({
      message: `Welcome Back, ${user.fullName}!`,
      fullName: user.fullName,
      email: user.email,
      userProfile: user.userProfile,
    });
  } catch (error) {
    next(error);
  }
};

// Logout ----------------------------------------------------------------------------------------------------
export const logout = (req, res, next) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "See you soon!" });
  } catch (error) {
    next(error);
  }
};

// Check Authentication ------------------------------------------------------------------------------------
export const checkAuth = (req, res, next) => {
  try {
    res.status(200).json({
      _id: req.user._id,
      email: req.user.email,
      fullName: req.user.fullName,
    });
  } catch (error) {
    next(error);
  }
};
