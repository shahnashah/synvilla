import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "product_images", // Folder in Cloudinary
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

const upload = multer({ storage: storage });

export default upload;