const  { z } = require('zod')


// creating object schema
const signUpschema = z.object({
    username:z
    .string({ required_error: "username is required" })
    .trim()
    .min(6, { message:"names can be minimum 6 characters" })
    .max(20,{ message:"name should be not more more than 20 characters"}),

    email:z
    .string({ required_error: "email is requuired" })
    .trim()
    .min(6, { message:"email must be atleast 3 character" })
    .max(30,{ message:"email must be not more than 20 character"}),

    phone:z
    .string({ required_error:"phone number is required"})
    .trim()
    .min(10,{message:"phone number should be minimun 10 digit"})
    .max(10,{message:"phone number should not be more than 10 digit"}),

    password:z
    .string({ required_error:"password is required"})
    .trim()
    .min(6,{message:"password should be min 10 characters"})
    .max(20,{message:"password should not be more than 20 characters"})
})

module.exports = signUpschema