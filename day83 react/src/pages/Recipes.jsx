import { useContext } from "react";
import { recipescontext } from "../context/RecipesContext";
import RecipesCard from "../components/RecipesCard";

const Recipes = () => {
  const { data } = useContext(recipescontext);
  const recipesData = data.map((recipes) => {
    return <RecipesCard key={recipes.id} recipes={recipes} />;
  });

  return (
    <div className="p-5">
      <h1 className="text-3xl text-center font-bold mt-5 mb-8">Recipes</h1>
      <div className="flex flex-wrap justify-center gap-5">{recipesData}</div>
    </div>
  );
};

export default Recipes;
