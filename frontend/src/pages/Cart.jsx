import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartData } = useParams(); // Get cart data from URL
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart data from URL or localStorage
  useEffect(() => {
    if (cartData) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(cartData));

        // ✅ Merge with existing cart & handle quantities
        setCartItems((prevCart) => {
          const updatedCart = [...prevCart];

          parsedData.forEach((newItem) => {
            const existingItemIndex = updatedCart.findIndex((item) => item._id === newItem._id);
            
            if (existingItemIndex !== -1) {
              updatedCart[existingItemIndex].quantity += newItem.quantity || 1;
            } else {
              updatedCart.push({ ...newItem, quantity: newItem.quantity || 1 });
            }
          });

          localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
          return updatedCart;
        });

      } catch (error) {
        console.error("Invalid cart data:", error);
        setCartItems([]);
      }
    } else {
      // Load cart from localStorage if no URL data
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, [cartData]);

  // ✅ Remove a single item from the cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Decrease item quantity (or remove if quantity is 1)
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item._id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between p-4 border-b">
              <img src={item.image || "/placeholder.png"} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-green-600 font-bold">₹{item.price} x {item.quantity}</p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => decreaseQuantity(item._id)} 
                  className="bg-yellow-500 text-white px-3 py-1 rounded">
                  -
                </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button 
            onClick={clearCart} 
            className="mt-4 bg-gray-800 text-white px-6 py-3 rounded-lg">
            Clear Cart
          </button>
        </>
      )}

      <button 
        onClick={() => navigate("/")} 
        className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg">
        Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;
