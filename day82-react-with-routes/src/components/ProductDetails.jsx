
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
const navigate = useNavigate();
const backHandler = ()=>{
    navigate(-1);
}

const params = useParams();
console.log(params);

  return (
    <div className='text-3xl font-thin m-5'>
        <h1>{params.name}</h1>
        <h2>Product Details</h2>
        <button onClick={backHandler} className='text-xl bg-amber-50 text-black rounded py-2 px-5 cursor-pointer mt-3'>Go back</button>
    </div>
    
  )
}

export default ProductDetails