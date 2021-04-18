import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App'

import './Navbar.css'

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let loginButtonToggle;
    if (loggedInUser.name === undefined) {
        loginButtonToggle =
            <Link className="nav-link color-1 nav-login-btn" to="/login" tabIndex="-1" aria-disabled="true">Login</Link>
    }
    else {
        loginButtonToggle =
            <div className='d-flex'>
                <Link to='/dashboard'>
                    <img src={loggedInUser.imageURL} alt="..." className='img-fluid rounded-circle loggedIn-img' style={{ width: "40px", height: "40px" }} />
                </Link>
            </div>
    }

    const [roleDashboardName, setRoleDashboardName] = useState('Dashboard')

    useEffect(()=> {
        fetch(`https://thawing-everglades-39599.herokuapp.com/isAdmin?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            if(data){
                setRoleDashboardName('Admin');
            }
            else{
                setRoleDashboardName('Dashboard');
            }
        })
    }, [loggedInUser.email])

    return (
        <div className="sticky-top shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light bg-4 py-3" >
                <div className="container">
                    <Link className="navbar-brand brand-name color-5" to="/">মুহূর্ত</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <Link className="nav-link color-1 active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link color-1" href="#">Projects</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link color-1" href="#">Pricing</a>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link color-1" to="/dashboard">{roleDashboardName}</Link>
                            </li>
                            {
                                loginButtonToggle
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;