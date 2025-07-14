import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Products from '../pages/products.jsx'
import Register from '../pages/Register.jsx'


const Mainroutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/products' element={<Products />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
   </Routes>
  )
}

export default Mainroutes