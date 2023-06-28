const express= require('express')
const router = express.Router()
const User = require('../models/UserModel')
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');


router.post("/createUser",
[
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 8 }).withMessage('Password should be at least 8 characters long')
],

async(req,res)=>{

    const errors = validationResult(req); //based on the above condition
      if(!errors.isEmpty())
      {
        return res.status(400).json({errors:errors.array()});
      }



    try {
        let { username, email, password, confirmPassword } = req.body;
    
        // Check if password and confirm password match
        if (password !== confirmPassword) {
          return res.status(400).json({ error: 'Passwords do not match' });
        }
        const salt= await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt)
   
    
        // Create a new user using the User schema
        const user = new User({ username, email, password });
    
        // Save the user to the database
        await user.save();
    
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
      }
    
})

module.exports=router


