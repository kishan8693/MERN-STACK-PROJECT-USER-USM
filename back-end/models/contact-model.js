const mongoose = require("mongoose")

const ContactsSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Contacts",ContactsSchema)