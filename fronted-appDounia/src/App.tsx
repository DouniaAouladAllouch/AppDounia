// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import AddProductPage from "./pages/AddProductPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px" }}>
        {/* 👆 pour compenser le header fixé en haut */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
