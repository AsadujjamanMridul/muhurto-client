import React, { useContext, useState } from 'react';
import './Book.css'

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

import { UserContext, ServiceContext } from '../../../App'
import ProcessPayment from '../../ProcessPayment/ProcessPayment/ProcessPayment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcStripe, faCcVisa, faCcPaypal } from '@fortawesome/free-brands-svg-icons'

const Book = () => {

    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext);

    const [clientData, setClientdata] = useState();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.serviceCharge = selectedService.serviceCharge;
        data.status = 'pending';
        setClientdata(data);
    };

    const handlePayment = async paymentId => {
        const url = "https://thawing-everglades-39599.herokuapp.com/newBooking";

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...clientData, paymentId })
        })
            .then(res => {
                if (res) {
                    alert('Your order has been booked successfully!');
                    history.replace('/');
                }
            });
    }

    return (
        <div className='col-md-9 min-h-100 m-0 p-0'>
            <div className='p-3 d-flex justify-content-between sticky-top bg-1 shadow-sm'>
                <h2 className='menu-name ps-3 pt-3 color-4'>Book</h2>
                <div className='d-flex'>
                    <h4 className='user-name pe-3 pt-3 color-4'>{loggedInUser.name}</h4>
                    <img src={loggedInUser.imageURL} alt="..." className='img-fluid rounded-circle' style={{ width: "50px" }} />
                </div>
            </div>
            <div className='min-h-92 bg-1 px-2 py-5 px-md-5'>
                <form style={{ display: clientData ? 'none' : 'block' }} onSubmit={handleSubmit(onSubmit)} className='container'>

                    <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                        type="text"
                        defaultValue={loggedInUser.name}
                        name='clientName'
                        placeholder="Full Name"
                        {...register("clientName")} />

                    <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                        type="email"
                        defaultValue={loggedInUser.email}
                        name='clientEmail'
                        placeholder="Email"
                        {...register("clientEmail")} />

                    <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                        list="datalistOptions"
                        id="service-name"
                        name="service-name"
                        placeholder="Service's Name"
                        defaultValue={selectedService ? selectedService.serviceName : "Wedding Photography"}
                        {...register("serviceName", { required: true })} />
                    <datalist id="datalistOptions">
                        <option value="Wedding Photography" />
                        <option value="Engagement Photography" />
                        <option value="Potrait" />
                    </datalist>
                    {errors.serviceName && <span className='payment-error-msg'>This field is required</span>}

                    <p className='service-charge-text my-3'>Your Service Charge will be: <strong className='text-dark'>$ {selectedService ? selectedService.serviceCharge : "1500"}</strong></p>


                    <input type="submit" value='Next' className='btn btn-brand my-3' />
                </form>

                <div style={{ display: clientData ? 'block' : 'none' }} className='my-3 container'>
                    <div className="d-flex align-items-center">
                        <p className='color-4 user-name'>Pay With
                            <FontAwesomeIcon icon={faCcStripe} size='lg' className='ms-3 color-4' />
                            <FontAwesomeIcon icon={faCcVisa} size='lg' className='ms-3 color-4' />
                            <FontAwesomeIcon icon={faCcPaypal} size='lg' className='ms-3 color-4' /></p>
                    </div>
                    <ProcessPayment handlePayment={handlePayment} />
                </div>


            </div>
        </div>
    );
};

export default Book;