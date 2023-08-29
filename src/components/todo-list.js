import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos, filteredTodos ,setEditTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            todo={todo}
            key={todo.id}
            setEditTodos={setEditTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
