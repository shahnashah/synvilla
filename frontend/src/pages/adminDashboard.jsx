
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUsers,
  FiBox,
  FiPlusCircle,
  FiMail,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";
import Chart from "react-apexcharts";
import ManageProducts from "./ManageProduct";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    fetchUsers();
    fetchContacts();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/admin/users");
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/admin/contacts");
      setContacts(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/admin/products", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching products:", error.response?.data || error.message);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const salesData = {
    options: {
      chart: { id: "sales-chart" },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    },
    series: [{ name: "Sales", data: [30, 40, 45, 50, 49, 60] }],
  };


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside className="w-64 bg-white shadow-lg p-5 flex flex-col items-center rounded-r-2xl">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <div className="space-y-4 w-full">
          {[
            { name: "Dashboard", icon: <FiBox />, tab: "dashboard" },
            { name: "Add Product", icon: <FiPlusCircle />, tab: "add-product" },
            { name: "Manage Products", icon: <FiBox />, tab: "products" },
            { name: "View Users", icon: <FiUsers />, tab: "users" },
            { name: "Contact Messages", icon: <FiMail />, tab: "contacts" },
          ].map(({ name, icon, tab }) => (
            <button
              key={tab}
              className={`w-full flex items-center space-x-3 py-3 px-5 rounded-lg text-lg ${
                activeTab === tab ? "bg-[#A0522D] text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {icon} <span>{name}</span>
            </button>
          ))}
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.div key="dashboard">
              <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
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
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Chart options={salesData.options} series={salesData.series} type="line" height={300} />
              </div>
            </motion.div>
          )}

          {activeTab === "users" && (
            <motion.div key="users">
              <h1 className="text-3xl font-bold mb-4">User List</h1>
              <div className="mb-4 flex items-center">
                <input
                  type="text"
                  placeholder="Search by name or email"
                  className="p-2 border rounded-lg w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FiSearch className="ml-2 text-gray-500" size={24} />
              </div>
              <table className="w-full bg-white shadow-lg rounded-lg p-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Joined On</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user._id} className="border-b">
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

 {activeTab === "contacts" && (
             <motion.div key="contacts">
               <h1 className="text-3xl font-bold mb-4">Contact Messages</h1>
               <table className="w-full bg-white shadow-lg rounded-lg p-4">
                 <thead>
                   <tr className="bg-gray-200">
                    
                     <th className="p-3 text-left">Email</th>
                     <th className="p-3 text-left">Message</th>
                   </tr>
                 </thead>
                 <tbody>
                   {contacts.map((contact) => (
                     <tr key={contact._id} className="border-b">
                      
                       <td className="p-3">{contact.email}</td>
                       <td className="p-3">{contact.message}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </motion.div>
           )}
          {activeTab === "add-product" && navigate("/add-product")}

          {activeTab === "products" && <ManageProducts />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;
