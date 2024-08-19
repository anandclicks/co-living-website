import React,{useEffect} from 'react'


import { Link } from 'react-router-dom'
function Footer() {

 
  return (
    <div className='h-[85vh] footer flex items-center'>
      
      <footer className='w-full text-white primeryBgps-0'>
            <div className="container h-100 ps-0">
              <div className="row  h-100 text-blackps-0">
                  <div className="col-lg-3  text-black ">
                      <div className="content-box">
                       <div className='w-full flex justify-center justify-content-lg-start'>
                       <img className='flogo w-[150px] m-3 ms-0 h-auto' src="\logo\OtoStaysDarkLogo.png" alt="oto"/>
                       </div>
                          <p className='mt-4`'>
                              You know, when we go out of our home to the city in search of studies and jobs, we get everything very easily but we do not get a happy home.
                          </p>
                          <p>Follow us at</p>
                          <div className="d-flex gap-4 p24px mt-5">
                              <a className='text-decotation-none text-black ' href="https://www.facebook.com/OTOstays" target='_blank'><i className="fa-brands fa-facebook fs-3"></i></a>
                              <a className='text-decotation-none text-black ' href="https://www.instagram.com/otostays6" target='_blank'><i className="fa-brands fa-square-instagram fs-3"></i></a>
                              <a className='text-decotation-none text-black ' href="https://www.linkedin.com/company/otostays/" target='_blank'><i className="fa-brands fa-twitter fs-3"></i></a>
                              <a className='text-decotation-none text-black ' href="https://x.com/OtoStays"><i className="fa-brands fa-linkedin fs-3" target='_blank'></i></a>
                              
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3  pt-4 flex justify-start justify-lg-center ">
                      <div className="contact-info text-black">
                          <h5 className='fw-bold p24px'>Useful Links</h5>
                          <ul className="list-unstyled d-flex flex-column mt-2 ">
                              <li className="text-black"><i className="ri-arrow-right-line"></i> Home</li>
                              <li className="text-black"><i className="ri-arrow-right-line"></i> About Us</li>
                              <li className="text-black"><i className="ri-arrow-right-line"></i> Blog</li>
                              <li className="text-black"><i className="ri-arrow-right-line"></i>All PG'S for you</li>
                              <li className="text-black"><i className="ri-arrow-right-line"></i> User Policy</li>
                            
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-3  pt-4">
                    <h5 className='p24px fw-bold text-black pb-3'>Explore PG</h5>
                    <ul className='flex flex-col'>
                      <li className='text-black'>PG In Delhi</li>
                      <li className='text-black'>PG In Noida</li>
                      <li className='text-black'>PG In Gurugram</li>
                      <li className='text-black'>PG In Ghaziabad</li>
                      <li className='text-black'>PG In Greater Noida</li>
                    </ul>
                  </div>
                  <div className="col-lg-3  pt-3">
                    <h5 className='fw-bold p24px text-black'>Contact Information</h5>
                    <div className="d-flex gap-2 align-items-center my-3">
                      <i className="fa-solid fa-map fs-2 text-black"></i>
                      <p className='text-black'><strong className='text-black'>Address</strong><br/>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, aliquid!
                    </p>
                    </div>
                   <div className="d-flex gap-2 align-items-center my-3 text-black">
                    <i className="fa-solid fa-phone fs-2 text-black"></i>
                    <p className='text-black'><strong className='text-black'>Phone Number</strong><br/>
                      +91 7415051778

                  </p>
                   </div>
                   <div className="d-flex gap-2 align-items-center my-3 text-black">
                    <i className="fa-solid fa-envelope fs-2 text-black"></i>
                     <p className='text-black'><strong className='text-black'>Email Address</strong><br/>
                     info@otostays.com
                     </p>
                   </div>
                  </div>
              </div>
          </div>
           </footer>
   
    </div>
  )
}

export default Footer