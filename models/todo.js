const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'The todo text field is required'],
    },
    type: {
        type: String,
        required: [true, 'Empty']
    }, 
    priority: {
        type: String,
        required: [true, 'Empty']
    },
    description: {
        type: String,
        required: [true, 'Empty']
    },
    created_at: {
        type: String
    }
});
//Create model for todo
const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;