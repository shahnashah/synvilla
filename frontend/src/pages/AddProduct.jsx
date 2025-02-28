import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("LA");
  const [isNewArrival, setIsNewArrival] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("isNewArrival", isNewArrival);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/admin/productAdd", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
      setProductName("");
      setPrice("");
      setDescription("");
      setCategory("LA");
      setIsNewArrival(false);
      setImage(null);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <div className="text-center pb-5">
          <button
            onClick={() => navigate("/admin-dashboard")}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Back to Admin Dashboard
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Add Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Product Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A0522D] focus:outline-none"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Price</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A0522D] focus:outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Description</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A0522D] focus:outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Category</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A0522D] focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="LA">Living Area</option>
              <option value="BD">Bedroom</option>
              <option value="GA">Garden</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={isNewArrival}
              onChange={(e) => setIsNewArrival(e.target.checked)}
              className="mr-2"
            />
            <label className="text-gray-600">New Arrival</label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Product Image</label>
            <input
              type="file"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A0522D] focus:outline-none"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#A0522D] text-white py-2 rounded-lg hover:bg-opacity-90"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
