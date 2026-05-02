import express from 'express'
import { userModel } from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken' 

// register controller 
export const userController = async (req, res)=>{  
    try {
     const {username, email, password} = req.body;  

    // validation 
    if(!username || !email || !password){
       return res.status(500).json({
            success: false,
            message: 'All fields are required'
        })
    }   

    // finding user on the basis of email 
     const existingUser = await userModel.findOne({email}); 

     if(existingUser){
        return res.status(500).json({
            success: false, 
            message: "user already exist"
        })
     }  

     // password hashing 
     const salt  = await bcrypt.genSalt(10); 
     const hashPassword = await bcrypt.hash(password, salt); 
     
     // save user now 
     const newUser =  new userModel({username, email, password: hashPassword}); 
     await newUser.save() 
      return res.status(201).json({
        success: true,
        message:"user register successfully"
     }) 
    }  

    catch (error) {
      return res.status(500).json({
        success: false, 
        message: 'Server register api error',
        error
      })  
    }
}  

// Login controller 
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
      })
    }

    const user = await userModel.findOne({ email })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User does not exist',
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      })
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1d' }
    )

    return res.status(200).json({
      success: true,
      message: 'Login successfully',
      token,
      user,
    })

  } catch (error) {
    console.log(error)

    return res.status(500).json({
      success: false,
      message: 'Server login api error',
      error: error.message,
    })
  }
}
// we can use token in client and server side and if both tokens match from backend and frontend then we will allow protected routes to access