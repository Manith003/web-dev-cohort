import { useState } from "react";
import { nanoid } from "nanoid";


const Create = (props) => {
    let todos = props.todos;
    let settodos = props.settodos;

    
  const [title, settitle] = useState(""); // two way binding
    
  const submitHandler = (e) => {
    e.preventDefault();
    const newtodos = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
    settodos([...todos, newtodos]);
    settitle("");
  };


  return (
    <div className="border-r-1 w-[50%] p-10">
      <h4>Simple <span className="text-red-500">Todo List</span></h4>
      <h1 className="text-4xl font-thin mb-5">Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input className="border-b border-black p-2 w-full focus:outline-none"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="title" required
        />
        <br /> <br />
        <button className="cursor-pointer bg-black py-2 px-10 rounded-md text-white">Create todo</button>
      </form>
    </div>
  );
};

export default Create;
