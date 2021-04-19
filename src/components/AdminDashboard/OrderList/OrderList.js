import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ServiceContext, UserContext } from '../../../App';

import PulseLoader from "react-spinners/PulseLoader"
import { css } from "@emotion/react";

const OrderList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext);

    const [loading, setLoading] = useState(true);
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        position: absolute;
        top: 30%;`;

    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        fetch('https://thawing-everglades-39599.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setBookingList(data);
                setLoading(!loading);
            })
    }, []);


    const handleStatusChange = (e, id) => {

        fetch(`https://thawing-everglades-39599.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ status: e.target.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status has been updated successfully!');
                }
            })
    }


    const BookingDetailList = () => {
        return (
            bookingList.map(booking => {
                return (
                    <Fragment>
                        <tbody>
                            <tr scope="row mt-3 table-data-text">
                                <td className="py-2 px-1 color-4">{booking.paymentId}</td>
                                <td className="p-1 py-2 color-4">{booking.clientName}</td>
                                <td className="text-center p-1 py-2 color-4">{booking.serviceName}</td>
                                <td className="text-end p-1 py-2 color-4">$ {booking.serviceCharge}</td>
                                <td className="text-end p-1 py-2  ps-5 color-4">
                                    <select className="form-select px-2 bg-1"
                                        aria-label="Default select example"
                                        onChange={(event) => handleStatusChange(event, booking._id)}>
                                        <option selected>{booking.status}</option>
                                        <option value="pending">pending</option>
                                        <option value="onGoing">onGoing</option>
                                        <option value="done">done</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </Fragment>
                )
            })
        )
    }

    return (
        <div className='col-md-9 min-h-100 m-0 p-0'>
            <div className='p-3 d-flex justify-content-between sticky-top bg-1 shadow-sm'>
                <h2 className='menu-name ps-3 pt-3 color-4'>Order List</h2>
                <div className='d-flex'>
                    <h4 className='user-name pe-3 pt-3 color-4'>{loggedInUser.name}</h4>
                    <img src={loggedInUser.imageURL} alt="..." className='img-fluid rounded-circle' style={{ width: "50px" }} />
                </div>
            </div>
            <div className="min-h-92 p-1 p-md-5 bg-1 position-relative">
                <table className="table container-fluid table-borderless table-hover bg-1 overflow-scroll">
                    <thead className='table-header-text bg-1'>
                        <tr>
                            <th scope="col" className="py-3 px-1 color-5">Payment Id</th>
                            <th scope="col" className="py-3 p-1 color-5">Client's Name</th>
                            <th scope="col" className="text-center px-1 py-3 color-5">Service</th>
                            <th scope="col" className="text-end px-1 py-3 color-5">Charge</th>
                            <th scope="col" className="text-end px-1 py-3 color-5">Status</th>
                        </tr>
                    </thead>
                    {
                        BookingDetailList()
                    }
                </table>
                <div className="sweet-loading d-flex justify-content-center align-items-center">
                    <PulseLoader color={'#3b424b'} size={15} margin={2} css={override} loading={loading} />
                </div>
            </div>
        </div>
    );
};

export default OrderList;