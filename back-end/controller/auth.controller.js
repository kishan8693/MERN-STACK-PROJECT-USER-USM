const bcrypt = require('bcrypt');
const User = require('../models/user-model')
const jwt = require('jsonwebtoken')
const errorMiddleware = require("../middlewares/error-middleware")

exports.register = async(req,res,next)=>{
    try{
        const {username,email,phone,password} = req.body
        const userExist = await User.findOne({email})
        if(userExist){
           res.status(400).json({
                success:false,
                message:"user is already register with us"
            })
        }

        // hash_password
        const saltRound = 10
        const hash_password = await bcrypt.hash(password,saltRound)
        
       const userCreated = await User.create({
        username,email,phone,password:hash_password       //password: hash_password
    })
        res.status(201).json({
            success:true,
            message:"NEW USER ADDED SUCCESSFULLY!!!",
            data:userCreated, 
            token: await userCreated.genereateToken(),
            // userId:userCreated._id.toString()
        })
    }catch(error){
        // res.status(404).json({
        //     success:false,
        //     message:"internal server error"
        // })
        next(error);
    }
}

exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body

        const userExist = await User.findOne({email})
        console.log(userExist)

        if(!userExist){
         return res.status(404).json({
                success:false,
                message:"invalid credential!!"
            })
        }

        //compare password for login
        const user = await bcrypt.compare(password,userExist.password)
        if(user){
            res.status(200).json({
                success:true,
                message:"login successfully",
                token: await userExist.genereateToken(),
                userId: userExist._id.toString(),
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"invalid email or password!!"
            })
        }
    } catch(error){
        res.status(500).json("internal server error")
    }
}

// to send user data

exports.user = async(req,res)=>{
    try{
        const userData = req.user
        console.log(userData)
        res.status(200).json({userData})
    }catch(error){
        console.log(`error from the user rooot:-${error}`)
    }
}


