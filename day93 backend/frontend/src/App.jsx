import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/UserActions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
  }, []);

  return (
    <div className="px-[7%] h-screen w-full overflow-hidden">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
