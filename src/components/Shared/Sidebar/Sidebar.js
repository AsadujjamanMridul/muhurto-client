import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faThList, faPlusSquare, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'

import BeatLoader from "react-spinners/BeatLoader"
import { css } from "@emotion/react";

const Sidebar = ({ role, handleNavigation, loading }) => {

    let navigationLinks = null;

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        position: absolute;
        top: 30%;`;

    switch (role) {

        case 'admin': {
            navigationLinks =
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link py-2 side-nav-link color-1"><FontAwesomeIcon icon={faHome} className='me-3' /> Home </Link>
                    </li>
                    <li onClick={() => handleNavigation('Order List')} className="nav-item">
                        <Link to="/dashboard" className="nav-link py-2 side-nav-link color-1"><FontAwesomeIcon icon={faThList} className='me-3' /> Order List </Link>
                    </li>
                    <li onClick={() => handleNavigation('Add Service')} className="nav-item">
                        <Link to="/dashboard" className="nav-link py-2 side-nav-link color-1"><FontAwesomeIcon icon={faPlusSquare} className='me-3' /> Add Service </Link>
                    </li>
                    <li onClick={() => handleNavigation('Make Admin')} className="nav-item">
                        <Link to="/dashboard" className="nav-link py-2 side-nav-link color-1"><FontAwesomeIcon icon={faUserPlus} className='me-3' /> Make Admin </Link>
                    </li>
                    <li onClick={() => handleNavigation('Manage Services')} className="nav-item">
                        <Link to="/dashboard" className="nav-link py-2 side-nav-link color-1"><FontAwesomeIcon icon={faTasks} className='me-3' /> Manage Services </Link>
                    </li>
                </ul>

        } break;

        default: {
            navigationLinks =
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link py-2 side-nav-link color-1"><FontAwesomeIcon icon={faHome} className='me-3' /> Home </Link>
                    </li>
                    <li onClick={() => handleNavigation('Book')} className="nav-item">
                        <Link to="/dashboard" className="nav-link py-2 side-nav-link color-1"><FontAwesomeIcon icon={faShoppingCart} className='me-3' /> Book </Link>
                    </li>
                    <li onClick={() => handleNavigation('Booking List')} className="nav-item">
                        <Link to="/dashboard" className="nav-link py-2 side-nav-link color-1"><FontAwesomeIcon icon={faThList} className='me-3' /> Booking List </Link>
                    </li>
                    <li onClick={() => handleNavigation('Review')} className="nav-item">
                        <Link to="/dashboard" className="nav-link py-2 side-nav-link color-1"><FontAwesomeIcon icon={faCommentAlt} className='me-3' /> Review </Link>
                    </li>
                </ul>

        } break;

    }

    return (

        <div className="col-md-3 d-flex flex-column p-3 bg-4">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-5 mx-auto text-decoration-none navbar-brand brand-name color-5">
                মুহূর্ত
            </Link>
            <hr />

            { loading ?
                <div className="sweet-loading d-flex justify-content-center align-items-center">
                    <BeatLoader color={'#f3efe9'} size={10} margin={2} css={override} loading={loading} />
                </div> :
                navigationLinks
            }
            <hr />

        </div>
    );
};

export default Sidebar;