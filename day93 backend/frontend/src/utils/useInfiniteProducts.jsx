import { useEffect, useState } from "react";
import axios from "../api/Axiosconfig";
import { loadlazyproduct } from "../store/reducers/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const useInfiniteProducts = () => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.productReducer.Products);

  const [hasMore, sethasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=5&_start=${Products.length}`
      );
      if (data.length > 0) {
        sethasMore(true);
        dispatch(loadlazyproduct(data));
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { hasMore, fetchProducts, Products };
};

export default useInfiniteProducts;
