import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/UserActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (userData) => {
    console.log("userData:", userData);

    dispatch(asyncloginuser(userData));

    toast.success("Login successful!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigate("/");
    setTimeout(()=>{
      window.location.reload();
    },1500);
  };

  return (
    <div className="flex justify-center items-center h-[70%]">
      <form onSubmit={handleSubmit(loginHandler)} className="flex flex-col">
        <h1 className="text-3xl mb-5">Login</h1>
        <input
          {...register("username", { required: true })}
          className="mb-5 border rounded p-2 text-2xl"
          type="text"
          placeholder="username"
        />

        <input
          {...register("password", {
            required: true,
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message:
                "Password must include letters, numbers, and a special character",
            },
          })}
          className="mb-5 border rounded p-2 text-2xl"
          type="password"
          placeholder="password"
        />

        <button className="bg-blue-400 p-3 active:scale-99 cursor-pointer text-xl rounded mb-2 text-white">
          Login
        </button>
        <p>
          Don't have an account?
          <NavLink className="text-blue-700" to="/register">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
