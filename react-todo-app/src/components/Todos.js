import React from "react";
import Todo from "../components/Todo";

const Todos = ({ todos }) => {
  return (
    <ul className="list-group">
        {todos.map( (currentTodo, i) => (<Todo todo={currentTodo} key={i} />))}
    </ul>
  );
};

export default Todos;
