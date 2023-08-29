import React from "react";

const Todo = ({ text, todo, todos, setTodos, setEditTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const editHandler = () => {
    const findTodo = todos.find((el) => el.id === todo.id);
    setEditTodos(findTodo);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <button onClick={editHandler} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>

      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
