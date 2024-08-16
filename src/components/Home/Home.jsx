import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [SearchBoxStatus, setSearchBoxStatus] = useState(false)
  const handleSerchBox = ()=> {
    setSearchBoxStatus(true)
    console.log(SearchBoxStatus)
  }
  const SearchBoxInvisible = (e)=> {
    if(SearchBoxStatus) {
      setSearchBoxStatus(prev=> !prev)
    }
  }
  return (
    <>
    
    <div  className={`overflow-scroll  searchBox ${SearchBoxStatus ? 'searchBoxVisible' : 'searchBoxInvisible'} bg-white`}>
    <div className=" h-full w-full box bg-white container-flued shadow-lg">
    <i onClick={SearchBoxInvisible} className="fa-solid fa-xmark closeicon"></i>
      <div className="row py-5 flex gap-5">
        <h3 className='fs-3 fw300 '>Find your Zolo, your way in <span className='fs33px fs33pxFormTitleText'>Delhi</span></h3>
      </div>
      {/* 2nd row  */}
      <div className="row h-[70px] flex gap-2 flex-nowrap">
        <div className="col-8 col-lg-3  h-full categaryCard rounded-lg flex items-center gap-2">
        <i className="ri-checkbox-circle-fill fs-3 "></i> <h4 className='fwnormal'>Coliving</h4>
        </div>
      </div>
      {/* row 3rd  */}
      <div className="row py-0 py-lg-2 py-lg-4">
        <h3 className='fs16px fwnormal mb-2 ps-0'>Where would you like to stay?</h3>
        <input  type="text" />
        <div className='flex gap-2 ps-0 pt-2 pt-lg-3'>
        <div className="btn bg-light recommindCityBtn rounded-sm bgPrimery">Sector 45</div>
          <div className="btn bg-light recommindCityBtn rounded-sm">Sector 45</div>
          <div className="btn bg-light recommindCityBtn rounded-sm">Greater noida</div>
        </div>
      </div>
      {/* row 4th  */}
      <div className="row py-4 ">
        <h3 className='fs16px fwnormal mb-2 ps-0'>Looking for a specific property?</h3>
        <input  type="text" />
      </div>
      {/* row fifth  */}
      <div className="row py-2 py-lg-4">
        <h3 className='fs16px fwnormal mb-2 ps-0'>Please share details below for us to help you better.</h3>
        <input className='my-2'  type="text" />
        <input className='my-2'  type="text" />
      <div className="mt-4 h-[57px] w-[201px] navBtn">Search</div>
      </div>
    </div>
   </div>
    <div onClick={SearchBoxInvisible} className='homeMain'>
    <div className='container-flued homeMain h-Auto '>
      {/* home  */}
      <div className="row h-[552px] pt-5 pt-lg-0 home">
        {/* Home left  */}
        <div className="col-12 col-lg-6 homeLeft flex items-center">
          <div className="box w-full mt-5 pt-5">
            <h1 className='text-capitalize fwnormal pt-0 mt-0'>Welocme to your second <span>Home</span></h1>
            <div className='homeAmenties mt-4'>
              <img src="/svgs/food.svg" alt="" /><h3 >Make your own food or take a subscription</h3>
            </div>
            <div className='inputWrapper mt-4 flex items-center ps-4'>
              <p onClick={handleSerchBox} className='cursor-pointer placeholderText'>Find a Zolo near your place of Work/Study</p>
              <div>
                <div  className='flex items-center gap-3 gap-lg-4 m-0'>
                <i onClick={handleSerchBox} className="cursor-pointer ri-search-line primaryColor fs-4"></i>
                <div className="button  w-[152px] h-[92px]"><i className="ri-focus-3-line fs-4 text-white me-2"></i> <p className='d-none d-lg-inline text-white'>Near me</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Home rihgt  */}
        <div className="col-12 col-lg-6 homeRight d-none d-lg-flex justify-end ">
          <div className=' '>
          <img className='w-[696px] mt-5 ' src="\Herosectiononeimages\Homemainimg.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* prasence  */}
      <div className="row h-[204px] mt-4 mt-lg-5 h-Auto prasence">
        <div className="row justify-center gap-3 gap-lg-5 prasenceRow ps-5 ps-lg-0">
          {/* delhi card  */}
      <Link to={'/delhi'} className="WrapperDiv p-0 ms-5 ms-lg-0 cursor-pointer">
      <div className='hoverMain w-auto flex flex-wrap flex-col '>
          <div className='first flex justify-center'>
            <img className='h-[80%] w-[80%] object-contain' src="/cityimages\citypng\delhi.svg" alt="" />
          </div>
          <div className='second flex justify-center'>
          <img className='h-[100%] w-[100%] object-cover' src="/cityimages\cityimage\Delhi.png" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard'>Delhi</h4>
      </Link>
      <Link to={'/delhi'} className="WrapperDiv p-0 d-block d-lg-none  cursor-pointer">
      <div className='hoverMain w-auto flex flex-wrap flex-col '>
          <div className='first flex justify-center'>
            <img className='h-[80%] w-[80%] object-contain' src="/cityimages\citypng\delhi.svg" alt="" />
          </div>
          <div className='second flex justify-center'>
          <img className='h-[100%] w-[100%] object-cover' src="/cityimages\cityimage\Delhi.png" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard'>Delhi</h4>
      </Link>
      <Link to={'/delhi'} className="WrapperDiv p-0 d-block d-lg-none  cursor-pointer">
      <div className='hoverMain w-auto flex flex-wrap flex-col '>
          <div className='first flex justify-center'>
            <img className='h-[80%] w-[80%] object-contain' src="/cityimages\citypng\delhi.svg" alt="" />
          </div>
          <div className='second flex justify-center'>
          <img className='h-[100%] w-[100%] object-cover' src="/cityimages\cityimage\Delhi.png" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard'>Delhi</h4>
      </Link>
      {/* noida card  */}
      <Link to={'/noida'} className="WrapperDiv p-0 cursor-pointer">
      <div className='hoverMain w-auto flex flex-wrap flex-col '>
          <div className='first flex justify-center'>
            <img className='h-[80%] w-[80%] object-contain' src="\cityimages\citypng\noida.svg" alt="" />
          </div>
          <div className='second flex justify-center'>
          <img className='h-[100%] w-[100%] object-cover' src="\cityimages\cityimage\Noida.png" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard'>Noida</h4>
      </Link>
      {/* Gurugram  */}
      <div className="WrapperDiv p-0 cursor-pointer">
      <div className='hoverMain w-auto flex flex-wrap flex-col '>
          <div className='first flex justify-center'>
            <img className='h-[80%] w-[80%] object-contain' src="\cityimages\citypng\gurugram.svg" alt="" />
          </div>
          <div className='second flex justify-center'>
          <img className='h-[100%] w-[100%] object-cover' src="\cityimages\cityimage\Gurugram.png" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard cityNameofCardguru'>Gurugram</h4>
      </div>
      {/* ghaziabad  */}
      <div className="WrapperDiv p-0 cursor-pointer">
      <div className='hoverMain w-auto flex flex-wrap flex-col '>
          <div className='first flex justify-center'>
            <img className='h-[80%] w-[80%] object-contain' src="/cityimages\citypng\ghaziabad.svg" alt="" />
          </div>
          <div className='second flex justify-center'>
          <img className='h-[100%] w-[100%] object-cover' src="\cityimages\cityimage\ghaziabad.jpg" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard cityNameofCardguru'>Ghaziabad</h4>
      </div>
        {/* greater noida  */}
        <div className="WrapperDiv p-0 cursor-pointer">
      <div className='hoverMain w-auto flex flex-wrap flex-col '>
          <div className='first flex justify-center'>
            <img className='h-[80%] w-[80%] object-contain' src="\cityimages\citypng\greaternoida.svg" alt="" />
          </div>
          <div className='second flex justify-center'>
          <img className='h-[100%] w-[100%] object-cover' src="\cityimages\cityimage\greaternoida.jpg" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard cityNameofgreaternoida'>Greater noida</h4>
      </div>
        </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default Home