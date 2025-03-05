import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signup Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-[#d2a679]"
      >
        <h2 className="text-2xl font-semibold text-center text-[#5c4033] mb-6">
          Join <span className="text-[#d2a679]">SynVilla</span>
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

          {/* Confirm Password */}
          <div>
            <label className="block text-[#5c4033] font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#c4a484] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679] bg-white"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 accent-[#d2a679]"
            />
            <label className="ml-2 text-[#5c4033]">
              I agree to the{" "}
              <Link to="/terms" className="text-[#d2a679] hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Signup Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#d2a679] text-white py-2 rounded-lg hover:bg-[#c4a484] transition"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Already have an account */}
        <p className="text-center text-[#5c4033] mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#d2a679] hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
