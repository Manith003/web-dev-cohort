import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/UserActions";
import { asyncloadproducts } from "./store/actions/ProductActions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const { Products } = useSelector((state) => state.productReducer);

  console.log("Current User:", users);
  
  useEffect(() => {
   !users && dispatch(asynccurrentuser());
  }, [users]);

 useEffect(() => {
    Products.length == 0 && dispatch(asyncloadproducts());
  }, [Products]);

  return (
    <div className="px-[1%] h-full w-full bg-[#FAF9F6]">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
