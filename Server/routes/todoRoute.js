import express from 'express' 
import {createToDoController, deleteTodo, getTodo, updateTodo} from '../controllers/todoController.js'
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';

const router = express.Router(); 

// create todo router 
router.post('/create', AuthMiddleware, createToDoController); 

// GET TODO
router.post('/getAll/:userId', AuthMiddleware, getTodo); 
// in controller we named "userid" hence we are giving here userid 

// delete TODO router
router.delete('/delete/:id', AuthMiddleware, deleteTodo) 

// update TODO router
router.put('/update/:id', AuthMiddleware, updateTodo)

export default router; 