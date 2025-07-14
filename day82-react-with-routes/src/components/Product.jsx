
import { Outlet, useNavigate } from 'react-router-dom'

const Product = () => {

const navigate = useNavigate()

const navigateHandler = (name) =>{
navigate(`/product/details/${name}`);
}

  return (
    <div className='text-3xl font-thin m-5'>
      <div className="text-2xl font-thin mb-5 ">
        <h1>Product 1</h1>
        <button onClick={()=>navigateHandler('Product 1')} className='text-xl bg-amber-50 text-black rounded py-2 px-5 cursor-pointer mt-3'>see details</button>    
      </div>
       <div className="text-2xl font-thin mb-5">
        <h1>Product 2</h1>
        <button onClick={()=>navigateHandler('Product 2')}  className='text-xl bg-amber-50 text-black rounded py-2 px-5 cursor-pointer mt-3'>see details</button>
      </div>
       <div onClick={()=>navigateHandler('Product 3')} className="text-2xl font-thin ">
        <h1>Product 3</h1>
        <button className='text-xl bg-amber-50 text-black rounded py-2 px-5 cursor-pointer mt-3'>see details</button>
      </div>
       <hr />
      <Outlet/>
    </div>
  )
}

export default Product