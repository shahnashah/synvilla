import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ products }) => {
  const getCategoryName = (code) => {
    const categoryMap = {
      LA: "Living Area",
      GA: "Garden Area",
      BD: "Bedroom",
    };
    return categoryMap[code] || code; // Default to the original code if not found
  };

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledProducts = useMemo(() => shuffleArray(products), [products]); //To shuffle the Projects

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {shuffledProducts.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow-md">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-medium w-full overflow-hidden whitespace-nowrap text-ellipsis">
            {product.name}
          </h3>
          <p className="text-gray-600">{getCategoryName(product.category)}</p>
          <p className="text-green-600 font-semibold">₹{product.price}</p>
          <NavLink to={`/products/${product._id}`}>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              View Details
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
