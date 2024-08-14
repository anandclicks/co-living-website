import React from 'react'

function Footer() {
  return (
    <div className=' h-[80vh] flex items-center container-flued footer pt-3 pt-lg-0'>
      <div className="row h-[100%] w-full">
        <div className="col-12 col-lg-4 footerFirstPart">
          <img  className='w-[200px] object-contain footerLogo' src="\logo\OtoStaysDarkLogo.png" alt="" />
          <div className="box py-5 mt-0 mt-lg-5">
            <h5 className='fwnormal fs27px  mb-lg-3 mb-2'>Corporate Office</h5>
            <p className='fs20px'>Nearby Radha public school
            Nearby - Esi hospital Sector 22 Noida</p>
          </div>
        </div>
        <hr />
        <div className="col-12 col-lg-4 flex justify-center footerLink">
          <ul className='list-unstyled flex flex-col gap-1 gap-lg-2'>
          <h6 className='fs27px fwnormal'>Company Information</h6>
            <li className='mt-2 mt-lg-4 fs20px'>Home</li>
            <li className='fs20px'>About</li>
            <li className='fs20px'>Servies</li>
            <li className='fs20px'>List property</li>
            <li className='fs20px'>Book PG</li>
            <li className='fs20px'>Contact us</li>
          </ul>
        </div>
        <div className="col-12 col-lg-4"></div>
      </div>
      
    </div>
  )
}

export default Footer