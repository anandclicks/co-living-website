import React, { useEffect, useState } from 'react'
import NavbarTwo from '../Navbar/NavbarTwo'
import OtoBloom from './OtoBloom'
import OtoCapital from './OtoCapital'
import OtoroRaltown from './OtoroRaltown'
import OtoRoyalWin from './OtoRoyalWin'
import OtoScoutHouse from './OtoScoutHouse'
import OtoExpRessway from './OtoExpRessway'
import OtoOmegaTownship from './OtoOmegaTownship'
import OtoExpoPremium from './OtoExpoPremium'
import { Link } from 'react-router-dom'
function Noida() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavbarTwo/>
    <div className='container-flued  delhi row '>
      {/* <div className="col-12 col-lg-3 dlhiPageLeft h-full"></div> */}
      <div className="col-12 col-lg-12 bg-white dlhiPageRight h-full px-1 px-lg-4">
        {/* 1st part  */}
        <div className=" container ">
          <div className="col-12 py-4 pb-2">
            <small><span><Link to={'/'}>Home</Link><i className="fa-solid fa-chevron-right mx-1"></i></span>Delhi</small>
          </div>
          <div className="col-12">
            <h2 className='fs27px text-black mt-0'>Showing 5 properties in Delhi</h2>
          </div>
        </div>
        {/* 2nd row  */}
        <div className="all cards py-4 flex gap-4 flex-wrap h-auto container">
          {/* 1st pg  */}
          <OtoBloom/>
          {/* 2nd pg  */}
          <OtoCapital/>
          {/* 3rd pg  */}
          <OtoroRaltown/>
          {/* 4th pg  */}
          <OtoRoyalWin/>
          {/* 5th pg  */}
          <OtoScoutHouse/>
          {/* 6th  */}
          <OtoExpRessway/>
          {/* 7th pg  */}
          <OtoOmegaTownship/>
          {/* 8th  */}
          <OtoExpoPremium/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Noida