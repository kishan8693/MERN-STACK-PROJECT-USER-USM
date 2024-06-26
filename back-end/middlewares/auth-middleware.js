const jwt = require('jsonwebtoken')
const User = require('../models/user-model')

const authMiddleware = async(req,res,next)=>{
    
    const token = req.header("Authorization")
    if(!token){
        return res.status(401).json({
            message:"unauthorization http, token not provided"
        })
    }
    const jwtToken = token.replace("Bearer","").trim()
    console.log('token from auth middleware',jwtToken)

    try {
        const isVerified = jwt.verify(jwtToken,"HI-TECH")
        
        const userData = await User.findOne({email:isVerified.email}).select({
            password:0
        })
        console.log(userData)
        // custome property
        req.user = userData
        req.token = token
        req.userId = userData._id
        next()
    } catch (error) {
    res.status(401).json({
        message:"unauthorized,invalid token"
    })        
    }
}

module.exports = authMiddleware