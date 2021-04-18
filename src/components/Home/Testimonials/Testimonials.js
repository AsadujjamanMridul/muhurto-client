import React, { useEffect, useState } from 'react';
import './Testimonials.css'

import img1 from '../../../assets/images/img-2.jpg'
import img2 from '../../../assets/images/img-3.jpg'
import img3 from '../../../assets/images/img-4.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import TestimonialCard from '../TestimonialCard/TestimonialCard';


const Testimonials = () => {

    // Get All Services Information
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://thawing-everglades-39599.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section className="bg-white pb-5">
            <div className="d-flex justify-content-center align-items-center">
                <h2 className='text-center section-title bg-1 color-3 m-0 my-5 py-4 px-5 rounded'>Testimonials</h2>
            </div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active d-flex justify-content-center align-items-center">
                        <div className="row py-5 mx-0 w-100">
                            <div className="col-md-5 p-5 d-flex justify-content-center justify-content-md-end align-items-center">
                                <img src={img1} className="rounded-circle testimonial-image" alt="..." />
                            </div>
                            <div className="col-md-5 px-5 mx-0 d-flex justify-content-start align-items-center">
                                <div className="row">
                                    <div className="col-md-2 d-flex align-items-center">
                                        <FontAwesomeIcon icon={faQuoteLeft} size='2x' className='h-50' />
                                    </div>
                                    <div className="col-md-10">
                                        <p className='mb-3'><strong>Khairul Hasan</strong></p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorum ullam natus labore, hic pariatur voluptates nisi enim temporibus eveniet harum nemo explicabo corporis obcaecati vel optio consequuntur ipsam tenetur sapiente incidunt maxime quas nam blanditiis! Alias enim aliquam harum et nihil dolor, aperiam iste qui consequatur dolore a dolorum?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        reviews.map(testimonial => <TestimonialCard testimonialInfo={testimonial}></TestimonialCard>)
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Testimonials;