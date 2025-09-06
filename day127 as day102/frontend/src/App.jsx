import FacialExpression from "./components/FacialExpression"
import Navbar from "./components/Navbar"
import MoodSongs from "./components/MoodSongs"

const App = () => {
  return (
    <div className="">
      <Navbar />
      <FacialExpression />
      <MoodSongs />
    </div>
  )
}

export default App