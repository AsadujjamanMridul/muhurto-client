import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-4 py-5">
            <div className="row py-5 justify-content-center py-5">
                <div className="col-11">
                    <div className="row pe-5 w-100  overflow-hidden">
                        <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                            <h3 className="text-muted mb-md-0 mb-5 color-5 footer-brand-name">Muhurto.</h3>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                            <h6 className="mb-3 mb-lg-4 color-5 footer-title"><b>MENU</b></h6>
                            <ul className="list-unstyled">
                                <li className="py-1 "><Link className='text-decoration-none footer-link' to="/">Home</Link></li>
                                <li className="py-1 footer-link">Projects</li>
                                <li className="py-1 footer-link">Pricing</li>
                                <li className="py-1 footer-link"><Link to='/dashboard' className='text-decoration-none footer-link'>Dashboard</Link></li>                            </ul>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                            <h6 className="mb-3 mb-lg-4 text-muted color-5 mt-sm-0 mt-5 footer-title"><b>ADDRESS</b></h6>
                            <p className="mb-1 footer-link">605, Ratan Icon Building <br/>Seawoods Sector</p>
                        </div>
                    </div>
                    <div className="row pe-5 w-100  overflow-hidden">
                        <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">

                            <p className="social text-muted mb-0 pb-0 color-3">
                                <span className="mx-2">
                                    <FontAwesomeIcon icon={faFacebookF} className='me-3 facebook' />
                                </span>
                                <span className="mx-2">
                                    <FontAwesomeIcon icon={faLinkedin} className='me-3 linkedIn' />
                                </span>
                                <span className="mx-2">
                                    <FontAwesomeIcon icon={faTwitter} className='me-3 twitter' />
                                </span>
                                <span className="mx-2">
                                    <FontAwesomeIcon icon={faInstagram} className='me-3 instagram' />
                                </span>
                            </p>

                            <small className="rights small color-3"><span>&#174;</span> Team Muhurto. All Rights Reserved.</small>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                            <h6 className=" mt-5 text-muted color-5 footer-title"><b>Team Give</b></h6>
                            <small className='footer-link'>
                                 <span><FontAwesomeIcon icon={faEnvelope} size='sm' /></span> team.give@gmail.com </small>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                            <h6 className="text-muted color-5 footer-title"><b>Asadujjaman Mridul</b></h6>
                            <small className='footer-link'>
                                <span><FontAwesomeIcon icon={faEnvelope} size='sm' /></span> asad.mridul@gmail.com</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;