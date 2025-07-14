import { NavLink } from "react-router-dom";
import image1 from '../assets/image1.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-x-5 border-b mb-7 relative">
      <div>
        <img className="w-[20%] object-cover " src={image1} alt="" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
      <div className="flex gap-5">
        {/* <NavLink to="/register">Register</NavLink> */}
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
