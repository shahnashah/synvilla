import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Signup from "./pages/signup";
import TermsAndConditions from "./pages/Terms";
// import Cart from "./pages/cart.jsx";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/Home";
import Header from "./components/header";
import Navbar from "./components/Navbar";

import AddProduct from "./pages/AddProduct";
import ManageProduct from "./pages/ManageProduct";
import AdminLogin from "./pages/AdminLogin";
import NewArrival from "./pages/NewArrival";
import LivingArea from "./pages/LivingArea";
import GardenArea from "./pages/GardenArea";
import Bedroom from "./pages/Bedroom";
import ProductDetail from "./pages/ProductDetail";
import AdminContacts from "./pages/AdminContact";
import LoginPage from "./pages/login";
import AdminDashboard from "./pages/adminDashboard";
import Contact from "../src/pages/ContactUs";
import Cart from "./pages/Cart";
import ForgotPasswordPage from "./pages/ForgatedPassword";
import OTPVerificationPage from "./pages/OtpVerification";


 const initialCartState={cartItems:[]};


function App() {

  // const [cartState,dispatch]=useReducer(CartReducer,initialCartState);
  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/manage-products" element={<ManageProduct />} />
        <Route path="/new-arrival" element={<NewArrival />} />
        <Route path="/living-area" element={<LivingArea />} />
        <Route path="/garden-area" element={<GardenArea />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/contacts" element={<AdminContacts/>}/>
        <Route path="/contactus" element={<Contact/>}/>
       <Route path="/cart/*" element={<Cart/>}/>
       <Route path="/forgot-password" element={<ForgotPasswordPage />} />
       <Route path="/verify-otp" element={<OTPVerificationPage />} />


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
