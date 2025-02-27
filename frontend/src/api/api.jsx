export const fetchProductById = async (productId) => {
    try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};


