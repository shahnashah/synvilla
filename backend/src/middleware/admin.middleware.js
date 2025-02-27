const adminMiddleware = (req, res, next) => {
    console.log("user Details:",req.user);
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Access Denied. Admins Only!" });
    }
    next();
  };
  
  export default adminMiddleware;
  