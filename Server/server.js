import express from 'express';
import dotenv from 'dotenv' 
import colors from 'colors'
import cors from 'cors'
import testRoute from './routes/testRoutes.js'
import userRoute from './routes/userRoute.js'
import { connectDB } from './config/db.js';
import  todoRoute from './routes/todoRoute.js'

dotenv.config()

// DB connncection
connectDB()

const app = express();  


// middlewares 
app.use(express.json())
app.use(cors()); 


// route 
app.use('/api/v1/test', testRoute); 
app.use('/api/v1/user', userRoute); 
// app.use('/api/v1/user', userRoute); 
app.use('/api/v1/todo', todoRoute)
   

// port 
const PORT = process.env.PORT || 5000 

// listen 
app.listen(PORT, ()=>{
    console.log(`serever is started at port ${PORT}`.bgMagenta.white)
})   