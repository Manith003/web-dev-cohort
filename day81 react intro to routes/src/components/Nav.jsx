import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-15 justify-center items-center bg-black text-white px-30 py-4'>
        <Link to="/about">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/service">Service</Link>
        <Link to="/">About</Link>

    </div>
  )
}

export default Nav