import { NavLink } from 'react-router-dom';
import pizza from '../assets/pizza-pizza.svg';


const Nav = () => {
  return (
    <div className='py-3 w-full flex justify-between items-center gap-15'>
      <div className='w-[60px] bg-black'>
        <img src={pizza} alt=""/>
      </div>
        <div className='flex gap-20'>
          <NavLink className={(e)=>e.isActive ? "text-red-300" : ""} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300" : ""}  to="/recipes">Recipes</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300" : ""} to="/about">About</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300" : ""} to="/fav">Favourite</NavLink>
        </div>
        <NavLink className= "px-3 py-2 bg-orange-400 rounded text-[15px]   active:scale-95" to="/create">create your Recipes</NavLink>
    </div>
  )
}

export default Nav