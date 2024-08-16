import React from 'react'

function SectionOne() {
  return (
    <div className='container-flued   my-5 d-none d-lg-block'>
      <div className="row h-[403px] h-Auto">
        {/* sectionone left  */}
        <div className="col-12 col-lg-6 sectionOneleft">
          <div className="herosectioncard">
           <div className='p-3 pt-5'>
           <h1 className='fw-light-extra mt-3'>FIND</h1>
           <h3 className=''>EASY</h3>
           </div>
          </div>
          <img className='heroOneimg' src="\Herosectiononeimages\sectionone.png" alt="" />
        </div>
        {/* sectionone rihgt  */}
        <div className="col-12 col-lg-6 sectionOneRight ps-5">
          <div className="flex w-full justify-center pt-5">
            <h5 className='mt-5 ms-5 ps-5'>Easy on the pocket, <span>Easy on the mind.</span></h5>
          </div>
          <div className="row py-4 ps-5 ms-5">
            <div className="col-3  ms-4 pofsectionsptag"><p>Fully Furnished <br />
            </p></div>
            <div className="col-4  ps-5 pofsectionsptag"><p className='ms-4'>Loaded <br />
            Amenities</p></div>
            <div className="col-4  pofsectionsptag"><p>App Based <br />
            Search</p></div>
            <div className="col-4 ms-4  pofsectionsptag justify-start"><p>WhatsApp <br />
            Video Tour</p></div>
            <div className="col-5  ps-2 pofsectionsptag"><p>Zero Brokerage <br />
            One Month Deposit</p></div>
            
          </div>
        </div>
      </div> 
      <div className="row h-[403px]">
        {/* sectionone left  */}
        <div className="col-12 col-lg-6 sectionOneRight ps-5">
          <div className="flex w-full justify-center pt-5">
            <h5 className='mt-5'>Easy on the pocket, <span>Easy on the mind.</span></h5>
          </div>
          <div className="row py-4 ps-5 ms-5">
            <div className="col-3 p-3 ms-4"><p>Fully Furnished <br />
            Homes</p></div>
            <div className="col-4 p-3 ps-5"><p className='ms-4'>Loaded <br />
            Amenities</p></div>
            <div className="col-4 p-3"><p>App Based <br />
            Search</p></div>
            <div className="col-4 ms-4 p-3"><p>WhatsApp <br />
            Video Tour</p></div>
            <div className="col-5 p-3 ps-2"><p>Zero Brokerage <br />
            One Month Deposit</p></div>
            
          </div>
        </div>
        {/* sectionone rihgt  */}
        <div className="col-12 col-lg-6 sectionOneleft sectiontwo flex justify-end">
          <div className="herosectioncard">
           <div className='p-3 pt-5'>
           <h1 className='fw-light-extra mt-3'>STAY</h1>
           <h3 className=''>EASY</h3>
           </div>
          </div>
          <img className='heroOneimg secondImg' src="\Herosectiononeimages\sectiontwo.png" alt="" />
        </div>
      </div> 
      <div className="row h-[403px]">
        {/* sectionone left  */}
        <div className="col-12 col-lg-6 sectionOneleft sectionThird">
          <div style={{backgroundColor : `#BAD8DA`}} className="herosectioncard">
           <div className='p-3 pt-5'>
           <h1 className='fw-light-extra mt-3'>BOND</h1>
           <h3 className=''>EASY</h3>
           </div>
          </div>
          <img className='heroOneimg thirdImg' src="\Herosectiononeimages\sectionthird.png" alt="" />
        </div>
        {/* sectionone rihgt  */}
        <div className="col-12 col-lg-6 sectionOneRight ps-5">
          <div className="flex w-full justify-center pt-5">
            <h5 className='mt-5 ms-5'>Easy on the pocket, <span>Easy on <br /> the mind.</span></h5>
          </div>
          <div className="row py-4 ps-5 ms-5">
            <div className="col-3 p-3 ms-4"><p>Fully Furnished <br />
            Homes</p></div>
            <div className="col-4 p-3 ps-5"><p className='ms-4'>Loaded <br />
            Amenities</p></div>
            <div className="col-4 p-3"><p>App Based <br />
            Search</p></div>
            <div className="col-4 ms-4 p-3"><p>WhatsApp <br />
            Video Tour</p></div>
            <div className="col-5 p-3 ps-2"><p>Zero Brokerage <br />
            One Month Deposit</p></div>
            
          </div>
        </div>
      </div> 
    </div>
  )
}

export default SectionOne