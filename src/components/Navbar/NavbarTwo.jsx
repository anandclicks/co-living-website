import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NavbarTwo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container-flued mb-2 row h-[100px] bg-white shadow-sm items-center position-reletive z-40'>
      <div className="col-2">
       <Link to={'/'}> <img className='w-[98px] object-cover' src="\logo\OtoStaysDarkLogo.png" alt="" /></Link>
      </div>
      <div className="col-10 col-lg-8 flex items-center justify-center">
        <div className="box flex gap-2 justify-between items-center ultraLightBorder py-2 px-3 col-8">
      <div className='flex items-center gap-2'>
      <i className="fa-solid fa-location-dot fs-4"></i>
      <h3 className='fs16px flex gap-2 navtwoplaceholder'>Where do you want to stay? <p className='text-light-50 d-none '>Search for Oto's, Cities, Offices, Locations...</p></h3>
      </div>
        <i className="fa-solid fa-magnifying-glass bgPrimery text-white p-2 rounded-sm"></i>
        </div>
      </div>
      <div className="col-2 flex items-center justify-end d-none d-lg-flex">
        <button className='loginSignupbtn loginSignupbtntwo text-uppercase fwnormal'>Login/Signup</button>
      </div>
    </div>
  )
}

export default NavbarTwo