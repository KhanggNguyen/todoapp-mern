import React from "react";

const Todo = ({ todo }) => {
  return (
    <li className="list-group-item clearfix">
      {todo.todo_description}
      <div className="float-right" role="group">
        <button type="button" className="btn btn-sm btn-success img-circle">
          <i className="fas fa-check"></i>
        </button>
        <button type="button" className="btn btn-sm btn-danger img-circle">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Todo;
