import React, { useContext, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ServiceContext, UserContext } from '../../../App';

const ManageServices = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext);

    // Get All Services Information
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    const deleteServices = (event, id) => {
        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Service has been deleted successfully!");

                    fetch('http://localhost:5000/services')
                        .then(res => res.json())
                        .then(data => setServices(data));
                }
            })

    }

    return (
        <div className='col-md-9 min-h-100 m-0 p-0'>
            <div className='p-3 d-flex justify-content-between sticky-top bg-1 shadow-sm'>
                <h2 className='menu-name ps-3 pt-3 color-4'>Manage Services</h2>
                <div className='d-flex'>
                    <h4 className='user-name pe-3 pt-3 color-4'>{loggedInUser.name}</h4>
                    <img src={loggedInUser.imageURL} alt="..." className='img-fluid rounded-circle' style={{ width: "50px" }} />
                </div>
            </div>

            <div className="container rounded-20 min-h-92 py-5 px-md-5 rounded-20 bg-1">
                <table className="table table-borderless table-hover container bg-1 overflow-scroll align-middle">
                    <thead className='bg-1'>
                        <tr className="custom-table-header">
                            <th scope="col" className="py-3 px-5 color-5">Service's Thumbnail</th>
                            <th scope="col" className="py-3 px-5 color-5">Service's Name</th>
                            <th scope="col" className="py-3 px-5 color-5">Service's Charge</th>
                            <th scope="col" className="text-end py-3 px-5 color-5">Action</th>
                        </tr>
                    </thead>

                    {
                        services.map(service => {
                            return (
                                <tbody>
                                    <tr id="delete" className='mt-2'>
                                        <td scope="row" className="px-5 color-4">
                                        <img src={`data:image/png;base64,${service.serviceImage.img}`} alt="" className=""
                                        style={{width: "5em", height:"5em", objectFit: "cover"}}/>
                                        </td>
                                        <td scope="row" className="px-5 color-4">{service.serviceName}</td>
                                        <td className="py-2 px-5 color-4">{service.serviceCharge}</td>

                                        <td className="text-end py-2 px-5 color-4">

                                            <button onClick={(event) => deleteServices(event, service._id)} 
                                                className="btn btn-brand" 
                                               >

                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>

                                    </tr>
                                </tbody>
                            )
                        })
                    }

                </table>
            </div>
        </div>
    );
};

export default ManageServices;