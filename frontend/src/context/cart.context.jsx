import { createContext, useState, useEffect } from "react";

// Create Context
export const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  // ✅ Load Cart from localStorage on Page Load
  const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cartItems, setCartItems] = useState(loadCartFromStorage);

  // ✅ Save Cart to localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add Product to Cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Remove Product from Cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // ✅ Clear Entire Cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart"); // Clear localStorage
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
