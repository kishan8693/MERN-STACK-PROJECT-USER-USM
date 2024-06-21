import React from 'react'
import '../Components/Login.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth'
import {toast} from 'react-toastify'

const url = "http://localhost:5000/api/auth/login"

export default function Login() {

const [user,setUser] = useState({
  email:"",
  password:""
})

const navigate = useNavigate()
const {storeTokenInLS} = useAuth()
const handleInput = (e) =>{
  let name = e.target.name
  let value = e.target.value

  setUser({
    ...user,
    [name]:value
  })
}
const handleSubmit = async (e) =>{
    e.preventDefault()
    // toast("login successfully") 
    console.log(user)
    try{
      const responce = await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user)
      })
      console.log("login form",responce)
      
      if(responce.ok){
        const res_data = await responce.json()
        console.log("reponce from server",res_data)
        toast.success("Login Successfully!!!")
        // localStorage.setItem("token",res_data.token)
        storeTokenInLS(res_data.token)
        setUser({email:"",password:""})
        navigate("/")
      }
      else{
        toast.error("invalid credentials")
      }

    }catch(error){
      console.log("login error",error)
    }
}

  return (
    <>
       <div className='container'>
          <div className='row'>
              <div className='col-md-1'></div>
          <div className="registration-image col-md-6">
                <img src="/images/operator.png" className='img-fluid' height={600}  alt="" />
              </div>
            
            <div className='col-md-4 mt-md-5'>
              <h1 className='' style={{borderBottom: "4px double #2ecc71", width:"25%", fontFamily: "Arial, sans-serif",borderRadius:"10px",marginBottom:"20px",fontSize:"3rem"}}>Login</h1>  
              <form onSubmit={handleSubmit} className='section-form'>
                <div className=''>
                    <label htmlFor='email'>email:</label>
                    <input type="email" name='email' placeholder='enter your email'
                    id='email' required autoComplete='off' value={user.email} onChange={handleInput} 
                    />
                </div>

                <div className=''>
                    <label htmlFor='password'>password:</label>
                    <input type="password" name='password' placeholder='enter your password'
                    id='password' required autoComplete='off' value={user.password} onChange={handleInput} 
                    />
                </div>
                <br />

              <button className='btn btn-danger' type="submit">Login</button>
              </form>
            </div>
          </div>
       </div>
    </>
  )
}
