import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="border p-4 rounded shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                onClick={() => navigate(`/product/${product._id}`)}
            >
                View Details
            </button>
        </div>
    );
};

export default ProductCard;
