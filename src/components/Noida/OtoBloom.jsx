import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
function OtoBloom() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [imageindex, setimageindex] = useState(6)
  const nextIndex = ()=> {
    if(imageindex >= 9) {
      setimageindex(1)
    }
    else {
    setimageindex(imageindex + 1)
  }
  }
  const prevIndex = ()=> {
    if(imageindex <= 1) {
      setimageindex(9)
    }
    else {
    setimageindex(imageindex - 1)
  }
  } 
  return (
    <Link to={'/noida/otobloom'} className="pgCard rounded-xl overflow-hidden">
            {/* img  */}
          <div className='imges'>
          <img  className="img h-[310px] w-full object-cover" src={`/Allcitiesindividualpgs/otobloomsec45/${imageindex}.jpg`}/>
          {/* image controller icons  */}
          <div className='w-full flex justify-between imageCtril'>
              <i onClick={prevIndex} className="ri-arrow-left-s-line fs-4 prev "></i>
              <i onClick={nextIndex} className="ri-arrow-right-s-line fs-4 next "></i>
          </div>
          </div>
          {/* pg name  */}
          <div className="title p-2 pt-3 h-[87px]">
            <h2 className='fs20pxb text-black'>Oto Bloom</h2>
            <p><span>Oto Bloom</span> in Sector 45</p>
          </div>
          <hr />
          {/* pricing  */}
          <div className="pricing flex justify-center row items-center h-[82px]">
            <div className='col-5'>
              <small className=''>Starts at</small>
              <h2 className='fs17px text-black fwnormal'>₹7,000</h2>
            </div>
            <div style={{backgroundColor : `#DDF6FF`}} className="div flex gap-1 col-5 items-center">
              <img className='w-5 py-2' src="\svgs\offer.svg" alt="" /><small>Up to 10% OFF</small>
            </div>
          </div>
          </Link>
  )
}

export default OtoBloom