import React, { useEffect, useState } from "react";
//import { fetchProducts } from "../api/api";
import ProductCard from "./ProductCard";

import axios from "axios";
// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const getProducts = async () => {
//             const data = await fetchProducts();
//             setProducts(data);
//         };
//         getProducts();
//     }, []);

import axios from "axios";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="grid grid-cols-3 gap-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default ProductsList;
