const express = require("express")
// const {
//     register,
//     login
// } = require('../controller/auth.controller')
const router = express.Router()
const authController = require('../controller/auth.controller')
const signUpschema = require("../validators/auth-validators")
const validate = require("../middlewares/validate-middleware")
const authMiddleware = require('../middlewares/auth-middleware')


// router.get("/",(req,res)=>{
//     res.status(200).send("welcome to my website from router")
// })  
// router.route('/').get(authController.home)
router.route('/register')
.post(validate(signUpschema),authController.register)
router.route('/login')
.post(authController.login)
router.route('/user')
.get(authMiddleware,authController.user)


module.exports = router