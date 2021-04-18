import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import Header from '../Header/Header';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Testimonials from '../Testimonials/Testimonials';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <WhatWeDo/>
            <Services/>
            <OurTeam/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;