require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { init } = require('./db')
const todosRouter = require('./routes/todos');

//ENV
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || 'localhost'

init().then( () => {
    console.log("Connected to mongodb")
})

//MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

//ROUTES
app.use("/todos", todosRouter);






app.listen(PORT, () => {
    console.log(`Server is running on ${HOST + ":" + PORT}`)
})