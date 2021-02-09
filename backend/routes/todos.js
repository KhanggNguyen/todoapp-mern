const express = require("express");
const todosRouter = express.Router();
const Todo = require("../models/todo.model");
const {
  getTodos,
  getTodo,
  insertTodo,
  updateTodo,
  deleteTodo,
} = require("../db");

todosRouter.route("/").get((req, res) => {
  getTodos()
    .then((todos) => res.json(todos))
    .catch((err) => console.log(err));
});

todosRouter.route("/:id").get((req, res) => {
  getTodo(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => console.log(err));
});

todosRouter.route("/add").post((req, res) => {
  let todo = new Todo();
  todo.todo_description = req.body.description;
  todo.todo_completed = false;
  insertTodo(todo)
    .then((todo) => {
      res.status(200).json({ todo: "Todo added" });
    })
    .catch((err) => {
      res.status(400).send("Add todo failed");
    });
});

todosRouter.route("/update/:id").post((req, res) => {
  let id = req.params.id;
  updateTodo(id, req.body)
    .then((todo) => res.status(200).json({ todo: "Todo updated" }))
    .catch((err) => res.status(400).send("Add todo failed"));
});

todosRouter.route("/delete/:id").get((req, res) => {
  const result = deleteTodo(req.params.id);
  if (result.deletedCount === 1) res.status(200).json({ todo: "Todo deleted" });
  else res.status(400).send("Delete todo failed");
});

module.exports = todosRouter;
