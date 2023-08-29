import React, { useEffect } from "react";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  editTodos,
  setEditTodos,
}) => {
  useEffect(() => {
    if (editTodos) {
      setInputText(editTodos.text);
    } else {
      setInputText("");
    }
  }, [setInputText, editTodos]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const updateTodo = (text, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { text, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodos("");
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!editTodos) {
      if (inputText === "") {
        alert("write something to add the todo");
      } else {
        setTodos([
          ...todos,
          { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
      }
    } else {
      updateTodo(inputText, editTodos.id, editTodos.completed);
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
