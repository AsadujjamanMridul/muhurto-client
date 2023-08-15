import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const ViewGallery = () => {
    return (
        <div>
            <Navbar/>
            <div className="vh-100 bg-1 d-flex justify-content-center align-items-center">
                <h2 className='gallery-header color-4'>Welcome to our gallery</h2>
            </div>
            <Footer/>
        </div>
    );
};

export default ViewGallery;