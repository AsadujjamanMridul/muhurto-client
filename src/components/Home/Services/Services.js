import React, { useContext, useEffect, useState } from 'react';
import './Services.css'

import img4 from '../../../assets/images/img-4.jpg'
import img3 from '../../../assets/images/img-3.jpg'
import img6 from '../../../assets/images/img-6.jpg'
import ServicesCard from '../ServicesCard/ServicesCard';

import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { UserContext, ServiceContext } from '../../../App'

const Services = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext);

    const history = useHistory();

    const handleServiceSelection = (serviceName, serviceCharge) => {
        // console.log(serviceName);
        const newSelectedService = {
            serviceName : serviceName,
            serviceCharge : serviceCharge
        }
        setSelectedService(newSelectedService);
        history.replace('/dashboard');
    }

    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        fetch('https://thawing-everglades-39599.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServicesList(data))
    }, []);


    return (
        <section className='bg-1 min-h-92'>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <h2 className='text-center section-title bg-4 color-1 m-0 my-5 py-4 px-5 rounded'>Services</h2>
                </div>
                <div className="row pb-5 mx-0">
                    {
                        servicesList.map(service => <ServicesCard handleServiceSelection={handleServiceSelection} serviceInfo={service}></ServicesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;