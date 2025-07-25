import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { todocontext } from '../Wrapper.jsx';

const Read = () => {
  const [todos, settodos] = useContext(todocontext);

 useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      settodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteHandler = (id) => {
    let filtertodos = todos.filter((todo) => {
      return todo.id != id;
    });
    settodos(filtertodos);
    toast.error("todo deleted successfully!",{
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }; 


  const allclearHandler = ()=>{
    settodos([]);
  }

  const renderTodos = todos.map((todo) => {
    return (
      <li className="my-2 py-2 px-2 text-lg bg-green-100 rounded shadow-sm flex justify-between item-center" key={todo.id}>
        {todo.title} {todo.isCompleted}
        <span className="bg-green-300 p-1 rounded cursor-pointer text-sm" onClick={() => deleteHandler(todo.id)}>
          Complete
        </span>
      </li>
    );
  });


  return (
    <div className="w-[50%] p-10">
      <h2 className="text-red-700 text-lg animate-pulse">Pending Task: </h2>
      <ol className="mb-1">{renderTodos}</ol>
      <button className="bg-red-700 py-1 px-7 rounded-md text-white cursor-pointer" onClick={allclearHandler}>All clear</button>
    </div>
  );
};

export default Read;
