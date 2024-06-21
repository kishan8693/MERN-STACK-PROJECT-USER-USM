// import { useEffect, useState } from "react"
// import { useAuth } from "../store/auth"

// export const AdminUsers = () =>{
//    const [users,setUsers] = useState([])
//    const {authorizationToken} = useAuth()
//    const getAllUsersData = async()=>{
//     try {
//         const responce = await fetch("http://localhost:5000/api/admin/users",{
//             method:"GET",
//             headers:{
//                 Authorization: authorizationToken
//             },
//             // body:JSON.stringify(responce)
//         })
//         const data = await responce.json()
//         console.log(`users:${data}`)
//         setUsers(data)
//     } catch (error) {
//         console.log(error)
//     }
//    }
//     useEffect( ()=>{
//         getAllUsersData();
//     },[]);
//     return(
//         <>
//             <section className="admin-user-section">
//                 <div className="container">
//                     <h1>Admin Users Data</h1>
//                 </div>
//                 <div className="container admin-users">
//                     <table className="border border-2">
//                         <thead>
//                         <tr className="text-light">
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Update</th>
//                             <th>Delete</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {users.map((curUser,index)=>{
//                         return <tr  className="text-light" key={index}>
//                             <td>{curUser.username}</td>
//                             <td>{curUser.email}</td>
//                             <td>{curUser.phone}</td>
//                             <td>Edit</td>
//                             <td>Delete</td>
                            
//                         </tr>
//                     })}
//                         </tbody>
//                     </table>
                    
//                 </div>
//             </section>

//         </>
//     )
// }

import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom"

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });
            const data = await response.json();
            console.log(`users:`, data);

            // Ensure data is an array before setting the state
            if (Array.isArray(data)) {
                setUsers(data);
            } else {
                console.error("API did not return an array:", data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    // delete the user through delete button
    const deleteUser = async(id)=>{
        const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: authorizationToken
            }
        });
        const data = await response.json()
        console.log(`user after delete${data}`)
        if(response.ok){
            getAllUsersData();
        }
    }

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <>
        
        
            <section className="admin-user-section" >
    <div className="" style={{ marginBottom: '20px' }}>
    </div>
    <center>
        <div className="container admin-users" style={{ overflowX: 'auto' }}>
            <h1 style={{ fontSize: '40px', textAlign: 'center', color: '#f8f9fa' }}>Admin Users Data</h1>
            <table className="mt-md-5" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
                        <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Name</th>
                        <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Email</th>
                        <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Phone</th>
                        <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Update</th>
                        <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((curUser, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#e9ecef' }}>
                            <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{curUser.username}</td>
                            <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{curUser.email}</td>
                            <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{curUser.phone}</td>
                            <td style={{ padding: '10px', border: '1px solid #dee2e6', cursor: 'pointer', color: '#007bff' }}>
                                <Link to={`/admin/users/${curUser._id}/edit`} style={{ textDecoration: 'none', color: '#007bff' }}>Edit</Link>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #dee2e6', cursor: 'pointer', color: '#dc3545' }}>
                                <button className="btn btn-primary" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => deleteUser(curUser._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </center>
</section>
        </>
    );
};
