import React, { useState } from "react";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link } from "react-router-dom";

const SimpleCardForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(false);
        } else {
            setPaymentSuccess(true);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            {
                paymentError &&
                <p className='payment-error-msg text-danger py-2'>{paymentError}</p>
            }
            {
                paymentSuccess &&
                <p className='payment-error-msg text-success py-2'>Your Payment has been recorded</p>
            }
            <button type="submit" disabled={!stripe} className='btn btn-brand my-3'>
                Pay
      </button>
        </form>
    );
};

export default SimpleCardForm;