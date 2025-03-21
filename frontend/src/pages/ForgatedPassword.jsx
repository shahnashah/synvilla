import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../assets/email.jpg"; // ✅ Background Image Import

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden"; // ✅ Prevent scrolling on the entire page
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Simulated OTP sending
    setTimeout(() => {
      localStorage.setItem("resetEmail", email);
      setStatus("OTP has been sent to your registered email.");
      setLoading(false);
      navigate("/verify-otp");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ✅ Fixes background image
      }}
    >
      {/* ✅ Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✅ Forgot Password Form */}
      <motion.div
        className="relative z-10 backdrop-blur-lg bg-white/20 p-8 rounded-xl shadow-lg w-full max-w-md border border-white/30 max-h-screen overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold mb-6 text-white text-center drop-shadow-lg">
          Forgot Password?
        </h1>

        <motion.form onSubmit={handleSubmit} className="overflow-hidden">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
            required
            className="w-full p-3 mb-4 border border-white/40 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-white outline-none"
          />

          {/* ✅ Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-white/30 p-3 rounded-lg hover:bg-white/50 transition-all duration-300 font-bold text-white shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </motion.button>

          {/* ✅ Status Message */}
          {status && (
            <motion.p
              className="mt-4 text-white text-center font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default ForgotPasswordPage;
