import { NavLink, useNavigate } from "react-router-dom";
import image1 from "../assets/image1.png";
import { useDispatch, useSelector } from "react-redux";
import { asynclogoutuser } from "../store/actions/UserActions";
import { toast } from "react-toastify";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(asynclogoutuser());

    toast.success("Logout successful!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigate("/")
  };

  return (
    <nav className="flex justify-between items-center gap-x-5 border-b mb-7 relative">
      <div>
        <img className="w-[20%] object-cover " src={image1} alt="" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-5">
      
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        {user && user.isAdmin && <><NavLink to='/admin/create-product'>Create Product</NavLink></>}
        
      </div>

      <div className="flex gap-5">
        {user ? (
          <div className="flex gap-5 items-center">
          <NavLink to="/profileuser">{user.username}</NavLink>
          <button className="bg-black text-white px-5 py-2 rounded-xl cursor-pointer" onClick={logoutHandler}>logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
