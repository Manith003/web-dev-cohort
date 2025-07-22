import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { asyncreateproduct } from "../../store/actions/ProductActions";

const CreateProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateProductHandler = (productData) => {
    productData.id = nanoid();
    dispatch(asyncreateproduct(productData));

    toast.success("Product created", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/products");
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen  text-white ">
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="flex flex-col w-full max-w-2xl gap-4 bg-zinc-900 p-10 rounded-2xl shadow-lg border border-zinc-800"
      >
        <h1 className="text-4xl font-semibold mb-6 text-center text-white tracking-wide">Create Product</h1>

        <input
          {...register("image", { required: true })}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-lg placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter product image URL"
        />
        <input
          {...register("title", { required: true })}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-lg placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter product title"
        />
        <input
          {...register("price", { required: true })}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-lg placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="10.99"
        />
        <input
          {...register("description", { required: true })}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-lg placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter product description"
        />
        <input
          {...register("category", { required: true })}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-lg placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter product categories (comma separated)"
        />

        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 p-3 rounded-xl text-white text-xl font-medium transition-all duration-200">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
