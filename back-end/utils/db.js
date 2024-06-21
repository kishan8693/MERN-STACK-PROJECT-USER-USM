const mongoose = require('mongoose')

// const URI = "mongodb://localhost:27017/full_stack"

const connectDB = async ()=>{
    const connection = await mongoose.connect("mongodb://localhost:27017/full_stack",{

    })
    console.log(`mongoDB connected${connection.connection.host}`)
}

module.exports = connectDB