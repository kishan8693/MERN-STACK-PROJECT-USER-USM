const mongoose = require("mongoose")

const ServicesSchema = new mongoose.Schema({
    service:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
    },
    provider:{
        type:String,
        required:true
    },
    createdAT:{
        type:Date,
        default:Date.now
    }
})

module.exports =  mongoose.model("Services",ServicesSchema)