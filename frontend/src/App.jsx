// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useReducer } from "react";
// import CartReducer from "./Reducer/Cart.Reducer";
// import Signup from "./pages/Signup";
// import TermsAndConditions from "./pages/Terms";
// // import Cart from "./pages/cart.jsx";

// import NotFoundPage from "./pages/NotFoundPage";
// import HomePage from "./pages/Home";
// import Header from "./components/header";
// import Navbar from "./components/Navbar";

// import AddProduct from "./pages/AddProduct";
// import ManageProduct from "./pages/ManageProduct";
// import AdminLogin from "./pages/AdminLogin";
// import NewArrival from "./pages/NewArrival";
// import LivingArea from "./pages/LivingArea";
// import GardenArea from "./pages/GardenArea";
// import Bedroom from "./pages/Bedroom";
// import ProductDetail from "./pages/ProductDetail";
// import AdminContacts from "./pages/AdminContact";
// import LoginPage from "./pages/login";
// import AdminDashboard from "./pages/adminDashboard";
// import Contact from "../src/pages/ContactUs";
// import Cart from "./pages/Cart";


//  const initialCartState={cartItems:[]};


// function App() {

//   const [cartState,dispatch]=useReducer(CartReducer,initialCartState);
//   return (
//     <BrowserRouter>
//       <header className="sticky top-0 z-50 bg-white shadow-md">
//         <Header />
//         <Navbar />
//       </header>

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/terms" element={<TermsAndConditions />} />
      
//         <Route path="*" element={<NotFoundPage />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/add-product" element={<AddProduct />} />
//         <Route path="/manage-products" element={<ManageProduct />} />
//         <Route path="/new-arrival" element={<NewArrival />} />
//         <Route path="/living-area" element={<LivingArea />} />
//         <Route path="/garden-area" element={<GardenArea />} />
//         <Route path="/bedroom" element={<Bedroom />} />
//         <Route path="/products/:id" element={<ProductDetail />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
//         <Route path="/admin/contacts" element={<AdminContacts/>}/>
//         <Route path="/contactus" element={<Contact/>}/>
//        <Route path="/cart" element={<Cart/>}/>


        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import CartReducer from "./Reducer/Cart.Reducer";

// Importing pages
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";
import TermsAndConditions from "./pages/Terms";
import NotFoundPage from "./pages/NotFoundPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/adminDashboard";
import AddProduct from "./pages/AddProduct";
import ManageProduct from "./pages/ManageProduct";
import NewArrival from "./pages/NewArrival";
import LivingArea from "./pages/LivingArea";
import GardenArea from "./pages/GardenArea";
import Bedroom from "./pages/Bedroom";
import ProductDetail from "./pages/productDetail";
import AdminContacts from "./pages/AdminContact";
import LoginPage from "./pages/login";
import Contact from "./pages/ContactUs";
import Cart from "./pages/Cart";

// Importing components
import Header from "./components/header";
import Navbar from "./components/Navbar";

// Initial Cart State
const initialCartState = { cartItems: [] };

function App() {
  const [cartState, dispatch] = useReducer(CartReducer, initialCartState);

  // ✅ Function to add a product to cart
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  // ✅ Function to remove a product from the cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // ✅ Function to clear the entire cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <BrowserRouter>
      {/* Header and Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
        <Navbar />
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />

        {/* Product Management */}
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/manage-products" element={<ManageProduct />} />

        {/* Product Categories */}
        <Route path="/new-arrival" element={<NewArrival />} />
        <Route path="/living-area" element={<LivingArea />} />
        <Route path="/garden-area" element={<GardenArea />} />
        <Route path="/bedroom" element={<Bedroom />} />

        {/* Product Details */}
        <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />

        {/* Cart Page with Props */}
        {/* <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cartState.cartItems} 
              removeFromCart={removeFromCart} 
              clearCart={clearCart} 
            />
          } 
        /> */}

<Route path="/cart/*" element={<Cart/>}/>
        {/* Contact Page */}
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
