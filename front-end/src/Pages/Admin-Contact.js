// import { useEffect, useState } from "react"
// import { useAuth } from "../store/auth"

// export const AdminContacts = () =>{

//     const [contactData,setContactData] = useState([])
//     const {authorizationToken} = useAuth()
    
//     const getAllContactsData = async()=>{
//         try {
//             const responce = await fetch("http://localhost:5000/api/admin/contacts",{
//                 method:"GET",
//                 headers:{
//                     Authorization:authorizationToken
//                 }
//             })
//             const data = await responce.json()  
//             console.log("contact data",data)

//             if(responce.ok){
//                 setContactData()
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
    
    
    
    
//     useEffect(()=>{
//         getAllContactsData()
//     },[])

//     return<>
//     <h1>Admin Contact Data</h1>
    
//         {contactData.map((curContactData,index)=>{
//             const {username,email,message} = curContactData
//             return(
//                     <div key={index}>
//                         <p>{username}</p>
//                         <p>{email}</p>
//                         <p>{message}</p>
//                         <button className="btn">delete</button>
//                     </div>
//             )
//         })}
    
//     </>
// }

import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken, // Assuming Bearer token
        },
      });
      const data = await response.json();
      console.log("contact data", data);

      if (response.ok) {
        setContactData(data); // Set the fetched data to the state
      } else {
        console.error('Error fetching contact data:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // defining the functions deletecontactdatabyid

  const deleteContact = async(id) =>{
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken, // Assuming Bearer token
        },
      });
      if(response.ok){
        getAllContactsData()
        toast.success("DELETED SUCCESSFULLY!!")
      }
    } catch (error) {
      toast.error("NOT DELETED...")
    }
  }

  useEffect(() => {
    getAllContactsData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    // <>
    //   <h1>Admin Contact Data</h1>
    //   {contactData.map((curContactData, index) => {
    //     const { username, email, message } = curContactData;
    //     return (
    //       <div key={index}>
    //         <p>{username}</p>
    //         <p>{email}</p>
    //         <p>{message}</p>
    //         <button className="btn">delete</button>
    //       </div>
    //     );
    //   })}
    // </>



    <>
    <h1 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '20px', color: '#f8f9fa' }}>Admin Contact Data</h1>
    <div className="table-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', border: '1px solid #dee2e6', borderRadius: '8px', overflow: 'hidden' }}>
      <div className="table-header" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
        <div className="table-row" style={{ display: 'flex' }}>
          <div className="table-cell" style={{ flex: '1', padding: '10px', border: '1px solid #dee2e6' }}><strong>Username</strong></div>
          <div className="table-cell" style={{ flex: '1', padding: '10px', border: '1px solid #dee2e6' }}><strong>Email</strong></div>
          <div className="table-cell" style={{ flex: '2', padding: '10px', border: '1px solid #dee2e6' }}><strong>Message</strong></div>
          <div className="table-cell" style={{ flex: '1', padding: '10px', border: '1px solid #dee2e6' }}><strong>Action</strong></div>
        </div>
      </div>
      <div className="table-body">
        {contactData.map((curContactData, index) => {
          const { username, email, message,_id } = curContactData;
          return (
            <div className="table-row" key={index} style={{ display: 'flex', backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#e9ecef' }}>
              <div className="table-cell" style={{ flex: '1', padding: '10px', border: '1px solid #dee2e6' }}>{username}</div>
              <div className="table-cell" style={{ flex: '1', padding: '10px', border: '1px solid #dee2e6' }}>{email}</div>
              <div className="table-cell" style={{ flex: '2', padding: '10px', border: '1px solid #dee2e6' }}>{message}</div>
              <div className="table-cell" style={{ flex: '1', padding: '10px', border: '1px solid #dee2e6' }}>
                <button className="btn" style={{ backgroundColor: '#dc3545', color: '#ffffff', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}
                onClick={() => deleteContact(_id)}
                >delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <br />
  </>
  

  );
};
