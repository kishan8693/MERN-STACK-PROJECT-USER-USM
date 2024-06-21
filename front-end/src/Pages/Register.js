import React from "react"
import '../Components/Register.css'
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../store/auth"
import {toast} from 'react-toastify'

// const url = "http://localhost:5000/api/auth/register"

export default function Register() {
  
const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
})

const navigate = useNavigate()
const {storeTokenInLS} = useAuth()


  // handaling th input
const handleInput = (e) =>{
    let name = e.target.name
    let value = e.target.value
    
    setUser({
      ...user,
      [name]:value,
    })
  }

// handaling the form
const handleSubmit = async (e) =>{
  e.preventDefault()
  // alert(user)
  // console.log(user)
  try{
    const responce = await fetch('http://localhost:5000/api/auth/register',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(user)
  })
  // console.log("Registration  successfuly")

  if(responce.ok){
    const res_data = await responce.json()
    console.log("responce from server",res_data)
     storeTokenInLS(res_data.token)
    // localStorage.setItem("token",res_data.token)
    setUser({
      username:"",
      email:"",
      phone:"",
      password:""})
      toast.success("Registration successfully")
      navigate("/login")
  }
  else{
    const res_data = await responce.json()
    toast.error(res_data.extraDetails)
  }

  }
  catch(error){
    console.log("register error",error)
  }
  
}

  return (
    <>

    <div className='container main-container'>

      <div className='row'>
      <div className="col-md-1"></div>
        <div className='col-md-5 col-6'>
        <div className="registration-image" style={{marginTop:"-55px"}}>
                <img src="/images/operator.png" className='img-fluid' height={600}  alt="" />
              </div>
        </div>
        

        <div className='col-md-5' style={{marginTop:"-55px"}}>
        <div className="registration-form">
        <h1 style={{borderBottom:"4px double #2ecc71",borderRadius:"10px",fontSize:"3rem", width:"250px"}}>Registration</h1>
          
          <br />
          <form onSubmit={handleSubmit} className="section-registration-from" >
              
              <div>
                <label htmlFor="username" className="text-light">username</label>
                <input type="text" name="username" value={user.username} placeholder='enter your name'
                 id="username" required autoComplete='off' onChange={handleInput} />
              </div>

              <div>
                <label htmlFor="email"  className="text-light">email</label>
                <input type="email" name="email" value={user.email} placeholder='enter your email'
                 id="email" required autoComplete='off' onChange={handleInput} />
              </div>

              <div>
                <label htmlFor="phone"  className="text-light">phone</label>
                <input type="number" name="phone" value={user.phone}  placeholder='enter your number'
                 id="phone" required autoComplete='off'  onChange={handleInput}/>
              </div>

              <div>
                <label htmlFor="password"  className="text-light">password</label>
                <input type="password" name="password" value={user.password} placeholder='enter your password'
                 id="password" required autoComplete='off' onChange={handleInput} />
              </div>

              <br />
              <button type="submit" className='btn btn-submit btn-danger' >Register Now</button>
          </form>
        </div>

        </div>

      </div>

    </div>
    </>
  )
}
