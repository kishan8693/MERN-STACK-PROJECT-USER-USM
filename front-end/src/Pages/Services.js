// import React from 'react'
// import '../App.css'
// import { useAuth } from '../store/auth'
// import '../Components/Tailwind.css'


// export default function Services() {
// const {services} = useAuth();

//   return (
//     <>
//     <section className="section-service">
//       <div className="bg-dark text-light">
//         <div className="container">
//           <h1 className="main-heading">Services</h1>
//         </div>
  
//         <div className="container ms-md-5">
//           <div className="row ms-md-5">
//             <div className="col-md-3 glow-border ms-md-5">
//               <div className="col-md-12">
//                 <center>
//                   <img src="images/operator.png" height={250} alt="our service info" />
//                 </center>
//                 <div className="col-md-12 d-flex justify-content-around">
//                   <p>tech solution Inc</p>
//                   <p>$7,000</p>
//                 </div>
//                 <h4 className="service-title">web development</h4>
//                 <p className="service-description">crafting tailor-made websites <br /> and web solutions</p>
//               </div>
//             </div>
  
//             <div className="col-md-3 glow-border ms-md-5">
//               <div className="col-md-12">
//                 <center>
//                   <img src="images/operator.png" height={250} alt="our service info" />
//                 </center>
//                 <div className="col-md-12 d-flex justify-content-around">
//                   <p>tech solution Inc</p>
//                   <p>$7,000</p>
//                 </div>
//                 <h4 className="service-title">web development</h4>
//                 <p className="service-description">crafting tailor-made websites <br /> and web solutions</p>
//               </div>
//             </div>
  
//             <div className="col-md-3 glow-border ms-md-5">
//               <div className="col-md-12">
//                 <center>
//                   <img src="images/operator.png" height={250} alt="our service info" />
//                 </center>
//                 <div className="col-md-12 d-flex justify-content-around">
//                   <p>tech solution Inc</p>
//                   <p>$7,000</p>
//                 </div>
//                 <h4 className="service-title">web development</h4>
//                 <p className="service-description">crafting tailor-made websites <br /> and web solutions</p>
//               </div>
//             </div>
  

//             <div className="col-md-3 glow-border ms-md-5 mt-md-5">
//               <div className="col-md-12">
//                 <center>
//                   <img src="images/operator.png" height={250} alt="our service info" />
//                 </center>
//                 <div className="col-md-12 d-flex justify-content-around">
//                   <p>tech solution Inc</p>
//                   <p>$7,000</p>
//                 </div>
//                 <h4 className="service-title">web development</h4>
//                 <p className="service-description">crafting tailor-made websites <br /> and web solutions</p>
//               </div>
//             </div>
  
//             <div className="col-md-3 glow-border ms-md-5 mt-md-5">
//               <div className="col-md-12">
//                 <center>
//                   <img src="images/operator.png" height={250} alt="our service info" />
//                 </center>
//                 <div className="col-md-12 d-flex justify-content-around">
//                   <p>tech solution Inc</p>
//                   <p>$7,000</p>
//                 </div>
//                 <h4 className="service-title">web development</h4>
//                 <p className="service-description">crafting tailor-made websites <br /> and web solutions</p>
//               </div>
//             </div>
  
//             <div className="col-md-3 glow-border ms-md-5 mt-md-5">
//               <div className="col-md-12">
//                 <center>
//                   <img src="images/operator.png" height={250} alt="our service info" />
//                 </center>
//                 <div className="col-md-12 d-flex justify-content-around">
//                   <p>tech solution Inc</p>
//                   <p>$7,000</p>
//                 </div>
//                 <h4 className="service-title">web development</h4>
//                 <p className="service-description">crafting tailor-made websites <br /> and web solutions</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </>
  



         
// //           {/* <div className='col-md-4'>
            
// //           </div>
// //           <div className='col-md-4'>
            
// //           </div> */}

// //           {/* <div className="card-img   col-md-4">
// //             <img src="images/operator.png"  alt="our services info" height={300} />

// //             <div className=''>
// //               <p>Provider</p>
// //               <p>Price</p>
// //             </div>
// //             <h2>services</h2>
// //             <p>description</p>
// //           </div> */}
// // {/*         
// //           <div className="card-details">
// //             <div className='grid'>
// //               <p>Provider</p>
// //               <p>Price</p>
// //             </div>
// //             <h2>services</h2>
// //             <p>description</p>
// //           </div> */}
//   )
//


import { useAuth } from "../store/auth"

export default function Services() {
  const {service} = useAuth()

  return(
    <section className="section-normal-service">
        <div className="container">
          <h1 style={{borderBottom:"4px double #2ecc71",borderRadius:"10px",fontSize:"3rem",width:"15%"}}>Services</h1>
        </div>

        <div className="container d-grid grid-three-cols">
        {service.map((curElem,index) => {
          const {price,description,provider,service} = curElem;

          return(
            <>
                    <div className="card" key={index}>
                          <div className="card-imag">
                              <img src="images/operator.png" width={200} alt="our service info" />
                          </div>

                          <div className="card-details">
                              <div className="grid grid-two-cols">
                                    <p>{provider}</p>
                                    <p>{price}</p>
                              </div>
                              <h2>{service}</h2>
                              <p>{description}</p>
                          </div>

                    </div>
            </>
          )
        })}
        </div>
       <div className="bg-zinc-200">
        jbckjb
       </div>
    </section>
    
  )
}
