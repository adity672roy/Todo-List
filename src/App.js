import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todo-list";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [editTodos, setEditTodos] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      console.log(localTodo);
      setTodos(localTodo);
    }
  };

  return (
    <div >
      <header>
        <h1 className="color-black">TODO LIST </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        editTodos={editTodos}
        setEditTodos={setEditTodos}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
        setEditTodos={setEditTodos}
      />
    </div>
  );
}

export default App;
