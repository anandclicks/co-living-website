import React from 'react'

function SectionOne() {
  return (
    <div className='container-flued   my-5 d-none d-lg-block'>
      <div className="row h-[403px] h-Auto">
        {/* sectionone left  */}
        <div className="col-12 col-lg-6 sectionOneleft">
          <div className="herosectioncard">
         
          </div>
          <img className='heroOneimg  h-[100%]' src="\Herosectiononeimages\sectionone.png" alt="" />
        </div>
        {/* sectionone rihgt  */}
        <div className="col-12 col-lg-6 sectionOneRight ps-5">
          <div className="flex w-full justify-center pt-5 flex-col items-center">
            <h5 className='mt-5 fs-5 ms-5 ps-5 text-capitalize'>Enjoy a warm and welcoming community where you <span>feel right at home from day one</span></h5>
            <div className='p-3 pt-5'>
           <h1 className='fw-light-extra mt-3'>Friendly </h1>
           <h3 className='text-uppercase'>Environment</h3>
           </div>
          </div>
         
        </div>
      </div> 
      <div className="row h-[403px]"> 
        {/* sectionone left  */}
        <div className="col-12 col-lg-6 sectionOneRight ps-0">
          <div className="flex w-full justify-center pt-5 flex-col  items-center">
            <h5 className='mt-5 fs-5'>Skip the paperwork and extra costs—our services are 
            <span>straightforward with no hidden fees.</span></h5>
            <div className='p-3 pt-5'>
           <h1 className='fw-light-extra mt-3text-uppercase text-center'>Hassle-Free </h1>
           <h3 className='text-uppercase text-center'>Brokerage</h3>
           </div>
          </div>
         
        </div>
        {/* sectionone rihgt  */}
        <div className="col-12 col-lg-6 sectionOneleft sectiontwo flex justify-end">
          <div className="herosectioncard">
           
          </div>
          <img className='heroOneimg secondImg h-[100%]' src="\Herosectiononeimages\sectiontwo.png" alt="" />
        </div>
      </div> 
      <div className="row h-[403px]">
        {/* sectionone left  */}
        <div className="col-12 col-lg-6 sectionOneleft sectionThird">
          <div style={{backgroundColor : `#BAD8DA`}} className="herosectioncard">
           
          </div>
          <img className='heroOneimg thirdImg  h-[100%]' src="\Herosectiononeimages\sectionthird.png" alt="" />
        </div>
        {/* sectionone rihgt  */}
        <div className="col-12 col-lg-6 sectionOneRight ps-5">
          <div className="flex w-full justify-center pt-5 flex-col items-center">
            <h5 className='ps-5 fs-5 ms-5 text-center'>Relish well-prepared meals and comfortable living spaces, all designed to enhance <span>Easy on <br /> your daily life.</span></h5>
            <div className='p-3 pt-5'>
           <h1 className='fw-light-extra mt-3text-uppercase text-center'>Brokerage</h1>
           <h3 className='text-uppercase text-center'> Accommodation</h3>
           </div>
          </div>
         
        </div>
      </div> 
    </div>
  )
}

export default SectionOne