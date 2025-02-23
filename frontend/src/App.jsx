import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import LoginPage from "./pages/Login";
import Signup from "./pages/signup";
import TermsAndConditions from "./pages/terms";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/terms" element={<TermsAndConditions/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
