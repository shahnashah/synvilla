// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import path from "path";
// import { fileURLToPath } from "url";
// import connectDB from "./src/lib/db.js";

// // Import Routes
// import authRoutes from "./src/routes/auth.routes.js";
// import productRoutes from "./src/routes/product.routes.js";
// import adminRoutes from "./src/routes/admin.routes.js";

// const app = express();

// // Middleware
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Resolve __dirname in ES module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Static file serving (for image uploads)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Routes
// app.use("/api/admin", adminRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);

// // Health check route
// app.get("/", (req, res) => {
//   res.json({ message: "🚀 Server is running properly!" });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res
//     .status(err.statusCode || 500)
//     .json({ message: err.message || "Internal Server Error" });
// });

// const PORT = process.env.PORT || 5000; // 🔹 Default to 5000 for consistency
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
//   connectDB();
// });



import express from "express";
//import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../backend/src/lib/db.js";
import productRoutes from "../backend/src/routes/product.routes.js";
import orderRoutes from '../backend/src/routes/order.routes.js';
import cartRoutes from '../backend/src/routes/cart.routes.js';

//dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

