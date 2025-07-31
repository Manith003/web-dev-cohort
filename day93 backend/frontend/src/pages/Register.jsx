import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncregisteruser } from "../store/actions/UserActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const RegisterHandler = (userData) => { 
    userData.id = nanoid();
    userData.isAdmin = false;
    userData.cart = [];
    dispatch(asyncregisteruser(userData));
    reset();

    toast.success("Registration successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-[75%]">
      <form onSubmit={handleSubmit(RegisterHandler)} className="flex flex-col">
        <h1 className="text-3xl mb-5">Register</h1>
        <input
          {...register("username", { required: true })}
          className="mb-5 border rounded p-2 text-2xl"
          type="text"
          placeholder="username"
        />

        <input
          {...register("email", { required: true })}
          className="mb-5 border rounded p-2 text-2xl"
          type="email"
          placeholder="email"
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
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button className="bg-blue-400 p-3 active:scale-99 cursor-pointer text-xl rounded mb-2 text-white">
          Register
        </button>
        <p>
          Already have an account?{" "}
          <NavLink className="text-blue-700" to="/login">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
