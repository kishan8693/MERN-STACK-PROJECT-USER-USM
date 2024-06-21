import { useState } from 'react'
import React from 'react'
import { useAuth } from '../store/auth'
import '../Components/Contact.css'
import { toast } from 'react-toastify'

const defaultContactFormData = {
  username:"",
  email:"",
  message:"",
}

export default function Contact() {

const [contact,setContact] = useState(defaultContactFormData)

const [userDate,setUserData] = useState(true)
const {user} = useAuth()

if(userDate && user){
  setContact({
    username:user.username,
    email:user.email,
    message: "",
  })
  setUserData(false)
}
 

const handleInput = (e) =>{
const name = e.target.name
const value = e.target.value

setContact({
...contact,
[name]: value
})
}

const handleSubmit = async (e) =>{
e.preventDefault()
// alert(contact)
// console.log(contact)
try {
  const responce = await fetch('http://localhost:5000/api/Contacts',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(contact)
  })
  if(responce.ok){
    setContact(defaultContactFormData)
    const data = await responce.json()
    console.log(data)
    toast.success("message send successfully!!")
  }
} catch (error) {
  console.log("message not send")
}
}

    // setContact((pre)=>({
    //   ...pre,             {this is another method tu keep your previous date usgin spread operator}
    //   [name]:value
    // }))          


  return (
    <>
      
      <section className='section-contact-sadu'>
    <div className="contact-content container">
        <div className="col-md-2">
        <h1 class="contact-heading" style={{ borderBottom: "4px double #2ecc71", fontFamily: "Arial, sans-serif",borderRadius:"10px",marginBottom:"20px",fontSize:"2.5rem"}}>Contact Us</h1>
        </div>
    </div>


{/* contact page main */}
    <div className="container d-flex justify-content-md-around m-0 p-0">

          {/* left side image */}
        <div className="contact-image col-md-4" style={{marginTop:"-50px"}}>
          <img src="/images/operator.png"  className='ms-md-5 float-end' height={450} width={450} alt="" />
        </div>

        {/* contact form */}
        <div className="section-form col-md-4" style={{marginTop:"-50px"}}>
          <form onSubmit={handleSubmit} >

            <div>
                <label htmlFor="username">username:</label>
                <input type="text" placeholder='enter your username' name="username" id="username"
                autoComplete='off' value={contact.username} onChange={handleInput} required />
            </div>

            <div>
                <label htmlFor="email">email:</label>
                <input type="email" className='inputmail' placeholder='enter your email' name="email" id="email"
                autoComplete='off' value={contact.email} onChange={handleInput} required />
            </div>

            <div>
              <label htmlFor="message">message:</label> <br />
              <textarea name="message" className='txtarea' id="message" placeholder='enter your message here'
              cols={30} rows={6} autoComplete='off' value={contact.message} onChange={handleInput}
               ></textarea>
            </div>

            <div>
              <button type='submit'>submit</button>
            </div>
          </form>
        </div>

    </div>
      </section>
      <br />
      <br />
    </>
  )
}
