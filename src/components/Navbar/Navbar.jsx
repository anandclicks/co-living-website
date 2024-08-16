import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  
  return (
    <div className='container-flued h-[105px]'>
      <div className="row h-full items-end">
        {/* nav left  */}
        <div className="col-12 col-md-10 col-lg-3  NavLeft flex">
        <i className="ri-menu-3-line fs-1 fw-bold d-flex d-lg-none "></i>

         <img className='logo' src="/logo/OtoStaysDarkLogo.png" alt="Oto stays" />
          <i className="ri-login-box-line fs-1 fw-bold span d-flex d-lg-none "></i>
        </div>
        {/* nav right  */}
        <div className="col-6 d-none col-md-2 d-lg-flex  col-lg-9 NavRigth flex items-center justify-end">
         <div className='flex items-center gap-5'>
         <ul className='flex links text-uppercase'>
            <li>explore pg</li>
            <li>list your property</li>
            <li><i className="fa-solid fa-phone me-1"></i>+91 7415051778</li>
            <li><i className="fa-solid fa-envelope me-1"></i>info@otostays.com</li>
          </ul>
          <div className="navBtn">
          SIGN IN
         </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar