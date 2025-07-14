import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex gap-15 justify-center items-center bg-black text-white px-30 py-4">
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/">
        Home
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/product">Product</NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/service">Service</NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/about">About</NavLink>
    </div>
  );
};

export default Nav;
