import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  asyncdeleteuser,
  asynclogoutuser,
  asynupdateuser,
} from "../../store/actions/UserActions";

const UserProfile = () => {
  const {
    userReducer: { users },
  } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });

  const UpdateUserHandler = (userData) => {
    dispatch(asynupdateuser(users.id, userData));
    toast.success("User updated successfully", { autoClose: 3000 });
  };

  const logoutHandler = () => {
    dispatch(asynclogoutuser());
    toast.success("Logout successful!", { autoClose: 1500 });
    navigate("/login");
  };

  const deleteHandler = () => {
    dispatch(asyncdeleteuser(users.id));
    toast.success("Account deleted successfully!", { autoClose: 1500 });
    navigate("/login");
  };

  return (
    <div className="h-full text-white p-6 flex justify-center items-start">
      {users ? (
        <div className="w-full max-w-3xl space-y-10">
          <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Welcome, {users.username}
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                <span className="text-gray-400 font-medium">Username:</span>{" "}
                {users.username}
              </p>
              <p>
                <span className="text-gray-400 font-medium">Email:</span>{" "}
                {users.email}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(UpdateUserHandler)}
            className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl shadow-xl space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-2 text-center tracking-wider text-white">
              Update Your Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-gray-400">Username</label>
                <input
                  {...register("username")}
                  type="text"
                  placeholder="New username"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="New email"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400">Password</label>
                <input
                  {...register("password")}
                  type="text"
                  placeholder="New password"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <button
                type="submit"
                className="bg-blue-700 cursor-pointer text-white py-3 rounded-xl font-medium transition duration-200"
              >
                Update
              </button>

              <button
                type="button"
                onClick={logoutHandler}
                className="bg-yellow-700 cursor-pointer text-white py-3 rounded-xl font-medium transition duration-200"
              >
                Logout
              </button>

              <button
                type="button"
                onClick={deleteHandler}
                className="bg-red-500 cursor-pointer text-white py-3 rounded-xl font-medium transition duration-200"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="text-white text-xl">Loading...</div>
      )}
    </div>
  );
};

export default UserProfile;
