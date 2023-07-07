const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }

})

const toDo = mongoose.model('ToDo', ToDoSchema)
module.exports = toDo