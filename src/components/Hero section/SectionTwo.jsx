import React from 'react'

function SectionTwo() {
  return (
   <div className="container-flued h-[280px] flex items-end mb-5 h-Auto">
     <div className='row sectiionTwo w-full'>
      <div className="col-12 ">
        <h1 className='text-center fw300 bannerText fs54px'>We are India’s Most Celebrated <span>Coliving</span> Spaces</h1>
      </div>
      <div className="col-12 row justify-center bannerData pt-4 gap-4 gap-lg-0">
        <div className="col-3 flex flex-col customerCard  justify-center">
          <h1 className='fs54px span'>50k+</h1>
          <p><p className=' d-none d-lg-inline'>Delighted </p>Customers</p>
        </div>
        <div className="col-3 flex flex-col customerCard items-center justify-center ps-5 ps-lg-0">
          <h1 className='fs54px span'>450+</h1>
          <p><p className=' d-none d-lg-inline'>Oto </p> Habitats</p>
        </div>
        <div className="col-3 flex flex-col customerCard items-end justify-center ms-3 ps-lg-0">
          <h1 className='fs54px span'>10+</h1>
          <p>Cities<p className=' d-none d-lg-inline'>& continuing </p></p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default SectionTwo