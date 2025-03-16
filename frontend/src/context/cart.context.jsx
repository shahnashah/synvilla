import { createContext, useReducer } from "react";
import CartReducer from "../Reducer/Cart.Reducer";

// Initial state
const initialState = {
  cartItems: [],
};

// Create context
export const CartContext = createContext(initialState);

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // ✅ Add product to cart
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  // ✅ Remove product from cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider value={{ 
      cartItems: state.cartItems, 
      addToCart, 
      removeFromCart, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};
