import Nav from "./components/Nav.jsx";
import Mainroutes from "./routes/Mainroutes.jsx";

const App = () => {
  return <div className="h-screen w-full bg-gray-600 text-white">
    <Nav />
    <Mainroutes />
  </div>;
};

export default App;
