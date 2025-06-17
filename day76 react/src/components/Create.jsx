import { useState } from "react";
import { nanoid } from "nanoid";


const Create = (props) => {
    let todos = props.todos;
    let settodos = props.settodos

    
  const [title, settitle] = useState("");
    
  const submitHandler = (e) => {
    e.preventDefault();
    const newtodos = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
    // let copytodos = [...todos];
    // copytodos.push(newtodos);
    // settodos(copytodos);
    settodos([...todos, newtodos]);
    settitle("");
  };

  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="title"
        />
        <br /> <br />
        <button>Create todo</button>
      </form>
    </>
  );
};

export default Create;
