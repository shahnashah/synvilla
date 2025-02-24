import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary"; // सही import

dotenv.config(); // .env variables load करने के लिए

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // .env में यह value होनी चाहिए
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
