import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/UserActions";
import { asyncloadproducts } from "./store/actions/ProductActions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
    dispatch(asyncloadproducts());
  }, []);

  return (
    <div className="px-[1%] h-full w-full bg-[#FAF9F6]">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
