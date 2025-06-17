const Read = (props) => {
    let todos = props.todos;
    let settodos = props.settodos

  const renderTodos = todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.title}, {todo.isCompleted}
      </li>
    );
  });
  return (
    <>
      <h2>User Data</h2>
      <ol>{renderTodos}</ol>
    </>
  );
};

export default Read;
