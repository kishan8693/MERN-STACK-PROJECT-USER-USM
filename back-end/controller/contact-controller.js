const Contacts = require("../models/contact-model")

exports.sendMessages = async(req,res)=>{
    try{
        const responce = req.body
        await Contacts.create(responce)
        res.status(200).json({
            succes:true,
            message:"message send successfully!!!"
        })
    }catch(error){  
        res.status(404).json({
            success:false,
            message:"messages not send"
        })
    }
}