




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Chart from "react-apexcharts";
import { motion, AnimatePresence } from "framer-motion";
import { FiUsers, FiShoppingCart, FiBox, FiMail, FiPlusCircle } from "react-icons/fi";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [salesData, setSalesData] = useState({ series: [], options: {} });

  useEffect(() => {
    fetchUsers();
    fetchProducts();
    fetchContacts();
    fetchSalesData();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/admin/users");
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/admin/products");
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/admin/contacts");
      setContacts(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]);
    }
  };

  const fetchSalesData = () => {
    setSalesData({
      series: [{ name: "Sales", data: [10, 40, 30, 50, 70, 80, 100] }],
      options: {
        chart: { type: "line" },
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
      },
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* ✅ Sidebar */}
      <motion.aside
        className="w-64 bg-white shadow-lg p-5 flex flex-col items-center rounded-r-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        
        <div className="space-y-4 w-full">
          {[
            { name: "Dashboard", icon: <FiBox />, tab: "dashboard" },
            { name: "Add Product", icon: <FiPlusCircle />, tab: "add-product" },
            { name: "Manage Products", icon: <FiShoppingCart />, tab: "products" },
            { name: "View Users", icon: <FiUsers />, tab: "users" },
            { name: "Contact Messages", icon: <FiMail />, tab: "contacts" },
          ].map(({ name, icon, tab }) => (
            <motion.button
              key={tab}
              className={`w-full flex items-center space-x-3 py-3 px-5 rounded-lg text-lg transition-all duration-300 ${
                activeTab === tab ? "bg-[#A0522D] text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon} <span>{name}</span>
            </motion.button>
          ))}
        </div>
      </motion.aside>

      {/* ✅ Main Content */}
      <div className="flex-1 p-8">
        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>

              {/* ✅ Stats Cards */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                  <FiUsers size={40} className="text-blue-500" />
                  <h2 className="text-2xl font-bold mt-2">{users.length}</h2>
                  <p className="text-gray-500">Total Users</p>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                  <FiShoppingCart size={40} className="text-green-500" />
                  <h2 className="text-2xl font-bold mt-2">{products.length}</h2>
                  <p className="text-gray-500">Total Products</p>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                  <FiMail size={40} className="text-red-500" />
                  <h2 className="text-2xl font-bold mt-2">{contacts.length}</h2>
                  <p className="text-gray-500">Total Contact Messages</p>
                </div>
              </div>

              {/* ✅ Sales Chart */}
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Chart options={salesData.options} series={salesData.series} type="line" height={300} />
              </div>
            </motion.div>
          )}

          {activeTab === "add-product" && (
            <motion.div key="add-product" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
              <h1 className="text-3xl font-bold mb-4">Add a New Product</h1>
              <button onClick={() => navigate("/add-product")} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800 transition-all">
                ➕ Go to Add Product Page
              </button>
            </motion.div>
          )}

          {activeTab === "products" && (
            <motion.div key="products" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
              <h1 className="text-3xl font-bold mb-4">Manage Products</h1>
              <button onClick={() => navigate("/manage-products")} className="px-6 py-3 bg-[#A0522D] text-white rounded-lg hover:bg-[#8B4513] transition-all">
                Go to Product Management
              </button>
            </motion.div>
          )}

          {activeTab === "contacts" && (
            <motion.div key="contacts" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
              <h1 className="text-3xl font-bold mb-4">Contact Messages</h1>
              <button onClick={() => navigate("/admin/contacts")} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all">
                View Contact Messages
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;


