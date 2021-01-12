import Todo from "./Todo.js";

function Todos({ className, todos, deleteTodo, checkTodo }) {

  return (
    <div className={`${className}`}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        >
          {todo.text}
        </Todo>
      ))}
    </div>
  );
}

export default Todos;
