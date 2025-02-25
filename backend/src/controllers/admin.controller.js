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



export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
};

