import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  asyncdeleteproduct,
  asynupdateproduct,
} from "../../store/actions/ProductActions";

const ProductDetail = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.userReducer.users);
  const Products = useSelector((state) => state.productReducer.Products);

  const product = Products.find((item) => item.id == id);

  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
    },
  });
  const dispatch = useDispatch();

  const UpdateProductHandler = (productData) => {
    console.log(productData);

    dispatch(asynupdateproduct(id, productData));

    toast.success("Product updated successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  };

  const renderedProducrDetail = product ? (
    <div className="flex items-center justify-center mt-5">
      <div className=" w-full bg-[#111111] rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-800">
        <div className="flex items-center justify-center bg-neutral-900 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain max-h-[500px] rounded-xl"
          />
        </div>

        <div className="p-8 flex flex-col justify-between text-white">
          <div>
            <span className="text-sm text-gray-400 uppercase">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mt-2">{product.title}</h1>
            <p className="text-gray-300 mt-4">{product.description}</p>
            <p className="text-2xl font-semibold text-emerald-400 mt-6">
              ₹{product.price.toLocaleString()}
            </p>
          </div>

          <div className="mt-8">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-lg py-3 rounded-lg transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );

  const deleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    toast.success("Product deleted successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  };

  const updateproduct = (
    <div>
      {users && users?.isAdmin && (
        <div className=" flex justify-center items-center w-full min-h-screen text-white filter flex-col ">
          {users && users?.isAdmin && (
            <form
              onSubmit={handleSubmit(UpdateProductHandler)}
              className="flex flex-col w-full max-w-2xl gap-4 bg-zinc-900 p-10 rounded-2xl shadow-lg border border-zinc-800"
            >
              <h1 className="text-4xl font-semibold mb-6 text-center text-white tracking-wide">
                Update Product Details
              </h1>

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
                Update Product
              </button>
              <button
                className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 p-3 rounded-xl text-white text-xl font-medium transition-all duration-200"
                onClick={deleteHandler}
              >
                Delete Product
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative h-full w-full">
      <div className="flex justify-between items-center">
        <button
          onClick={backHandler}
          className="relative cursor-pointer bg-neutral-900 text-white px-10 py-4 rounded text-xl"
        >
          back
        </button>
      </div>
      {renderedProducrDetail}
      {updateproduct}
    </div>
  );
};

export default ProductDetail;
