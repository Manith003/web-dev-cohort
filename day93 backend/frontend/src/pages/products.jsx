import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asynupdateuser } from "../store/actions/UserActions";
import { toast } from "react-toastify";
import { Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteProducts from "../utils/useInfiniteProducts";

const products = () => {
  const dispatch = useDispatch();
  const { hasMore, fetchProducts, Products } = useInfiniteProducts();
  const users = useSelector((state) => state.userReducer.users);

  const addtocart = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex(
      (item) => item?.product?.id === product.id
    );
    if (x == -1) {
      copyuser.cart.push({ product, quantity: 1 });
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      };
    }
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
              {items.title.slice(0, 20)}...
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
  return (
    <InfiniteScroll
      className="flex flex-wrap justify-center items-center p-5 gap-5"
      dataLength={Products.length}
      next={fetchProducts}
      loader={<h4>Loading...</h4>}
      hasMore={hasMore}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="flex flex-wrap justify-center items-center p-1 gap-5">
        <Suspense
          fallback={
            <h1 className="text-center text-6xl text-red-600">
              Loading products...
            </h1>
          } // so this is not working because of suspense need the component to be lazy loaded. means renderedProduct should be a lazy loaded component
        >
          {renderedProduct}
        </Suspense>
      </div>
    </InfiniteScroll>
  );
};

export default products;
