import Icon from "@material-ui/core/Icon";

function Todo({ children, completed, deleteTodo, id, checkTodo }) {
  return (
    <div className={`flex justify-between items-center my-2`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="transform scale-150 mr-2"
          onChange={() => {
            checkTodo(id);
          }}
          checked={completed}
        />
        {completed ? (
          <strike className="text-gray-800">{children}</strike>
        ) : (
          <p className="text-gray-800">{children}</p>
        )}
      </div>
      <button className="focus:outline-none" onClick={() => deleteTodo(id)}>
        <Icon className="text-gray-300">delete_outlined</Icon>
      </button>
    </div>
  );
}

export default Todo;
