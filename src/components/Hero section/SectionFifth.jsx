import React from 'react'

function SectionFifth() {
  return (
    <div className='container-flued h-[705px] my-5 fifthSectionMain'>
      <img className='fifthSectionImg' src="\Herosectiononeimages\book-now-men.webp" alt="" />
     <div className="fifthSection row">
      <div className="col-12 col-lg-6 fithLeft flex items-center ps-5">
      <div className="box ms-5">
      <h2 className='fs49px'>Install The App for</h2>
      <span className='fs49px '>Personalised Offers!</span>
      <div className="box flex gap-5 mt-5">
        <img  className='w-52 qrcode' src="\Herosectiononeimages\fakequ2.jpg" alt="" />
        <div className='mt-3'>
          <h2 className='fs27px'>Scan the QR <br />
          to install the app!</h2>
          <p className='fs20px mt-4'>Or Click to Download the</p>
          <div className='flex items-center gap-3'>
          <span className='fs33px '>OTO App</span>
          <div className='flex gap-3'>
          <i className="fa-brands fa-apple fs33px "></i>
          <i className="fa-brands fa-google-play fs33px "></i>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="col-12 col-lg-6 fifthRight"></div>
     </div>
    </div>
  
  )
}

export default SectionFifth