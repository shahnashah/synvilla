// import React, { useState, useEffect } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import axios from "axios";

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/cart").then((res) => setCart(res.data));
//   }, []);

//   const addToCart = (item) => {
//     axios.post("http://localhost:5000/cart", item).then(() => {
//       setCart([...cart, item]);
//     });
//   };

//   const removeFromCart = (id) => {
//     axios.delete(`http://localhost:5000/cart/${id}`).then(() => {
//       setCart(cart.filter((item) => item._id !== id));
//     });
//   };

//   return (
//     <div>
//       <button className="text-gray-600 hover:text-[#A0522D]">
//         <FaShoppingCart size={24} /> ({cart.length})
//       </button>
//       <div className="p-4">
//         {cart.map((item) => (
//           <div key={item._id} className="flex justify-between border-b p-2">
//             <span>{item.name} - ${item.price} x {item.quantity}</span>
//             <button onClick={() => removeFromCart(item._id)}>Remove</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cart")
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
