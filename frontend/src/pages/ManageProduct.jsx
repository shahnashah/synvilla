import React, { useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    // { id: 1, name: "Modern Sofa", price: "$500" },
    // { id: 2, name: "Luxury Lamp", price: "$120" },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Manage Products</h2>
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-4">
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{product.name} - {product.price}</span>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageProducts;
