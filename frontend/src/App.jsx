import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import TermsAndConditions from "./pages/Terms";
import Cart from "./pages/Cart";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/Home";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import ManageProduct from "./pages/ManageProduct";
import AdminLogin from "./pages/AdminLogin";
import NewArrival from "./pages/NewArrival";
import LivingArea from "./pages/LivingArea";
import GardenArea from "./pages/GardenArea";
import Bedroom from "./pages/Bedroom";
import ProductDetail from "./pages/ProductDetail";
 


function App() {
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
        <Route path="/cart" element={<Cart />} />
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
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
