import { useCallback, useState } from "react";
import Recipes from "./Recipes";

const App = () => {
  const [add, setadd] = useState(0);
  const [sub, setsub] = useState(99);

  const ingredients = useCallback(() => {
    console.log("Ingredients function called");
  }, [sub]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-5">
        <button
          className="cursor-pointer px-5 bg-blue-400 text-3xl active:scale-95"
          onClick={() => setadd(add + 1)}
        >
          {add}
        </button>
        <button
          className="cursor-pointer px-5 bg-red-400 text-3xl active:scale-95"
          onClick={() => setsub(sub - 1)}
        >
          {sub}
        </button>
      </div>
      <Recipes ing={ingredients} />
    </div>
  );
};

export default App;
