import "./css/base.css";
import { useState } from "react";
import Icon from "@material-ui/core/Icon";
import uuid from "react-uuid";
import Button from "./components/Button.js";
import Input from "./components/Input.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import Todos from "./components/Todos.js";

function App() {
  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  };
  const [todos, setTodos] = useState(getLocalStorage());
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [inputValue, setInputValue] = useState("");
  const [view, setView] = useState("All");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const setLocalStorage = (value) => {
    localStorage.setItem("todos", JSON.stringify(value));
    setTodos(value);
  };
  const addTodo = () => {
    const todo = { id: uuid(), completed: false, text: inputValue };
    setInputValue("");
    setLocalStorage([...todos, todo]);
    setFilteredTodos([...todos, todo]);
  };
  const checkTodo = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setLocalStorage([...todos]);
    setFilteredTodos([...todos]);
  };
  const deleteTodo = (id) => {
    setLocalStorage(todos.filter((todo) => todo.id !== id));
    setFilteredTodos(todos.filter((todo) => todo.id !== id));
  };
  const deleteAllTodos = () => {
    setLocalStorage([]);
    setFilteredTodos([]);
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
    <div className="container mx-auto py-8 relative min-h-screen">
      <h1 className="text-3xl text-gray-800 font-semibold text-center">
        #todo
      </h1>
      <div className="max-w-min mx-auto mt-8">
        <Navigation changeView={changeView} view={view} />
        {view !== "Completed" && (
          <div className="my-5 flex">
            <Input
              className="mr-5 w-full"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button className="px-10" bgColor="bg-blue-500" onClick={addTodo}>
              Add
            </Button>
          </div>
        )}
        <div className="px-1">
          <Todos
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
          />
        </div>
        {view === "Completed" && filteredTodos.length > 0 && (
          <Button
            className="my-7 float-right"
            bgColor="bg-red-500"
            onClick={deleteAllTodos}
          >
            <Icon className="text-white mr-2">delete_outline</Icon> delete all
          </Button>
        )}
      </div>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
}

export default App;
