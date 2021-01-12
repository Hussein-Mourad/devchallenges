import "./css/base.css";
import { useState } from "react";
import Icon from "@material-ui/core/Icon";
import uuid from "react-uuid";
import Button from "./components/Button.js";
import Input from "./components/Input.js";
import Navigation from "./components/Navigation.js";
import Todos from "./components/Todos.js";

function App() {
  const getLocalStorage = () => {
    if (localStorage.getItem("todos")) {
      return localStorage.getItem("todos");
    } else {
      localStorage.setItem("todos", []);
      return [];
    }
  };
  const [todos, setTodos] = useState(getLocalStorage());
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [inputValue, setInputValue] = useState("");
  const [view, setView] = useState("All");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const setLocalStorage = (value, filteredTodos) => {
    localStorage.setItem("todos", value);
    setTodos(value);
    if (filteredTodos) {
      setFilteredTodos(filteredTodos);
    }
  };
  const addTodo = () => {
    const todo = { id: uuid(), completed: false, text: inputValue };
    setInputValue("");
    setTodos([...todos, todo]);
    setFilteredTodos([...todos, todo]);
    localStorage.setItem("todos", todos);
  };
  const checkTodo = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodos([...todos]);
    setFilteredTodos([...todos]);
    localStorage.setItem("todos", todos);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setFilteredTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem("todos", (todo) => todo.id !== id);
  };
  const deleteAllTodos = () => {
    setTodos([]);
    setFilteredTodos([]);
    localStorage.setItem("todos", []);
  };
  const changeView = (e) => {
    setView(e.target.innerText);
    if (e.target.innerText === "All") {
      setFilteredTodos(todos);
    } else if (e.target.innerText === "Completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    } else {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    }
  };
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl text-gray-800 font-semibold text-center">
        #todo
      </h1>
      <div className="max-w-min mx-auto mt-8">
        <Navigation changeView={changeView} view={view} />
        <div className="my-5 flex">
          <Input
            className="mr-5 w-full"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button bgColor="bg-blue-500" onClick={addTodo}>
            Add
          </Button>
        </div>
        <div className="px-1">
          <Todos
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
          />
        </div>
        {view === "Completed" && filteredTodos.length > 0 && (
          <Button
            className="py-4 my-7 text-base float-right"
            bgColor="bg-red-500"
            onClick={deleteAllTodos}
          >
            <Icon className="text-white mr-2">delete_outline</Icon> delete all
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
