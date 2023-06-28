const express= require('express')
const router = express.Router()
const User = require('../models/UserModel')
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const jwtSecret = "AbhiAvishekh0123456789"
router.post("/loginUser",
[body('email').isEmail().withMessage('Email is invalid'),
body('password').notEmpty().withMessage('Password is required').isLength({ min: 8 }).withMessage('Password should be at least 8 characters long')],
async(req,res)=>{

    const errors = validationResult(req); //based on the above condition
    if(!errors.isEmpty())
    {
      return res.status(400).json({errors:errors.array()});
    }

    const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate and sign a JWT token
    const token = jwt.sign({ userId: user._id },jwtSecret );

    // Send the token in the response
    res.json({success:true, token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
})


module.exports=router