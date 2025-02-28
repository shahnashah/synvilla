import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5002/api/products/new",
          {
            withCredentials: true,
          }
        );
        setProducts(response.data);
      } catch (err) {
        setError("Failed to load new arrivals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        🆕 New Arrivals
      </h2>

      {loading && (
        <p className="text-center text-gray-600">Loading new arrivals...</p>
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

export default NewArrival;
