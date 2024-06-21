import { NavLink } from "react-router-dom"
export const Error =  () =>{
    return (
        <>
           <div className="container">
                <div className="col-md-12 main-div">
                    <h1 className="error-msg">404</h1>
                    <p>SORRY! PAGE NOT FOUND</p>
                    <p>Oops! it seems like the page you'r trying to access doesn't exist, if you <br /> believe
                        there's an issue. feel free to report it. and we'll look into it.
                    </p>

            <div className="btns d-flex gap-4 justify-content-center mt-md-3">
               <button className="btn border border-3 border-primary text-light d-flex rounded-5 "><NavLink className="text-decoration-none" to="/">Return home</NavLink></button>
               <button className="btn border border-3 border-primary text-light rounded-5 "><NavLink className="text-decoration-none"  to="/contact">Report Problem</NavLink></button>
            </div>
            
            </div>
           </div>
           
 
        </>
    )
}
// export const Error = () =>{
//         <>
//             <section id="error-page">
//                 <div className="container content">
//                     <h2 className="header">404</h2>
//                     <p>
//                         oops!!! yaha nai aana tha aapko
//                     </p>
//                     <div className="btns">
//                         <NavLink to="/">return home</NavLink>
//                         <NavLink to="/contact">report problem</NavLink>
//                     </div>
//                 </div>
//             </section>
//         </>
// }