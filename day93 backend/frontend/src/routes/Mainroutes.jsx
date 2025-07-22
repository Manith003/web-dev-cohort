import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Products from "../pages/products.jsx";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/PageNotFound.jsx";
import CreateProduct from "../pages/admin/Createproduct.jsx";
import ProductDetail from "../pages/admin/ProductDetail.jsx";
import Profileuser from "../pages/user/Profileuser.jsx";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/profileuser" element={<Profileuser />} />

      <Route path="/admin/create-product" element={<CreateProduct />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Mainroutes;
