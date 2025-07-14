import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipescontext } from "../context/RecipesContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipes = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipescontext);
  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const SingleRecipeData = data.find((recipe) => params.id == recipe.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: SingleRecipeData?.image,
      chef: SingleRecipeData?.chef,
      title: SingleRecipeData?.title,
      desc: SingleRecipeData?.desc,
      ingre: SingleRecipeData?.ingre,
      instrc: SingleRecipeData?.instrc,
      cate: SingleRecipeData?.cate,
      id: SingleRecipeData?.id,
    },
  });

  const submitHandler = (newRecipes) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);

    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...newRecipes };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));

    toast.success("Recipes Updated Successfully", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const deleteHandler = () => {
    const filterdata = data.filter((recipe) => recipe.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    

    const updatefav = favourite.filter((f)=>f.id != params.id)
    setfavourite(updatefav);
    localStorage.setItem("fav", JSON.stringify(updatefav));

    toast.success("Recipes Deleted Successfully", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/recipes");
  };

  let copyfav = [];
  const favHandler = () => {
    copyfav = [...favourite];
    copyfav.push(SingleRecipeData);
    setfavourite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  console.log(favourite);

  let filterfav = [];
  const unFavHandler = () => {
    filterfav = favourite.filter((f) => f.id != SingleRecipeData?.id);
    setfavourite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };
  console.log(filterfav);

  return SingleRecipeData ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2 relative">
        {favourite.find((f) => f.id == SingleRecipeData?.id) ? (
          <i
            onClick={unFavHandler}
            className="text-3xl absolute right-[5%] cursor-pointer active:scale-85 ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className="text-3xl absolute right-[5%] cursor-pointer active:scale-85 ri-heart-line"
          ></i>
        )}

        <h1 className="text-4xl font-black">{SingleRecipeData.title}</h1>
        <div className="flex justify-center items-center mt-5">
          <img
            className="w-[100%] h-[50vh] object-cover rounded-3xl shadow-md"
            src={SingleRecipeData.image}
            alt={SingleRecipeData.title}
          />
        </div>
        <div className="mt-5 flex justify-between gap-3 relative">
          <div>
            <h2 className="text-2xl font-semibold">Chef Name: </h2>
            <h2 className="text-2xl font-semibold">{SingleRecipeData.chef}</h2>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Description: 👇</h2>
          <p className="text-md font-normal">{SingleRecipeData.desc}</p>
        </div>
        <div className="mt-5 p-2 flex gap-10">
          <ul className="list-disc list-inside text-md font-normal">
            <h2 className="text-2xl font-semibold">Ingredients:</h2>
            {SingleRecipeData.ingre}
          </ul>

          <ul className="list-disc list-inside text-md font-normal">
            <h2 className="text-2xl font-semibold">Instruction:</h2>
            {SingleRecipeData.instrc}
          </ul>
        </div>
      </div>
      <div className="right w-1/2 p-2 mt-10">
        <form
          className="mt-5 p-5 flex flex-col gap-5 bg-gray-200 text-black rounded-md shadow-md"
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

          <div className="flex justify-center gap-5">
            <button className=" bg-green-800 w-fit text-white px-7 py-3 rounded cursor-pointer active:scale-95 ">
              Update Recipes
            </button>
            <button
              className=" bg-red-700 w-fit text-white px-7 py-3 rounded cursor-pointer active:scale-95 "
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    "loading..."
  );
};

export default SingleRecipes;
