import FacialExpression from "./components/FacialExpression";
import Navbar from "./components/Navbar";
import MoodSongs from "./components/MoodSongs";
import { useState } from "react";

const App = () => {
  const [Songs, setSongs] = useState([]);
  return (
    <div className="bg-neutral-700 min-h-screen">
      <Navbar />
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </div>
  );
};

export default App;
