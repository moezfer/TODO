const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    status: {
        type: Boolean,
        require: true
    },
    priority:{
        type:Number,
        required:true
    }
   
}, {timestamps:true});

module.exports = mongoose.model('Todo', todoSchema);