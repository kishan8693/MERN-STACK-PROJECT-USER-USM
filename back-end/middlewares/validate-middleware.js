const { parseAsync } = require("../validators/auth-validators")

const validate = (schema) => async (req,res,next) =>{
    try{
        const parseBody = await parseAsync(req.body)
        req.body = parseBody
        next()
    }catch(err){
        // console.log(error)
        const status = 422 
        const message = "please fill the input properly"
        const extraDetails = err.errors[0].message
        
        const error ={
            status,
            message,
            extraDetails,
        }
        console.log(error)
        next(error)
    }
}
module.exports = validate