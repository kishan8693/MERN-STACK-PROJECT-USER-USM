const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    createdAT:{
        type:Date,
        default:Date.now
    }
})

// secure the password with bcrypt
// userSchema.pre('save',async function(next){
//     // console.log("pre method",this)
//     const user = this
//     if(!user.isModified("password")){
//         next()
//     }
//     try{
//         const saltRound= await bcrypt.genSalt(10)
//         const hash_password = await bcrypt.hash(user.password,saltRound)
//         user.password = hash_password
//     }catch(error){
//         next(error)
//     }
// })

//jsonwebtoken 
userSchema.methods.genereateToken = async function(){
    try{
        return jwt.sign(
            {
                // first is what's data you want add 
                usersId:this.id.toString(),
                // name:this.username,
                email:this.email,
                // password:this.password,
                // phone:this.phone,
                isAdmin:this.isAdmin,
            },
            // second is secret key
            "HI-TECH",
            {
                // third is expire time 
                expiresIn:"30d"
            }
        )
    }catch(error){
        console.error(error)
    }
    
} 

// module.exports = mongoose.model('User',userSchema)
const User = new mongoose.model('User',userSchema)
module.exports = User
