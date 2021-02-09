import React, {useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Import components
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect( () => {
    axios.get('http://localhost:8000/todos').then(res => {
      setTodos(res.data);
    })
  })

  return (
      <div className="well">
        <h1 className="vert-offset-top-0">Mes tâches :</h1>
        <Todos todos={todos} setTodos={setTodos} />
        <TodoForm todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      </div>
      
  );
}

export default App;
