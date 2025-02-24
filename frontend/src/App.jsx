import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import LoginPage from "./pages/Login";
import Signup from "./pages/signup";
import TermsAndConditions from "./pages/terms";
import Cart from "./pages/cart";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage"
import HomePage from "./pages/Home";
import AdminPanel from "./pages/adminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/terms" element={<TermsAndConditions/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetailPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/AdminPanel" element={<AdminPanel/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
