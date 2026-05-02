import express from 'express'
import {userController} from '../controllers/userController.js'
import {userLogin} from '../controllers/userController.js'
// router 
const router = express.Router() 

// routes
// register router
router.post('/register', userController)

//login router
router.post('/login', userLogin)

export default router
