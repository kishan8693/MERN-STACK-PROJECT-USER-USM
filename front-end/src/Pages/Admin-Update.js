import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"
import { useParams, } from "react-router-dom"


export const AdminUpdate = () =>{
    const [data,setData] = useState({
        username:"",
        email:"",
        phone:"",
    })
    const params  = useParams()
    console.log("params single users",params)
    const {authorizationToken} = useAuth()


    // get single users data
    const getSingleUserData = async () =>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                },
            });
            const data = await response.json()
            console.log(`user single data:-${data}`)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getSingleUserData()
    },[])


    
    // handaling th input
const handleInput = (e) =>{
    let name = e.target.name
    let value = e.target.value
    
    setData({
      ...data,
      [name]:value,
    })
  }

  // to update the data dinamically
const handleSubmit = async (e) =>{
    e.preventDefault()
  
    try{
      const responce = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        AuthorizationToken:authorizationToken
      },
      body:JSON.stringify(data)
    })
    if(responce.ok){
    toast.success("updated successFully!!")
    }
    else{
    toast.error("not updated")
    }
    }
    catch(error){
      console.log("register error",error)
    }
    
  }
    

    return(
        <section>
            <div className="registration-form">
          <h1 className='mb-5' style={{borderBottom:"4px double #2ecc71",width:"35%",borderRadius:"10px"}}>update User</h1>
          
          <br />
          <form onSubmit={handleSubmit} >
              
              <div>
                <label htmlFor="username" className="text-light">username</label>
                <input type="text" name="username" value={data.username} placeholder='enter your name'
                 id="username" required autoComplete='off' onChange={handleInput} />
              </div>

              <div>
                <label htmlFor="email"  className="text-light">email</label>
                <input type="email" name="email" value={data.email} placeholder='enter your email'
                 id="email" required autoComplete='off' onChange={handleInput} />
              </div>

              <div>
                <label htmlFor="phone"  className="text-light">phone</label>
                <input type="number" name="phone" value={data.phone}  placeholder='enter your number'
                 id="phone" required autoComplete='off'  onChange={handleInput}/>
              </div>

              <br />
              <button type="submit" className='btn btn-submit btn-danger'>Update
              </button>
          </form>
        </div>
        </section>
    )
}