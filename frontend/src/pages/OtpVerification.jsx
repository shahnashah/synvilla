import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../assets/otp.jpg"; // ✅ Background Image Import

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //  Simulated OTP verification
    const savedEmail = localStorage.getItem("resetEmail");
    if (!savedEmail) {
      setStatus("Session expired. Please request OTP again.");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setStatus("OTP Verified! Password reset successful.");
      setLoading(false);
      localStorage.removeItem("resetEmail");
      navigate("/login"); // ✅ Redirect to Login
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-end min-h-screen px-8"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/*  Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/*  OTP Verification Form (Right Side) */}
      <motion.div
        className="relative z-10 backdrop-blur-lg bg-white/20 p-8 rounded-xl shadow-lg w-full max-w-md border border-white/30 mr-10 mb-20"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold mb-6 text-white text-center drop-shadow-lg">
          OTP Verification
        </h1>

        <motion.form onSubmit={handleSubmit}>
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
            className="w-full p-3 mb-4 border border-white/40 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-white outline-none"
          />
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
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
            {loading ? "Verifying..." : "Verify & Reset Password"}
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
}
