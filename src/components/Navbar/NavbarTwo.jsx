import React from 'react'

function NavbarTwo() {
  return (
    <div className='container-flued mb-2 row h-[100px] bg-white shadow-sm items-center position-reletive z-40'>
      <div className="col-2">
        <img className='w-[98px] object-cover' src="\logo\OtoStaysDarkLogo.png" alt="" />
      </div>
      <div className="col-8 flex items-center justify-center">
        <div className="box flex gap-2 justify-between items-center ultraLightBorder py-2 px-3 col-8">
      <div className='flex items-center gap-2'>
      <i className="fa-solid fa-location-dot fs-4"></i>
      <h3 className='fs16px flex gap-2'>Where do you want to stay? <p className='text-light-50'>Search for Oto's, Cities, Offices, Locations...</p></h3>
      </div>
        <i className="fa-solid fa-magnifying-glass bgPrimery text-white p-2 rounded-sm"></i>
        </div>
      </div>
      <div className="col-2 flex items-center justify-end">
        <button className='loginSignupbtn text-uppercase fwnormal'>Login/Signup</button>
      </div>
    </div>
  )
}

export default NavbarTwo