import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  const [todos, settodos] = useState([
    { id: 1, title: "finish the work", isCompleted: false },
  ]);

  return (
    <div>
      <Create todos={todos} settodos={settodos}/>
      <Read todos={todos} settodos={settodos}/>
    </div>
  );
};

export default App;
