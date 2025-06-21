import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Create = (props) => {
  let todos = props.todos;
  let settodos = props.settodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;
    settodos([...todos, data]);
    toast.success("Todo created successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });
    reset();
  };

  return (
    <div className="border-r-1 w-[50%] p-10">
      <h4>
        Simple <span className="text-red-500">Todo List</span>
      </h4>
      <h1 className="text-4xl font-thin mb-5">Create Tasks</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title",{required: "Title is required"})}
          className="border-b border-black p-2 w-full focus:outline-none"
          type="text"
          placeholder="title"
        />
        <small className="text-red-500">{errors?.title?.message}</small>
        <br /> <br />
        <button className="cursor-pointer bg-black py-2 px-10 rounded-md text-white">
          Create todo
        </button>
      </form>
    </div>
  );
};

export default Create;
