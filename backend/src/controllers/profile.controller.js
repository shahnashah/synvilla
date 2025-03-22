import User from "../models/user.model.js";
import multer from "multer";

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single("profilePic");

export const updateProfile = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: "File upload error" });
    }

    try {
      const { fullName } = req.body;
      const userId = req.user.id;
      const updateData = { fullName };

      if (req.file) {
        updateData.profilePic = `/uploads/${req.file.filename}`;
      }

      const user = await User.findByIdAndUpdate(userId, updateData, {
        new: true,
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json({ message: "Profile updated", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};
