import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import './Navbar.css'

export const Navbar = () => {

  const {isLoggedIn} = useAuth()

  return (
    <>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>
      <img src="/images/devpng.png" className="rounded-circle main-img" height={50} width={50} alt="" />
    </NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to='/' >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='about'>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='Services'>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='Contact'>Contact</NavLink>
        </li>

        {isLoggedIn ?(
        <li className="nav-item">
          <NavLink className="nav-link" to='Logout'>Logout</NavLink>
        </li>
        ):(<>
          <li className="nav-item">
          <NavLink className="nav-link" to='Register'>Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='Login'>Login</NavLink>
        </li>
        </>)}
        
        
      </ul>
    </div>
  </div>
</nav>

    </>
  )
};



