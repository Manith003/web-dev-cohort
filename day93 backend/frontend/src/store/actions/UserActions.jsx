import axios from "../../api/Axiosconfig";
import { loaduser, removeuser } from "../reducers/UserSlice";

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

export const asynclogoutuser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("userToken");
    dispatch(removeuser());
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginuser = (userData) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?username=${userData.username}&password=${userData.password}`
    );
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

export const asynupdateuser = (id, userData) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/users/" + id, userData);
    localStorage.setItem("userToken", JSON.stringify(data));
    dispatch(asynccurrentuser());
  } catch (error) {
    console.log(error);
  }
};

export const asyncdeleteuser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/users/" + id);
    dispatch(asynclogoutuser());
  } catch (error) {
    console.log(error);
  }
};
