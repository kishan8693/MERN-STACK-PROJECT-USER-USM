const User = require('../models/user-model')
const Contacts = require('../models/contact-model')
const Services = require('../models/service-model')
const mongoose = require('mongoose')

exports.getAllUsers = async(req,res) =>{
    try {
        const users = await User.find({},{password:0})
        console.log(users)
        if(!users || users.length === 0){
            return res.status(404).json({message:"no user found"})
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}


exports.getAllContacts = async(req,res) =>{
    try {
        const contacts = await Contacts.find()
        console.log(contacts)
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message:"no contacts found"})
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

exports.getAllServices = async(req,res) =>{
    try {
        const services = await Services.find()
        console.log(services)
        if(!services || services.length === 0){
            return res.status(404).json({message:"no service found"})
        }
        return res.status(200).json(services)
    } catch (error) {
        next(error)
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const id = req.params.id
        await User.deleteOne({_id:id})
        res.status(200).json({
            message:"user deleted successfully"
        })
    } catch (error) {
        next()
    }
}

exports.deleteContact = async(req,res)=>{
    try {
        const id = req.params.id
        await Contacts.deleteOne({_id:id})
        res.status(200).json({
            message:"contact deleted successfully"
        })
    } catch (error) {
        next()
    }
}


exports.getUserById = async(req,res,next)=>{
    try {
        const id = req.params.id
        const data =  await User.findOne({_id:id},{password:0})
        res.status(200).json({
            message:data
        })
    } catch (error) {
        next()
    }
}


exports.updateUserById = async (req,res,next)=>{
try {
    const id =req.params.id
    const updatedUserData = req.boddy
    const updatedData = await User.updateOne(
        {_id:id},
        {
            $set:updatedUserData,
        }
    ) 
    res.status(200).json({
        success:true,
        message:"user updated successfully",
        data:updatedData
    })
} catch (error) {
    next()
}
}