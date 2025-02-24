import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/api.jsx";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            const data = await fetchProductById(id);
            setProduct(data);
        };
        getProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <img src={product.image} alt={product.name} className="w-full h-80 object-cover mb-4" />
            <p className="text-gray-700 text-lg">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
        </div>
    );
};

export default ProductDetail;
