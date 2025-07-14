import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="px-10 py-3 min-h-screen w-full text-white bg-[#000000] bg-[url(https://images.unsplash.com/photo-1633955304955-6bc2008aa7b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxiYWNrZ3JvdW5kJTIwaW1hZ2UlMjB0ZXh0dXJlZCUyMGZvciUyMGZvb2R8ZW58MHwwfDB8fHww)] bg-no-repeat" >
      <Nav />
     <Mainroutes />
    </div>
  )
}

export default App