import { createContext, useState } from "react";

export const todocontext = createContext(null);

const Wrapper = (props) => {
  console.log(props.children);

  const [todos, settodos] = useState([]);

  return (
    <todocontext.Provider value={[todos, settodos]}>
      {props.children}
    </todocontext.Provider>
  );
};

export default Wrapper;
