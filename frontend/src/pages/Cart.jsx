import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="border p-4 mb-4 flex justify-between items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Clear Cart
          </button>

          <Link to="/checkout">
            <button className="mt-4 ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
