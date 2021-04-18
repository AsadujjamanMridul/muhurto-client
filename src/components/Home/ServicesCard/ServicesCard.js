import React from 'react';
import './ServicesCard.css'

const ServicesCard = ({serviceInfo, handleServiceSelection}) => {

    const {serviceImage, serviceName, serviceCharge} = serviceInfo;
 
    return (
        <div onClick={() => handleServiceSelection(serviceName, serviceCharge)} className="col-md-6 col-lg-4 py-3 services-div align-items-center">
            <img src={`data:image/png;base64,${serviceImage.img}`} alt="" className="img-fluid services-img" />

            <div className='d-flex justify-content-center align-items-center'>
                <p className= 'service-name py-2 px-3'>{serviceName}</p>
            </div>
        </div>
    );
};

export default ServicesCard;