<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
=======
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


>>>>>>> d0b8bc3401262044eea108d61cca4a60177f880d

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-[#A0522D] mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <button 
          onClick={() => navigate("/add-product")}
          className="bg-white shadow-md p-4 rounded-lg text-center text-gray-700 font-semibold hover:bg-gray-200"
        >
          Add Product
        </button>
        
        <button 
          onClick={() => navigate("/manage-products")}
          className="bg-white shadow-md p-4 rounded-lg text-center text-gray-700 font-semibold hover:bg-gray-200"
        >
          Manage Products
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;