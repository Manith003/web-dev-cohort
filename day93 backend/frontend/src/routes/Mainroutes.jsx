import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const UnAuthWrapper = lazy(() => import("./UnAuthWrapper.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Products = lazy(() => import("../pages/products.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const NotFound = lazy(() => import("../pages/PageNotFound.jsx"));
const CreateProduct = lazy(() => import("../pages/admin/Createproduct.jsx"));
const ProductDetail = lazy(() => import("../pages/admin/ProductDetail.jsx"));
const UserProfile = lazy(() => import("../pages/user/UserProfile.jsx"));
const AuthWrapper = lazy(() => import("./AuthWrapper.jsx"));
const Cart = lazy(() => import("../pages/Cart.jsx"));

const Mainroutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
       
            <Products />
         
        }
      />
      <Route
        path="/login"
        element={
          <UnAuthWrapper>
            <Login />
          </UnAuthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <UnAuthWrapper>
            <Register />
          </UnAuthWrapper>
        }
      />

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
