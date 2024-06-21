import logo from './logo.svg';
// import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import { Navbar } from './Components/Navbar';
import { Error } from './Pages/Error';
import { Footer } from './Components/Footer';
import { Logout } from './Pages/Logout';
import { AdminLayout } from './Components/Layouts/Admin-Layout';
import { AdminUsers } from './Pages/Users';
import { AdminContacts } from './Pages/Admin-Contact';
import { AdminUpdate } from './Pages/Admin-Update';


function App() {
  return (
   <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          {/* nested navigate */}
          <Route path='/admin' element={<AdminLayout/>}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="update" element={<AdminUpdate />} />
          </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>  
   
   </>
  );
}

export default App;
