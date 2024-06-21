const express = require('express')
const Services = require('../models/service-model')

exports.getServices = async(req,res)=>{
    try {
        const services = await Services.find()
        res.status(200).json({
            success:true,
            msg:services
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            msg:"SERVICE NOT FOUND"
        })
    }
}
// exports.getService = async(req,res)=>{
//     try {
//         const servicesId = req.params.id
//         const servicesDetails = await Services.findById(servicesId)
//         if(!servicesDetails){
//             res.status(404).json({
//                 success:false,
//                 message:"service not found from given id"
//             })
//         }
//         res.status(200).json({
//             success:true,
//             message:"service found from given id",
//             data:servicesDetails
//         })
//     } catch (error) {
//         res.status(404).json({
//             success:false,
//             message:"something went to wrong"
//         })
//     }
// }