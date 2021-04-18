import React from 'react';

const BookingListCard = ({booking}) => {

    const {clientEmail, serviceName, paymentId} = booking;

    return (
        <div className='col-md-3 bg-white'>
            <div className='p-3'>
                <button className="btn-brand mt-2 mb-4">Pending</button>
                <p className='menu-name'>{serviceName}</p>
                <p className='user-name'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam, ullam impedit, minus, voluptatum minima pariatur odit quisquam provident in est error nisi consequuntur commodi? Similique ipsum iure fuga sed.</p>
            </div>
        </div>
    );
};

export default BookingListCard;