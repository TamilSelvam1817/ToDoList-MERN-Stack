//Using Express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//create an instance of express
const app = express();
app.use(express.json());
app.use(cors());

/* 
//Define a route
app.get('/', (req, res) => {
    res.send("Hello World!")
}); */

/* //sample in-memory storage for todo item
let todos = []; */

// connection mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('DB connected!');
})
.catch((err) =>{
    console.log(err);
})
console.log(process.env.MONGO_URI);

//creating schema
const todoSchema = new mongoose.Schema({
    title : {
        required : true,
        type : String
    },
    description : String
});

//creating model
const todoModel = mongoose.model('Todo', todoSchema);
/* 
//Create a new todo item
app.post('/todos', (req, res) =>{
    const {title, description} = req.body;
    const newToDo = {
        id : todos.length+1,
        title,
        description
    };
    todos.push(newToDo);
    console.log(todos);
    res.status(201).json(newToDo);

});
 */

//create a new todo item with DB
app.post('/todos', async (req, res)=>{
    const {title, description} = req.body;
    try {
        const newToDo = new todoModel({title, description});
        await newToDo.save();
        res.status(201).json(newToDo);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    }
});

// Get all items
app.get('/todos', async (req, res) =>{
    try {
        const todos = await todoModel.find();
        res.json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    }  
});

// Update a todo item
app.put('/todos/:id', async (req, res)=>{
    try {
        const {title, description} = req.body;
        const id = req.params.id;
        const updatedTodo = await todoModel.findByIdAndUpdate(
            id,
            {title , description},
            {new : true}
        );
        if(!updatedTodo){
            return res.status(404).json({message : "Todo Not Found!"});
        }
        res.json(updatedTodo);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    }
    
});

// Delete a Todo item
app.delete('/todos/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        await todoModel.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    }
})

//Start the server 
const port = process.env.PORT || 8000;
app.listen(port, () =>{
    console.log("Server is listening to port "+port);
});