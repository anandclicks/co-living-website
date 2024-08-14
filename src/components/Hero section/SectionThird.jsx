import React from 'react'

function SectionThird() {
  return (
    <div className='container-flued h-[685px] my-5 thirdSection'>
      <div></div>
      <img className='sectionThirdImg w-[610px] object-cover' src="/Herosectiononeimages/making memories.webp" alt="" />
      <div className='thirdSectionShape h-full w-full rounded-xl overflow-hidden'>
      <div className="row h-full">
        <div className="col-12 col-lg-6">
        </div>
        <div className="col-12 col-lg-6 flex items-center sectionThirdImgRight ">
          <div className="box">
            <p className='text-5xl '>Let’s make some</p>
            <h1 className='primaryColor fw300'>Memories!</h1>
            <button className='d-none d-lg-flex'>To-Tales</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SectionThird