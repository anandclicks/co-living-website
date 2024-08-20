import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const amenities = [
  { icon: 'fas fa-wifi', text: 'Wi-Fi' },
  { icon: 'fas fa-bed', text: 'Furnished' },
  { icon: 'fas fa-snowflake', text: 'Fridge' },
  { icon: 'fas fa-bed', text: 'Bedsheet' },
  { icon: 'fas fa-chair', text: 'Chair' },
  { icon: 'fas fa-water', text: 'Water' },

  { icon: 'fas fa-motorcycle', text: 'Parking' },
  { icon: 'fas fa-video', text: 'CCTV' },
  { icon: 'fas fa-bath', text: 'Bathroom' },
  { icon: 'fas fa-shield-alt', text: 'Security' },
  { icon: 'fas fa-bolt', text: 'Backup' },
  { icon: 'fas fa-user-shield', text: 'Managers' },
  { icon: 'fas fa-tools', text: 'Repairs' },
  { icon: 'fas fa-home', text: 'Unisex PG' },
  { icon: 'fas fa-broom', text: 'Housekeeping' },
];


const Amenities = () => {
  return (
    <div className="amenities container pt-3 ps-0 ps-lg-5 ">
      <h2 className=' mb-2 fs-3 my-4 pb-3'>Amazing <span className='primeryColor'>Amenties</span></h2>
      <div className="row gap-2 gap-lg-0 p-0">
        {amenities.map((amenity, index) => (
          <div style={{fontSize : `13px`}} className="col-2 my-2  me-3 m-lg-0 ms-0 m-lg-0 col-lg-4 flex-col flex-lg-row  d-flex align-items-center justify-center justify-content-lg-start  amenity fw500 ps-0" key={index}>
            <i className={`${amenity.icon} amenity-icon primeryColor `}></i>
            <span className='text-black text-center'>{amenity.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
