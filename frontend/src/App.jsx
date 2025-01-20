import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/Products/Products";
import "./App.css";
import ProductDetails from "./pages/Products/components/ProductList/ProductList";
import Vakancy from "./pages/Vakancy/Vakancy";
import Tender from "./pages/Tender/Tender";
import About from "./pages/About/About"; 
import Footer from "./components/Footer/Footer"; 
import Ustav from "./pages/Ustav/Ustav";
import Struktura from "./pages/Struktura/Struktura";
import BiznesP from "./pages/BiznesPlan/BiznesP";
import Fakti from "./pages/Fakt/Fakti";
import Aksiya from "./pages/Aksiya/Aksiya";
import YilIzohi from "./pages/YilIzohi/YilIzohi";
import AuditIzoh from "./pages/AuditIzoh/AuditIzoh";
import ChorakIzoh from "./pages/ChorakIzoh/ChorakIzoh"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Vakancy" element={<Vakancy />} />
        <Route path="/Tenders" element={<Tender />} />
        <Route path="/About" element={<About />} />
        <Route path="/Ustav" element={<Ustav />} />
        <Route path="/Struktura" element={<Struktura />} />
        <Route path="/BiznesPlan" element={<BiznesP />} />
        <Route path="/Fakt" element={<Fakti />} />
        <Route path="/Aksiya" element={<Aksiya />} />
        <Route path="/YilIzohi" element={<YilIzohi />} />
        <Route path="/Audit" element={<AuditIzoh />} />
        <Route path="/KvartalIzohi" element={<ChorakIzoh />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
