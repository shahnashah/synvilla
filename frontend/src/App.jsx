import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/login";
import Signup from "./pages/signup";
import TermsAndConditions from "./pages/terms";
import Cart from "./pages/cart";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/Home";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/adminDashboard";
import AddProduct from "./pages/AddProduct";
import ManageProduct from "./pages/ManageProduct"; // ✅ Corrected import
import AdminLogin from "./pages/AdminLogin"; // Adjust path if necessary



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/manage-products" element={<ManageProduct />} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
