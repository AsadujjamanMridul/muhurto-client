import React, { useContext, useEffect, useState } from 'react';
import './Services.css'

import ServicesCard from '../ServicesCard/ServicesCard';

import { useHistory } from 'react-router-dom';
import { ServiceContext } from '../../../App'

import PulseLoader from "react-spinners/PulseLoader"
import { css } from "@emotion/react";


const Services = () => {

    const [selectedService, setSelectedService] = useContext(ServiceContext);

    const history = useHistory();

    const handleServiceSelection = (serviceName, serviceCharge) => {
        const newSelectedService = {
            serviceName: serviceName,
            serviceCharge: serviceCharge
        }
        setSelectedService(newSelectedService);
        history.replace('/dashboard');
    }

    const [servicesList, setServicesList] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://thawing-everglades-39599.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServicesList(data);
                setLoading(!loading);
            })
    }, []);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        position: absolute;
        top: 50%;`;


    return (
        <section className='bg-1 min-h-92 position-relative'>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <h2 className='text-center section-title bg-4 color-1 m-0 my-5 py-4 px-5 rounded'>Services</h2>
                </div>
                <div className="sweet-loading d-flex justify-content-center align-items-center">
                    <PulseLoader color={'#3b424b'} size={15} margin={2} css={override} loading={loading} />
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