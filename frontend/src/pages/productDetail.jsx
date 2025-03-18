// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "../api/axios";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`api/products/`,  {
//           params: { id }, // ✅ Sending category as query param
//           withCredentials: true, // Ensure cookies are sent if needed
//         });
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError("Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) return <p className="text-center text-gray-600">Loading product details...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div>
//           <img
//             src={product.image || "/placeholder.png"}
//             alt={product.name}
//             className="w-full h-96 object-cover rounded-lg"
//           />
//         </div>

//         {/* Product Info */}
//         <div>
//           <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
//           <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
//           <p className="text-2xl font-bold text-green-600 mb-4">₹{product.price}</p>
//           <p className="text-gray-700 mb-6">{product.description}</p>
//           <button className="w-full bg-yellow-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


// import { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { CartContext } from "../context/cart.context.jsx"
// import axios from "../api/axios";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`api/products/`, {
//           params: { id }, 
//           withCredentials: true, 
//         });
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError("Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) return <p className="text-center text-gray-600">Loading product details...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <img
//             src={product.image || "/placeholder.png"}
//             alt={product.name}
//             className="w-full h-96 object-cover rounded-lg"
//           />
//         </div>

//         <div>
//           <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
//           <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
//           <p className="text-2xl font-bold text-green-600 mb-4">₹{product.price}</p>
//           <p className="text-gray-700 mb-6">{product.description}</p>
          
//           <button 
//             onClick={() => {
//               addToCart(product);
//               navigate("/cart");
//             }} 
//             className="w-full bg-yellow-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "../api/axios";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`api/products/`, {
          params: { id },
          withCredentials: true,
        });
        setProduct(response.data);
        console.log(product)
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
     console.log(product)
      navigate(`/cart/${product}`);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading product details...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">₹{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <button 
            onClick={handleAddToCart} 
            className="w-full bg-yellow-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
