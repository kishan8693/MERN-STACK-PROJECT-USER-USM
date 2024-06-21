import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div className='continer'>
          <br /><br />
          <div className='row justify-content-center'>
            <div className='col-md-2'></div>
              {/* right side div content */}
              <div className="right-div col-md-4 ">
                    <p>We are the best IT company</p>
                    <h1>Welcome to Krishna Technical</h1>
                    <span>
                      are you ready to make your business to the next level with cutting-edge
                      IT solutions. Look no further! At Thapa Technical. we specialize in 
                      providing innovative IT services and solutions tollared to meet your uniqe needs.
                    </span>
                    <div className='d-flex gap-4 mt-md-4'>
                      <Link to="/contact">
                    <button className='btn btn-primary text-ligh rounded-3'>Connect Now</button></Link>
                    <Link to="/services">
                    <button className="btn border border-2 border-primary rounded-3 text-light">Learn More</button>
                    </Link>
                    </div>
              </div>

              {/* left side div image */}
              <div className='home-image col-md-6 col-6'>
                <img src="images/operator.png"  height={400} width={450} style={{marginTop:"-55px"}} alt="" />
              </div>


          </div>

        </div>

        {/* second section */}

        <section className='section-analytics'>
            <div className='container bg-light grid grid-four-cols'>
            
              <div className='mydiv1'>
                <h2>50+</h2>
                <p>registered companies</p>
              </div>

              <div className='mydiv1'>
                <h2>100,00+</h2>
                <p className=''>Happy Client</p>
              </div>

              <div className='mydiv1'>
                <h2>500+</h2>
                <p>Well known developers</p>
              </div>

              <div className='mydiv1'>
                <h2>24/7</h2>
                <p>service</p>
              </div>
              </div>
          
        </section>


        {/* third section */}
        <div className='continer' style={{marginTop:"-70px"}}>
          <div className='row justify-content-center'>
             {/* left side div image */}
             <div className='home-image col-md-4 col-6'>
                <img src="images/operator.png"  height={400} width={450} style={{marginTop:"-55px"}} alt="" />
              </div>


               {/* right side div content */}
               <div className="right-div col-md-4 ">
                    <p>We are the best IT company</p>
                    <h1>Welcome to Krishna Technical</h1>
                    <span>
                      are you ready to make your business to the next level with cutting-edge
                      IT solutions. Look no further! At Thapa Technical. we specialize in 
                      providing innovative IT services and solutions tollared to meet your uniqe needs.
                    </span>
                    <div className='d-flex gap-4 mt-md-4'>
                      <Link to="/contact">
                    <button className='btn btn-primary text-ligh rounded-3'>Connect Now</button>
                    </Link>
                    <Link to="/services">
                    <button className="btn border border-2 border-primary rounded-3 text-light">Learn More</button>
                    </Link>
                    </div>
              </div>
              </div>

</div>
<br /><br />
    </>
  )
}
