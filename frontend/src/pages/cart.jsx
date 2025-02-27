import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/cart")
      .then(response => setCartItems(response.data))
      .catch(error => console.error("Error fetching cart:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item._id} className="border p-2 mb-2">
            <p>{item.name} - ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
