import React from 'react'
import { Link } from 'react-router-dom'

function Pgsuggestion() {
  return (
    <div className='container-flued '>
       <h2 className='fs-2 py-4'>Explore Other <span className='primeryColor'>PG</span></h2>
       <div className="overflow-scroll pgScrolling">
      <div className="row  flex-nowrap overscroll-scroll">
      <Link to={'/noida/otoroyalwin'} className="col-md-3 col-12 mb-4 cursor-pointer Pgcard">
          <div className="cardimg">
            <div className='cardImg'>
            <img src="\Allcitiesindividualpgs\otoroyalwinsec104\8.jpg" className="card-img-top h-full w-full object-cover" alt="Zolo Tucana" />
            </div>
            <div className="card-body rounded-xl overflow-hidden shadow-xl p-3">
             <div className='border-b py-2'>
             <h5 className="card-title fwnormal fs-5">Oto Royal Win Sec104</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
             </div>
              <div className='flex justify-between p-2'>
              <p>
              <p className="card-text fw-light"><strong>Starts at ₹9,154</strong></p>
              <p className="card-text text-info">UPTO 20% OFF</p>
              </p>
              <div className="btn bgPrimery text-white  border-none flex items-center w-28">Book now</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/noida/otobloom'} className="col-md-3 col-12 mb-4 cursor-pointer Pgcard">
          <div className="cardimg">
            <div className='cardImg'>
            <img src="\Allcitiesindividualpgs\otobloomsec45\5.jpg" className="card-img-top h-full w-full object-cover" alt="Zolo Tucana" />
            </div>
            <div className="card-body rounded-xl overflow-hidden shadow-xl p-3">
             <div className='border-b py-2'>
             <h5 className="card-title fwnormal fs-5">Oto Bloom Sec45</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
             </div>
              <div className='flex justify-between p-2'>
              <p>
              <p className="card-text fw-light"><strong>Starts at ₹7,154</strong></p>
              <p className="card-text text-info">UPTO 10% OFF</p>
              </p>
              <div className="btn bgPrimery text-white  border-none flex items-center w-28">Book now</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/noida/otoroyaltown'} className="col-md-3 col-12 mb-4 cursor-pointer Pgcard">
          <div className="cardimg">
            <div className='cardImg'>
            <img src="\Allcitiesindividualpgs\otoroyaltownsec45\2.jpg" className="card-img-top h-full w-full object-cover" alt="Zolo Tucana" />
            </div>
            <div className="card-body rounded-xl overflow-hidden shadow-xl p-3">
             <div className='border-b py-2'>
             <h5 className="card-title fwnormal fs-5">Oto Royal Town Sec45</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
             </div>
              <div className='flex justify-between p-2'>
              <p>
              <p className="card-text fw-light"><strong>Starts at ₹4,154</strong></p>
              <p className="card-text text-info">UPTO 18% OFF</p>
              </p>
              <div className="btn bgPrimery text-white  border-none flex items-center w-28">Book now</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/noida/otocapital'} className="col-md-3 col-12 mb-4 cursor-pointer Pgcard">
          <div className="cardimg">
            <div className='cardImg'>
            <img src="\Allcitiesindividualpgs\otocapitalsec44\7.jpg" className="card-img-top h-full w-full object-cover" alt="Zolo Tucana" />
            </div>
            <div className="card-body rounded-xl overflow-hidden shadow-xl p-3">
             <div className='border-b py-2'>
             <h5 className="card-title fwnormal fs-5">Oto Capital Sec44</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
             </div>
              <div className='flex justify-between p-2'>
              <p>
              <p className="card-text fw-light"><strong>Starts at ₹6,154</strong></p>
              <p className="card-text text-info">UPTO 15% OFF</p>
              </p>
              <div className="btn bgPrimery text-white  border-none flex items-center w-28">Book now</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/noida'} className="col-md-3 col-12 mb-4 cursor-pointer Pgcard flex justify-center items-center d-flex d-lg-none">
         <h2 className='bgPrimery p-3 text-white rounded-lg'>Explore more <i class="fa-solid fa-magnifying-glass text-white"></i>  </h2>
        </Link>
      </div>
       </div>
    </div>
  )
}

export default Pgsuggestion