import React from 'react';
import './TestimonialCard.css'

import img1 from '../../../assets/images/img-2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const TestimonialCard = ({testimonialInfo}) => {

    const {clientName, clientReview, imageURL} = testimonialInfo;


    return (
        <div className="carousel-item d-flex justify-content-center align-items-center">
            <div className="row py-5 mx-0 w-100">
                <div className="col-md-5 p-5 d-flex justify-content-center justify-content-md-end align-items-center">
                    <img src={imageURL} className="rounded-circle testimonial-image" alt="..." />
                </div>
                <div className="col-md-5 px-5 mx-0 d-flex justify-content-start align-items-center">
                    <div className="row">
                        <div className="col-md-2 d-flex align-items-center">
                            <FontAwesomeIcon icon={faQuoteLeft} size='2x' className='h-50' />
                        </div>
                        <div className="col-md-10">
                            <p className='mb-3'><strong>{clientName}</strong></p>
                            <p>{clientReview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;