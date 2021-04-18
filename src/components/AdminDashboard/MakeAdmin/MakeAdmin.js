import React, { useContext, useState } from 'react';
import { ServiceContext, UserContext } from '../../../App';

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const MakeAdmin = () => {

    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [newAdmin, setNewAdmin] = useState('');

    const onSubmit = data => {
        setNewAdmin(data);

        const url = "https://thawing-everglades-39599.herokuapp.com/addAdmin";

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    alert('Admin has been set successfully!');
                }
            });
    };

    return (
        <div className='col-md-9 min-h-100 m-0 p-0'>
            <div className='p-3 d-flex justify-content-between sticky-top bg-1 shadow-sm'>
                <h2 className='menu-name ps-3 pt-3 color-4'>Make Admin</h2>
                <div className='d-flex'>
                    <h4 className='user-name pe-3 pt-3 color-4'>{loggedInUser.name}</h4>
                    <img src={loggedInUser.imageURL} alt="..." className='img-fluid rounded-circle' style={{ width: "50px" }} />
                </div>
            </div>
            <div className='min-h-92 bg-1 px-2 py-5 px-md-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className='container'>

                        <label htmlFor="email" className='label'>Email</label>
                        <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                            type="email"
                            name='email'
                            placeholder="jon@gmail.com"
                            {...register("email")} required/>

                        <input type="submit" value='Submit' className='btn btn-brand my-3' />
                    </form>
                </div>
        </div >
    );
};

export default MakeAdmin;