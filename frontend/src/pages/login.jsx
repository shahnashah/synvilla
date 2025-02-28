import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="min-h-[75%] flex items-center justify-center  p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-[#d2a679]"
      >
        <h2 className="text-2xl font-semibold text-center text-[#5c4033] mb-6">
          Welcome Back to <span className="text-[#d2a679]">SynVilla</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-[#5c4033] font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#c4a484] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679] bg-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[#5c4033] font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#c4a484] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679] bg-white"
            />
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#d2a679] text-white py-2 rounded-lg hover:bg-[#c4a484] transition"
          >
            Login
          </motion.button>
        </form>

        {/* Forgot Password & Sign Up */}
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-[#d2a679] hover:underline">
            Forgot Password?
          </Link>
        </div>

        <p className="text-center text-[#5c4033] mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#d2a679] hover:underline">
            Sign Up
          </Link>
        </p>

        {/* 🌟 Furniture Quote */}
        <p className="text-center text-[#5c4033] italic mt-6">
          "A house is made of walls and beams; a home is made of love and dreams – 
          <span className="text-[#d2a679]"> and a little bit of fine furniture!"</span> 🛋️✨
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
