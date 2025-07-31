import { useDispatch, useSelector } from "react-redux";
import { asynupdateuser } from "../store/actions/UserActions";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const IncreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    copyuser.cart[index] = {
      product,
      quantity: copyuser.cart[index].quantity + 1,
    };

    dispatch(asynupdateuser(users.id, copyuser));
  };
  const DecreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    if (copyuser.cart[index].quantity > 1) {
      copyuser.cart[index] = {
        product,
        quantity: copyuser.cart[index].quantity - 1,
      };
    } else {
      copyuser.cart.splice(index, 1);
    }

    dispatch(asynupdateuser(users.id, copyuser));
  };

  const cartItems = users?.cart?.map((item, index) => (
    <div
      key={item.product.id}
      className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 lg:h-50"
    >
      <img
        src={item.product.image}
        alt={item.product.title}
        className="w-full md:w-60 object-cover"
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            {item.product.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 capitalize">
            Category: {item.product.category}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap justify-between items-center gap-4">
          <span className="text-xl font-bold text-indigo-600">
            ₹{item.product.price}
          </span>

          <div className="flex items-center space-x-3">
            <button
              className="px-3 py-1 bg-black text-white rounded-md hover:bg-red-600 disabled:bg-red-300 active:scale-95"
              onClick={() => DecreaseQuantityHandler(index, item.product)}
            >
              -
            </button>
            <span className="text-gray-600 text-lg font-semibold">
              {item.quantity}
            </span>
            <button
              className="px-3 py-1 bg-black text-white rounded-md hover:bg-green-600 active:scale-95"
              onClick={() => IncreaseQuantityHandler(index, item.product)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Your Cart
        </h2>

        {cartItems == 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">{cartItems}</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
