const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


// Signup API

router.post("/signup", async (req, res) => {

try {

const { name, email, password, role } = req.body;

// check if user exists

const existingUser = await User.findOne({ email });

if(existingUser){
return res.status(400).json({message:"User already exists"});
}

// hash password

const hashedPassword = await bcrypt.hash(password,10);

// create user

const user = new User({
name,
email,
password: hashedPassword,
role
});

await user.save();

res.json({message:"User created successfully"});

} catch(err){

res.status(500).json(err);

}

});


// Login API

router.post("/login", async (req,res)=>{

try{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.status(400).json({message:"User not found"});
}

const validPassword = await bcrypt.compare(password,user.password);

if(!validPassword){
return res.status(400).json({message:"Invalid password"});
}

// generate JWT

const token = jwt.sign(

{
id:user._id,
role:user.role
},

process.env.JWT_SECRET,

{expiresIn:"1d"}

);

res.json({
token,
user
});

}catch(err){

res.status(500).json(err);

}

});

module.exports = router;