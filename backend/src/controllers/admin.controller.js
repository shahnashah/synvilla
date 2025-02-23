// export const adminDashboard = (req, res) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({ error: "Access Forbidden" });
//   }
//   res.json({ message: "Welcome Admin" });
// };

export const getAllProducts = async (req, res) => {
  try {
      // Fetch all products logic
      res.status(200).json({ message: "All products fetched successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
  }
};

export const getAllOrders = async (req, res) => {
  try {
      // Fetch all orders logic
      res.status(200).json({ message: "All orders fetched successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error fetching orders", error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
      // Fetch all users logic
      res.status(200).json({ message: "All users fetched successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
  }
};

export const adminDashboard = async (req, res) => {
  try {
      // Admin Dashboard logic
      res.status(200).json({ message: "Welcome to Admin Dashboard" });
  } catch (error) {
      res.status(500).json({ message: "Error loading admin dashboard", error });
  }
};

