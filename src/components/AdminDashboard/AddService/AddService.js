import React, { useContext, useState } from 'react';
import { ServiceContext, UserContext } from '../../../App';

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddService = () => {

    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [serviceInfo, setServiceInfo] = useState(null);


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('serviceImage', data.serviceImage[0]);
        formData.append('serviceName', data.serviceName);
        formData.append('serviceCharge', data.serviceCharge);

        fetch('https://thawing-everglades-39599.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert('Service has been added successfully!')
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    return (
        <div className='col-md-9 min-h-100 m-0 p-0'>
            <div className='p-3 d-flex justify-content-between sticky-top bg-1 shadow-sm'>
                <h2 className='menu-name ps-3 pt-3 color-4'>Add Service</h2>
                <div className='d-flex'>
                    <h4 className='user-name pe-3 pt-3 color-4'>{loggedInUser.name}</h4>
                    <img src={loggedInUser.imageURL} alt="..." className='img-fluid rounded-circle' style={{ width: "50px" }} />
                </div>
            </div>
            <div className='min-h-92 bg-1 px-2 py-5 px-md-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='container'>

                    <label htmlFor="serviceName" className='label'>Service Name</label>
                    <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                        type="text"
                        name='serviceName'
                        placeholder="Enter service name"
                        {...register("serviceName")} required />

                    <label htmlFor="serviceCharge" className='label mt-2'>Service Charge</label>
                    <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                        type="number"
                        name='serviceCharge'
                        placeholder="Enter service charge"
                        {...register("serviceCharge")} required />

                    <label htmlFor="serviceImage" className='label mt-2'>Service Image</label>
                    <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                        type="file"
                        name='serviceImage'
                        placeholder="Enter service image"
                        {...register("serviceImage")} required />

                    <input type="submit" value='Submit' className='btn btn-brand my-3' />

                </form>
            </div>
        </div>
    );
};

export default AddService;