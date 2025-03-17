import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart.context";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { id } = useParams(); // Get the ID from the URL
  console.log(id)
  const navigate = useNavigate();

  // If an ID is provided, filter only that product; otherwise, show all items
  const filteredItems = id ? cartItems.filter(item => item._id === id) : cartItems;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>

      {filteredItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {filteredItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between p-4 border-b">
              <img src={item.image || "/placeholder.png"} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-green-600 font-bold">₹{item.price} x {item.quantity}</p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded">
                Remove
              </button>
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
