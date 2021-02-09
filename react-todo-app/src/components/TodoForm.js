import React from "react";
import axios from "axios";

const TodoForm = ({ inputText, setInputText, todos, setTodos}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      description: inputText
    }
    
    axios.post('http://localhost:8000/todos/add', newTodo)
      .then(res => console.log(res.data));

    setInputText("");
  };

  return (
    <div className="commentForm vert-offset-top-2">
      <hr />
      <div className="clearfix">
        <form className="todoForm form-horizontal">
          <div className="form-group">
            <div className="row">
              <div className="col-md-10">
                <input
                  type="text" onChange={inputTextHandler}
                  value={inputText}
                  className="todo-form-input form-control"
                  placeholder="Une tâche ?"
                />
              </div>
              <div className="col-md-2">
                <button
                  onClick={submitTodoHandler}
                  className="todo-form-submit btn btn-primary"
                  type="submit">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
