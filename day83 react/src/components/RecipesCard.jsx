import { Link } from "react-router-dom";

const RecipesCard = (props) => { // props coming from recipes.jsx

  const { id, image, title, desc } = props.recipes;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="duration-200 hover:scale-102 block w-[25%] border-none p-2 rounded-4xl overflow-hidden bg-[#2E2E2E] shadow-md mr-3 mb-3"
    >
      <img className="w-full h-64 rounded-3xl object-cover" src={image} alt="" />
      <h1 className="px-3 py-2 text-2xl font-bold">{title}</h1>
      <p className="px-3 pb-2 pt-1 text-md font-semibold text-gray-400 leading-5">
        {desc.slice(0, 100)}... <span className="text-blue-500">more</span>
      </p>
    </Link>
  );
};

export default RecipesCard;
