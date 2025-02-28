import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { NavLink } from "react-router-dom";

const GardenArea = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("api/products/list", {
          params: { category: "GA" }, // ✅ Sending category as query param
          withCredentials: true, // Ensure cookies are sent if needed
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching LA products:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Garden Area</h2>

      {loading && (
        <p className="text-center text-gray-600">Loading Your Garden Area...</p>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.image || "/placeholder.png"}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-green-600 font-semibold">₹{product.price}</p>
            <NavLink to={`/products/${product._id}`}>
              <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardenArea;
