const express = require('express')
const connectDB = require('./utils/db')
const cors = require('cors')
//routes
const authController = require("./router/auth-router")
const Contacts = require("./router/contact-routes")
const Services = require("./router/service-routes")
const errorMiddleware = require("./middlewares/error-middleware")
const adminRoute = require('./router/admin-router')
connectDB()

const app = express()

//  handaling cors
const corsOptions = {
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    Credentials:true
}
app.use(cors(corsOptions))
app.use(express.json())

//use routes    
app.use('/api/auth',authController)
app.use('/api/Contacts',Contacts)
app.use('/api/Services',Services)

// app.use('/api/auth/login',auth) 

//defin admin route
app.use('/api/admin',adminRoute)

// app.get("/",(req,res)=>{
//     res.status(200).send("welcome to my website")
// })

// app.get("/register",(req,res)=>{
//     res.status(200).send("welcome to registration page")
// })

app.use(errorMiddleware)
const port = 5000

app.listen(port,()=>{
    console.log(`server running at:${port}`)
})



