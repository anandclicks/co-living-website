
import React, { useEffect, useState } from 'react'
import Amenities from '../pgone/Amenities';

import '../pgone/App.css'
import Pgsuggestion from '../Home/Pgsuggestion';
function OtoExpoPremiumPage() {
  const [isfixed, setIsfixed] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [imageNo, setimageNo] = useState(8)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition >= 1830) {
        setIsfixed(false);
      } else {
        setIsfixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const NextImgHnadle = ()=> {
    if(imageNo == 10) {
      setimageNo(1)
    }
    else {
      setimageNo(prev => prev + 1)
    }
  }
  const PrevImgHandle = ()=> {
    if(imageNo == 1) {
      setimageNo(9)
    }
    else {
      setimageNo(prev => prev - 1)
    }
  }
  return (
    <div className='pageMain'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css" referrerpolicy="no-referrer" />
      <div className="Pagebtns w-full  bg-white flex justify-between  d-flex d-lg-none">
        <div className="whatsaApp primaryColor flex items-center justify-center w-50 bg-blend-lighten ">
         <img src="\whatsappicon\whatsapp.png" alt="" /> Schedule visit
        </div>
        <div className="slectRoom bgPrimery p-3 text-white w-50 flex items-center justify-center">
          Select Room
        </div>
      </div>
    <div className='container-flued row2  pgdesigntwo  h-Auto'>
        <div className="row ">
          {/* left side  */}
          <div className="col-12 col-lg-7 pgdesignLeft ">
            {/* top btn and pg info  */}
          <div className="flex w-full justify-between items-center py-2 py-lg-5 h-Auto">
            <div className='flex gap-3 flex-col'>
              <h2 className='fs-3 text-black fwnormal'>Oto Expo Premium  <i class="ri-heart-line ms-3 fw-light primeryColor"></i></h2>
              <p className='text-black-50 '>Lorem ipsum dolor sit amet.  </p>
            </div>
            <div className='btn btn-outline-info btnPglocaion btnPglocaionNone d-none d-lg-flex '>
              <a target='_blanck' className='text-decoration-none' href="https://maps.app.goo.gl/eqS7HCAztCrnxMgo8"><i class="ri-map-pin-line me-1 fs-5"></i> View in map</a>
            </div>
          </div>
          {/* location btn  */}
        {/* <div className='h-[10vh] d-flex  d-lg-none'>
        <div className='btn btn-outline-info btnPglocaion d-inline'>
              <a target='_blanck' className='text-decoration-none' href="https://maps.app.goo.gl/eqS7HCAztCrnxMgo8"><i class="ri-map-pin-line me-1 fs-5"></i> View in map</a>
            </div>
        </div> */}
          {/* images and slider  */}
          <div className="imageContainer w-full overflow-hidden">
            <img className='h-full w-full object-cover' src={`/Allcitiesindividualpgs/otoexpopremiumsec128/${imageNo}.jpg`} alt="" />
            <div className='w-full flex justify-between imageCtril'>
              <i onClick={PrevImgHandle} class="ri-arrow-left-s-line fs-1"></i>
              <i onClick={NextImgHnadle} class="ri-arrow-right-s-line fs-1"></i></div>
          </div>
          {/* about property  */}
          <div className=" w-full  pt-4 pb-0 py-lg-5 h-auto">
          <p className='primeryColor pb-5'>Home <i class="ri-arrow-right-s-line"></i> Noida <i class="ri-arrow-right-s-line"></i> All PG <i class="ri-arrow-right-s-line"></i> <span className='text-black'>Oto Expo Premium </span></p>
          </div>
           {/* about property  */}
           <div className="box ">
            <h2 className='fs-2'>About the <span className='primeryColor'>Property</span></h2>
            <p className='flex flex-col'>
              <span className='mb-3 mt-2 text-black'>Discover Your Ideal PG near Bellandur with OTO Nirvana!</span> <br />
             <span className='mb-3 text-black'>
             Strategically nestled within a stone's throw away from key office spaces and access roads, OTO Nirvana offers the perfect blend of comfort and convenience. Situated just 1.5 km from RMC Ecospace, 1 km from Central Mall, and SAP Labs Bellandur, and a mere 2 km from Sarjapur Road Signal, our PG is your gateway to seamless living in the heart of Bellandur.
             </span>
              <span className='mb-3 text-black'>At OTO Nirvana, we understand the importance of proximity. Whether you're searching for a 'PG near me' or a PG in Bellandur, our prime location ensures easy access to your workplace and essential amenities. With thoughtfully designed living spaces, modern amenities, and a vibrant community, OTO Nirvana redefines PG living.
              </span>
              <span className='text-black'>
              Experience the convenience of urban living with OTO Nirvana. Your search for the perfect PG near Bellandur ends here!
              </span>
</p>
          </div>
          {/* rooms dtls  */}
          <div className="row py-3 h-auto">
            <h2 className='fs-2'>Room <span className='primeryColor'>Detels</span></h2>
            <p className='mt-2'>All room type have some variants that are larger in size or have extra Amenities.</p>
            <div className="priceBox w-full row gap-3 py-4 px-4">
              <div className='bgLightDark col-12 col-lg-4  flex flex-col items-center pricingCard p-2 p-lg-4  rounded-2xl cursor-pointer'>
              <h2 className='fs-5 py-1'>Private Room</h2>
              <p>starting from</p>
              <span className='fw-bold mt-1 text-black'>₹11,000/<span className='fw-light text-black p13px'>Month</span></span>
              </div>
              <div className='bgLightDark col-12 col-lg-4  flex flex-col items-center pricingCard p-2 p-lg-4  rounded-2xl cursor-pointer'>
              <h2 className='fs-5 py-1'>Double sharing</h2>
              <p>starting from</p>
              <span className='fw-bold mt-1 text-black'>₹55,00/<span className='fw-light text-black p13px'>Month</span></span>
              </div>
           
            </div>
          </div>
         {/* wallet  */}
         <div className=" walletPart flex my-2 ps-0">
          <h2 className='fs-5 py-3  px-3 w-full rounded-xl bgPrimeryLight text-white'>DEPOSIT IS THE SAME AS 1 MONTH RENT.</h2>
          </div>
          {/* amenties  */}
          <div className="row p-0 pb-5">
          <h2 className=' mb-2 fs-3 my-4 pb-3'>Amazing <span className='primeryColor'>Amenties</span></h2>
            <div className="col-2 col-lg-2 flex individualAmenties">
            <img src="/Amenties Svg/parking_icon.svg" alt="" />
              <h6 className='amentiesText'>
              Parking
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\tv_icon.svg" alt="" />
              <h6 className='amentiesText'>
              TV
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\ac_icon.svg" alt="" />
              <h6 className='amentiesText'>
              AC
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\wifi_icon.svg" alt="" />
              <h6 className='amentiesText'>
              wIFi
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\refrigerator_icon.svg" alt="" />
              <h6 className='amentiesText'>
              Refrigerator
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\power backup_icon.svg" alt="" />
              <h6 className='amentiesText'>
              Generator
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\almirah_icon.svg" alt="" />
              <h6 className='amentiesText'>
              Almirah
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\bed sheet_icon.svg" alt="" />
              <h6 className='amentiesText'>
              Bad Sheet
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\cctv_icon.svg" alt="" />
              <h6 className='amentiesText'>
              CCTV
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\house keeping_icon.svg" alt="" />
              <h6 className='amentiesText'>
              maintenance
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\security_icon.svg" alt="" />
              <h6 className='amentiesText'>
              Security
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\pillow_icon.svg" alt="" />
              <h6 className='amentiesText'>
              Pillow
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\drinking water_icon.svg" alt="" />
              <h6 className='amentiesText'>
               Water
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\bathroom_icon.svg" alt="" />
              <h6 className='amentiesText'>
              Bathroom
              </h6>
            </div>
            <div className="col-2 col-lg-2 individualAmenties">
            <img src="/Amenties Svg\wash_icon.svg" alt="" />
              <h6 className='amentiesText'>
              Wash
              </h6>
            </div>
          </div>
          {/* map  */}
          <div className="row h-[40vh]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.217737472487!2d77.34335387549936!3d28.59324407568618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzM1LjciTiA3N8KwMjAnNDUuMyJF!5e0!3m2!1sen!2sin!4v1723439152269!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* near by facelities */}
          <div className="priceBox nearbyfacelites w-full row justify-content-start justify-content-lg-start py-4 gap-3">
            <h2 className='fs-2 col-12'>Nearby <span className='primeryColor'>Location</span></h2>
              <div className='bgLightDark col-lg-3 col-5  flex flex-col pricingCard p-2 p-lg-4 rounded-xl'>
              <p>Om deiry</p>
              <h2 className='fwnormal'>20Mtr away</h2>
              </div>
              <div className='bgLightDark col-lg-3 col-5  flex flex-col pricingCard p-2 p-lg-4 rounded-xl'>
              <p>DLF mall of India</p>
              <h2 className='fwnormal'>15 Min away </h2>
              
              </div>
              <div className='bgLightDark col-lg-3 col-5  flex flex-col pricingCard p-2 p-lg-4 rounded-xl'>
              <p>Parks and gym</p>
              <h2 className='fwnormal'>15 min away</h2>
              </div>
              
            </div>
          </div>
          {/* right side  */}
          <div className="col-12 col-lg-5 pgdesignRight py-5  ">
            <div className={`pgform ms-0 ms-lg-4 flex  formOfPgReletive d-none col-12 col-lg-4 ${isfixed ? 'fixed' : 'scroll'} p-3 px-5`}>
      <form className='w-full' action="">
            <h2 class="text-center p24px fwnormal fs-4">Get a call</h2>
      <div class="form-group my-3">
        <input type="text" placeholder='Full name' class="form-control py-3  "  required />
      </div>
      <div class="form-group my-3">
        <input type="text" placeholder='Mobile number*' class="form-control py-3  " required />
      </div>

      <div class="form-group my-3">
        <select class="form-control py-3 " type="text" name="" id="">
          <option className='text-black-50' selected value="">Room sharing</option>
          <option value="">Single sharing</option>
          <option value="">Double sharing</option>
        </select>
      </div>

      <button type="submit" class="btn primeryBg btn-block py-3 px-5 mt-3 w-100">Submit</button>
   
      </form>
      <div className="row position-absolute bottom-0 d-flex ms-4 gap-2 flex-nowrap pb-5 justify-between btnsoform px-4">
        <div className="btn btnPglocaion py-3 w-50 w-50">Property Toor <i class="fa-solid fa-video ms-2"></i></div>
        <div className="btn btnPglocaion py-3 w-50 w-50">Call now <i class="fa-solid fa-phone ms-2"></i></div>
      </div>
            </div>
          </div>
        </div>
        {/* <PGListings/> */}
    </div>
    <Pgsuggestion/>
    </div>
  )
}

export default OtoExpoPremiumPage