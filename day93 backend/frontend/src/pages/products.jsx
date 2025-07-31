import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asynupdateuser } from "../store/actions/UserActions";
import { toast } from "react-toastify";

const products = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const Products = useSelector((state) => state.productReducer.Products);

  const addtocart = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex((item) => item?.product?.id === product.id);
    if (x == -1) {
      copyuser.cart.push({ product, quantity: 1 });
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      };
    }

    console.log(copyuser);
    dispatch(asynupdateuser(users.id, copyuser));
  };

  const renderedProduct = Products.map((items) => {
    return (
      <div key={items.id}>
        <div className="group w-80 cursor-pointer rounded-2xl bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
          <div className="h-52 w-full overflow-hidden rounded-t-2xl">
            <img
              src={items.image}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            {/* Category Badge */}
            <span className="mb-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
              {items.category}
            </span>

            {/* Title */}
            <h2 className="mb-1 mt-2 text-2xl font-bold text-gray-900">
              {items.title}
            </h2>

            {/* Description */}
            <p className="mb-4 text-sm text-gray-600">
              {items.description.slice(0, 95)}....
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 px-5 py-4">
            <p className="text-xl font-bold text-gray-900">₹{items.price}</p>

            <button
              className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-600"
              onClick={() => addtocart(items)}
            >
              Add to Cart
            </button>
          </div>
          <div className="flex justify-center items-center w-full p-3">
            <Link className="text-blue-400" to={`/product/${items.id}`}>
              more info
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return Products.length > 0 ? (
    <div className="flex flex-wrap justify-center items-center gap-5 p-5">
      {renderedProduct}
    </div>
  ) : (
    <div>No products available</div>
  );
};

export default products;
