


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import adminPhoto from "../assets/admin.avif"; // Adjust path if needed

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [searchId, setSearchId] = useState("");
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState("");

//   // Function to fetch product details by ID
//   const handleSearch = async () => {
//     if (!searchId) {
//       setError("Please enter a product ID.");
//       setProduct(null);
//       return;
//     }

//     try {
//       const response = await axios.get(`http://localhost:5000/api/products/${searchId}`);
//       setProduct(response.data);
//       setError(""); // Clear any previous errors
//     } catch (err) {
//       setError("Product not found. Please check the ID.");
//       setProduct(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-8">
//       <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-5xl">
        
//         {/* Left Section - Admin Image */}
//         <div className="w-full md:w-1/2">
//           <img src={adminPhoto} alt="Admin" className="w-full h-full object-cover" />
//         </div>

//         {/* Right Section - Dashboard Controls */}
//         <div className="w-full md:w-1/2 flex flex-col items-center p-8">
//           <h1 className="text-3xl font-extrabold text-[#A0522D] mb-6 tracking-wide">
//             Admin Dashboard
//           </h1>

//           {/* Product Search Section */}
//           <div className="w-full max-w-sm mb-6">
//             <input
//               type="text"
//               placeholder="Enter Product ID"
//               value={searchId}
//               onChange={(e) => setSearchId(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
//             />
//             <button
//               onClick={handleSearch}
//               className="mt-2 w-full bg-[#A0522D] text-white rounded-lg px-4 py-2 font-semibold transition-all duration-300 hover:bg-[#8B4513]"
//             >
//               🔍 Search Product
//             </button>
//           </div>

//           {/* Display Product Details */}
//           {error && <p className="text-red-600">{error}</p>}
//           {product && (
//             <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-sm text-gray-700">
//               <h2 className="text-xl font-bold">{product.name}</h2>
//               <p><strong>ID:</strong> {product._id}</p>
//               <p><strong>Price:</strong> ₹{product.price}</p>
//               <p><strong>Category:</strong> {product.category}</p>
//               <p><strong>Description:</strong> {product.desc}</p>
//             </div>
//           )}

//           {/* Action Buttons */}
//           <div className="flex flex-col space-y-4 w-full max-w-sm mt-6">
//             <button
//               onClick={() => navigate("/add-product")}
//               className="bg-[#A0522D] text-white shadow-lg rounded-lg px-6 py-3 text-lg font-semibold transition-all duration-300 hover:bg-[#8B4513] hover:shadow-2xl"
//             >
//               ➕ Add Product
//             </button>

//             <button
//               onClick={() => navigate("/manage-products")}
//               className="bg-gray-800 text-white shadow-lg rounded-lg px-6 py-3 text-lg font-semibold transition-all duration-300 hover:bg-gray-900 hover:shadow-2xl"
//             >
//               🛒 Manage Products
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Chart from "react-apexcharts";
import adminPhoto from "../assets/admin.avif";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [orders, setOrders] = useState([]);
  const [salesData, setSalesData] = useState({ series: [], options: {} });

  // Fetch sales data (mockup example)
  useEffect(() => {
    setSalesData({
      series: [{ name: "Sales", data: [10, 40, 30, 50, 70, 80, 100] }],
      options: {
        chart: { type: "line" },
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
      },
    });
  }, []);

  // Fetch user details when searching
  const fetchUserDetails = async () => {
    try {
      const res = await axios.get(`/api/users/${userId}`);
      setUserData(res.data);
      fetchUserOrders(res.data.id);
    } catch (error) {
      console.error("User not found", error);
    }
  };

  // Fetch orders of the user
  const fetchUserOrders = async (id) => {
    try {
      const res = await axios.get(`/api/orders/${id}`);
      setOrders(res.data);
    } catch (error) {
      console.error("Orders not found", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-6xl">
        {/* Admin Image */}
        <div className="w-full md:w-1/3">
          <img src={adminPhoto} alt="Admin" className="w-full h-full object-cover" />
        </div>
        
        {/* Admin Controls */}
        <div className="w-full md:w-2/3 p-8 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-[#A0522D] mb-6 tracking-wide">Admin Dashboard</h1>
          
          <div className="flex flex-col space-y-4 w-full max-w-md">
            <button onClick={() => navigate("/add-product")} className="bg-[#A0522D] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#8B4513]">➕ Add Product</button>
            <button onClick={() => navigate("/manage-products")} className="bg-gray-800 text-white rounded-lg px-6 py-3 font-semibold hover:bg-gray-900">🛒 Manage Products</button>
          </div>
        </div>
      </div>

      {/* Search User */}
      <div className="mt-8 bg-white shadow-lg p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Search User by ID</h2>
        <div className="flex space-x-2">
          <input type="text" placeholder="Enter User ID" value={userId} onChange={(e) => setUserId(e.target.value)} className="border p-2 rounded w-full" />
          <button onClick={fetchUserDetails} className="bg-[#A0522D] text-white px-4 py-2 rounded">Search</button>
        </div>
        {userData && (
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Orders:</strong> <button onClick={() => fetchUserOrders(userData.id)} className="text-blue-500">View Orders</button></p>
          </div>
        )}
      </div>
      
      {/* Orders List */}
      {orders.length > 0 && (
        <div className="mt-8 bg-white shadow-lg p-6 rounded-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-4">User Orders</h2>
          <ul>
            {orders.map((order, index) => (
              <li key={index} className="border-b py-2">{order.productName} - ${order.price}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Sales Chart */}
      <div className="mt-8 bg-white shadow-lg p-6 rounded-lg w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Sales Analytics</h2>
        <Chart options={salesData.options} series={salesData.series} type="line" height={300} />
      </div>
    </div>
  );
};

export default AdminDashboard;
