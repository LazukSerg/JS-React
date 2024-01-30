import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import AllProducts from "./components/pages/AllProducts";
import ProductsCategory from "./components/pages/ProductsCategory";
import DiscountedProducts from "./components/pages/DiscountedProducts";
import ShoppingCart from "./components/pages/ShoppingCart";
import NotFound from "./components/pages/NotFound";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductInfo from "./components/pages/ProductInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/category/:id" element={<ProductsCategory />} />
        <Route path="/discount" element={<DiscountedProducts />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
