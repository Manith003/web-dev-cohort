import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {

  const getProducts = async () =>{
    try {
      const {data} = await axios.get('/products') 
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  }


const ans = useEffect(() => {
  getProducts();
},[])

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default Home