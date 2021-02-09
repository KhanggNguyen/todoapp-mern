const {MongoClient, ObjectId }= require("mongodb");

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = "todos";

let db;

//CONNECT MONGODB
const init = () =>
  MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((client) => {
    db = client.db(DATABASE_NAME);
  });

const getTodos = () => {
    const collection = db.collection('todos')
    return collection.find({}).toArray()
}

const getTodo = (id) => {
    const collection = db.collection('todos')
    return collection.findOne({_id: ObjectId(id)})
}

const insertTodo = (todo) => {
    const collection = db.collection('todos')
    return collection.insertOne(todo)
}

const updateTodo = (id, todo) => {
    const collection = db.collection('todos')
    return collection.updateOne({_id: ObjectId(id)},{$set : {todo_description: todo.description, todo_completed: todo.completed}})
}

const deleteTodo = (id) => {
    const collection = db.collection('todos')
    return collection.deleteOne({_id: ObjectId(id)})
}

module.exports = { init, getTodos, getTodo, insertTodo, updateTodo, deleteTodo };
