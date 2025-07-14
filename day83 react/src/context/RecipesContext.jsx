import { createContext, useEffect, useState } from "react";

export const recipescontext = createContext(null);

const RecipesContext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  }, [])
  

  return (
    <recipescontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipescontext.Provider>
  );
};

export default RecipesContext;