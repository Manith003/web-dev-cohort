import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipescontext } from "../context/RecipesContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { data, setdata } = useContext(recipescontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitHandler = (newRecipes) => {
    newRecipes.id = nanoid();
    // setdata([...data, newRecipes]);
    
    const copydata = [...data];
    copydata.push(newRecipes);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));

    toast.success("Recipes Added Successfully", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
    navigate("/recipes");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="mt-5 p-5 flex flex-col gap-5 bg-gray-200 text-black rounded-md shadow-md w-[50%]"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          {...register("image", { required: "Image URL is required" })}
          type="url"
          placeholder="Enter image URL"
          className="outline-0 p-1 border-b-1"
        />
        <small className="text-red-500 animate-pulse">
          {errors?.image?.message}
        </small>

        <input
          {...register("chef")}
          type="text"
          placeholder="Add chef name"
          className="border-b-1 outline-0 p-1"
        />

        <input
          {...register("title")}
          type="text"
          placeholder="Add Recipes Title"
          className="border-b-1 outline-0 p-1"
        />

        <textarea
          {...register("desc")}
          placeholder="Add Recipes Description"
          className="border-b-1 outline-0 p-1"
        ></textarea>

        <textarea
          {...register("ingre")}
          placeholder="Add Recipes Ingredients"
          className="border-b-1 outline-0 p-1"
        ></textarea>

        <textarea
          {...register("instrc")}
          placeholder="Add Recipes Instructions"
          className="border-b-1 outline-0 p-1"
        ></textarea>

        <select
          {...register("cate")}
          className=" outline-0 p-1 cursor-pointer"
        >
          <option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="super">super</option>
          <option value="dinner">dinner</option>
        </select>

        <div className="flex justify-center ">
          <button className=" bg-gray-800 w-fit text-white px-7 py-3 rounded cursor-pointer active:scale-95 ">
            Save Recipes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
