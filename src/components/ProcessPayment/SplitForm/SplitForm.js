import React, { useMemo } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";

import './SplitForm.css'


const useOptions = () => {
    const fontSize = '1em';
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        [fontSize]
    );

    return options;
};

const SplitForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            event.preventDefault();
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className='label my-2'>
                Card number
             </label>
            <CardNumberElement
                options={options}
                onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
            />
            <label className='label my-2'>
                Expiration date
      </label>
            <CardExpiryElement
                options={options}
                onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
            />
            <label className='label my-2'>
                CVC
      </label>
            <CardCvcElement
                options={options}
                onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
            />
            <button type="submit" disabled={!stripe} className='btn btn-brand mt-4'>
                Pay
      </button>
        </form>
    );
};

export default SplitForm;