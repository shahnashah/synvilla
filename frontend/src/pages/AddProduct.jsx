import React, { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle product submission logic here (e.g., API call to store product in database)
    console.log({ productName, price, description, image });
    alert("Product Added Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Add Product</h2>
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