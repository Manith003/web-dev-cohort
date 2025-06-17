import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setUsers] = useState([
    { name: "manith", age: 20 },
    { name: "jhon", age: 24 },
    { name: "mahi", age: 27 },
  ]);

  return (
    <>
      <Create />
      <Read users={users} setUsers={setUsers} />
    </>
  );
};

export default App;
