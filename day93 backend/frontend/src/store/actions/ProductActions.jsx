import axios from "../../api/Axiosconfig";
import { loadproduct } from "../reducers/ProductSlice";


export const asyncloadproducts = () => async (dispatch, getState) =>{
try {
    const {data} = await axios.get("/products");
    dispatch(loadproduct(data));
    
} catch (error) {
    console.log(error);  
}
}

export const asyncreateproduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};

export const asynupdateproduct = (id,product) => async (dispatch, getState) => {
  try {
    await axios.patch("/products/" + id, product);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};

export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};