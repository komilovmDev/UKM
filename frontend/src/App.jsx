import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/Products/Products";
import "./App.css";
import ProductDetails from "./pages/Products/components/ProductList/ProductList";
import Vakancy from "./pages/Vakancy/Vakancy";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Vakancy" element={<Vakancy />} />
      </Routes>
    </Router>
  );
}

export default App;
