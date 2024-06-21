import { NavLink, Navigate, Outlet} from "react-router-dom"
import { FaUser,FaHome,FaRegListAlt } from "react-icons/fa";
import{FaMessage} from 'react-icons/fa6'
import { useAuth,isLoading } from "../../store/auth";

export const AdminLayout = () =>{

    const { user,isLoading } = useAuth()
    console.log("admin layout",user)

    if(isLoading){
       return <h1>Loading....</h1>
    }
    

    if(!user.isAdmin){
        return <Navigate to="/"/>
    }

    return <>
        <header>
    <div className="container text-light">
        <nav className="">
            <ul style={{ listStyle: "none", display: "flex" ,padding: 0,}}>
                <li className="text-decoration-none mx-2 my-2">
                    <NavLink  to="/admin/users"><FaUser /> users</NavLink>
                </li>
                <li className="nav-item mx-4 my-2">
                    <NavLink to="/admin/contacts"><FaMessage /> contacts</NavLink>
                </li>
                <li className="nav-item mx-4 my-2">
                    <NavLink to="/services"><FaRegListAlt /> services</NavLink>
                </li>
                <li className="nav-item mx-4 my-2">
                    <NavLink to="/"><FaHome /> home</NavLink>
                </li>
            </ul>
        </nav>
    </div>
</header>

        <Outlet/>
    </>
}