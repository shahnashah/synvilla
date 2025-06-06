import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5002/api/auth/login",
        formData,
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );
      if (res.data.success) {
        const localData = {
          _id: res.data.userInfo._id,
          fullName: res.data.fullName,
          email: res.data.email,
          profilePic: res.data.profilePic,
        };

        localStorage.setItem("user", JSON.stringify(localData));

        // Dispatch custom event
        window.dispatchEvent(new Event("userStateChanged"));
        alert(res.data.message); // Show welcome message
        navigate("/"); // Redirect to home page
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };
  return (
    <div className="min-h-[75%] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-[#d2a679]"
      >
        <h2 className="text-2xl font-semibold text-center text-[#5c4033] mb-6">
          Welcome Back to <span className="text-[#caa279]">SynVilla</span>
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#d2a679] text-white py-2 rounded-lg hover:bg-[#c4a484] transition"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center text-[#5c4033] mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#d2a679] hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="text-center text-[#5c4033] mt-4">
          Forgot your password?{" "}
          <Link
            to="/forgot-password"
            className="text-[#d2a679] hover:underline"
          >
            Reset Password
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
