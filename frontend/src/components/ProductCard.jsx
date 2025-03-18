import React, { useMemo } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();

  const getCategoryName = (code) => {
    const categoryMap = {
      LA: "Living Area",
      GA: "Garden Area",
      BD: "Bedroom",
    };
    return categoryMap[code] || code;
  };

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // ✅ Handle adding item to cart & navigating to CartPage
  const handleAddToCart = (product) => {
    if (product) {
      const encodedProduct = encodeURIComponent(JSON.stringify([product])); // Convert product to URL-safe format
      navigate(`/cart/${encodedProduct}`);
    }
  };

  const shuffledProducts = useMemo(() => shuffleArray(products), [products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {shuffledProducts.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow-md">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="w-full h-48 object-contain rounded-lg mb-4"
          />
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-gray-600">{getCategoryName(product.category)}</p>
          <p className="text-green-600 font-semibold">₹{product.price}</p>

          <button 
            onClick={() => handleAddToCart(product)} 
            className="mt-2 w-full bg-[#87421f] text-white py-2 rounded-lg hover:bg-[#978d89]">
            Add to Cart
          </button>

          <NavLink to={`/products/${product._id}`}>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">
              View Details
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
