import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  // mobile menu 
  const [menuStatus, setmenuStatus] = useState(false)
  const handleMenu = ()=> {
    setmenuStatus(prev => !prev)
    if(menuStatus) {
      document.querySelector("body").style.overflow = "auto";
    }
    else {
      document.querySelector("body").style.overflow = "hidden";
    }
  }
  // add property form
  const [propertyForm, setpropertyForm] = useState(false)
  const propertyFormHandle = ()=> {
    setpropertyForm(prev => !prev)
  }
  return (
    <div className='container-flued h-[105px] navMain'>
      {/* bobile menu  */}
     <div class={`navbar-menu flex-column shadow-xl ${menuStatus ? 'navbar-menu-visible' : 'navbar-menu-invisible'}`} id="navbarMenu">
    
         <h2><span class="highlight">Follow</span> us on</h2>
        <div class="d-flex gap-4 fs-3">
          <a class="text-decoration-none text-white" href="https://www.facebook.com/OTOstays"><i class="fa-brands fa-facebook"></i></a>
          <a class="text-decoration-none text-white" href="https://www.instagram.com/otostays6"><i class="fa-brands fa-square-instagram"></i></a>
          <a class="text-decoration-none text-white" href="https://x.com/OtoStays"><i class="fa-brands fa-twitter"></i></a>
          <a class="text-decoration-none text-white" href="https://www.linkedin.com/company/otostays/"><i class="fa-brands fa-linkedin"></i></a>
      </div>
      <div class="d-flex gap-2">
        <a href="/noida" class="btn btnOne px-4 rounded-0 mt-4 py-2 text-white bgPrimery">See All PG's <i class="text-white ri-arrow-right-up-line"></i></a>
        <button onClick={propertyFormHandle} class="btn btnOne bg-black px-4 rounded-0 mt-4 py-2 text-white addProperty">List property <i class="text-white ri-add-circle-fill"></i></button>
      </div>
    </div>
    {/* add property  */}
    <div class={`col-12  h-100 position-fixed addPropertyMain  bg-white shadow-lg d-flex flex-col p-3 justify-content-center align-items-center ${propertyForm ? 'PrpertyFormVisible' : 'PrpertyFormInVisible'}`}>
    <i onClick={propertyFormHandle} class="ri-close-large-line position-absolute end-0 top-0 m-3 m-lg-5 cursur fs-3 fw-bold closeAddPropertyForm"></i>
      <h2 class="text-center fs-4 text-black fwnormal m-3">Add <span>property</span></h2>
      <form className='addPropertyForm' action="">
        <div class="form-group">
          <input type="text" class="form-control py-3" placeholder="Name*" required/>
        </div>
        <div class="form-group">
          <input type="text" class="form-control py-3" placeholder="Mobile number*" required/>
        </div>
        <div class="form-group">
          <input class="form-control py-3" placeholder="Property location" type="text" name="" id=""/>
        </div>
        <div class="form-group">
          <input class="form-control py-3" type="number" placeholder="Number of bed*" name="" id=""/>
        </div>
        <div class="form-group">
          <input class="form-control py-3" type="file" placeholder="Attach property images*" name="" id=""/>
        </div>
        <button type="submit" class="btn btn-primary btn-block py-2 px-5 w-100">Submit</button>
      <p class="mt-3 text-center">Need Assistance? Call at <a class="text-decoration-none text-dark" href="tel:+91 9599050903">+91 7415051778</a></p>
      </form>
      </div>




        {/* nav left  */}
      <div className="row h-full items-end">
        <div className="col-12 col-md-10 col-lg-3  NavLeft flex">
        <i onClick={handleMenu} className="ri-menu-3-line fs-1 fw-bold d-flex d-lg-none "></i>
         <img className='logo ms-5 ms-lg-0' src="/logo/OtoStaysDarkLogo.png" alt="Oto stays" />
          <img className='h-[35px] object-contain ps-5 d-flex d-lg-none' src="/logo/login.png" alt="" />
        </div>
        {/* nav right  */}
        <div className="col-6 d-none col-md-2 d-lg-flex  col-lg-9 NavRigth flex items-center justify-end">
         <div className='flex items-center gap-5'>
         <ul className='flex links text-uppercase'>
            <Link className='navLinks' to={'/noida'}>explore pg</Link>
            <Link className='navLinks' onClick={propertyFormHandle}>list your property</Link>
            <Link className='navLinks'><i className="fa-solid fa-phone me-1"></i>+91 7415051778</Link>
            <Link className='navLinks'><i className="fa-solid fa-envelope me-1"></i>info@otostays.com</Link>
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