import { NavLink } from "react-router-dom";
import image1 from "../assets/image1.png";
import { useSelector } from "react-redux";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className="flex justify-between items-center gap-x-5 border-b mb-7 relative">
      <div>
        <img className="w-[20%] object-cover " src={image1} alt="" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-5">
        <NavLink to="/">Home</NavLink>
        {user && user.isAdmin && (
          <>
            <NavLink to="/admin/create-product">Create Product</NavLink>
          </>
        )}
      </div>

      <div className="flex gap-5">
        {user ? (
          <div className="flex gap-5">
            <NavLink to="/cart" className="cursor-pointer">
              <ShoppingBag />
            </NavLink>
            <NavLink to="/user/user-profile" className="cursor-pointer">
              Setting
            </NavLink>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
