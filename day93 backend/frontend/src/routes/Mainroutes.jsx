import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Products from "../pages/products.jsx";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/PageNotFound.jsx";
import CreateProduct from "../pages/admin/Createproduct.jsx";
import ProductDetail from "../pages/admin/ProductDetail.jsx";
import UserProfile from "../pages/user/UserProfile.jsx";
import AuthWrapper from "./AuthWrapper.jsx";
import Cart from "../pages/Cart.jsx";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
            <ProductDetail />
          </AuthWrapper>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/user/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Mainroutes;
