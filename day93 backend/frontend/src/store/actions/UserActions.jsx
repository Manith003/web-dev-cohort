import axios from "../../api/Axiosconfig";
import { loaduser } from "../reducers/UserSlice";

export const asynccurrentuser = () => async (dispatch, getState) => {
  try {
    const logedinUser = JSON.parse(localStorage.getItem("userToken")) || "";

    if (logedinUser) {
      dispatch(loaduser(logedinUser));
    } else {
      console.log("No user logged in");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asynclogoutuser = (userData) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("userToken");
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginuser = (userData) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?username=${userData.username}&password=${userData.password}`
    );
    console.log(data[0]);
    localStorage.setItem("userToken", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncregisteruser = (userData) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", userData);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
