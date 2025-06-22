import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Service from "./components/Service";
import About from "./components/About";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-400">
      <Nav />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
