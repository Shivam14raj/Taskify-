import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    }, 
    description:{
        type: String, 
        required: true,
        trim: true
    },
    isCompleted: {
       type: Boolean,
       required: true, 
       default: false    
    }, 
    createdBy: {
        ref: 'users', 
        type: mongoose.Schema.ObjectId,
        required: true
    }, 
    priority: {
        type: String, 
        enum: ['low', 'medium', 'high'], 
        lowercase: true, 
        default: 'low',
        trim: true
    }, 
    dueDate: {
        type: Date
    }, 
    status:{
        type: String, 
        enum: ['pending', 'progress', 'completed'], 
        default: 'pending'
    }, 
    category: {
        type: String, 
        default: 'general',
        trim: true 
    }

},{timestamps: true})

export const todoModel = mongoose.model('todo', todoSchema, 'Todo'); 