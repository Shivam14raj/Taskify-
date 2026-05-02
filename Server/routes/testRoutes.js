import express from 'express'
import {testControllerfun} from '../controllers/testController.js'

// router object
const router = express.Router(); 


// Routes
router.get('/', testControllerfun)


export default router; 