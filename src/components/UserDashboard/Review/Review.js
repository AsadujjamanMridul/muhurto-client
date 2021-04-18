import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext} from '../../../App'

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviewData, setReviewData] = useState(null);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        data.imageURL = loggedInUser.imageURL;
        setReviewData(data);

        const url = "https://thawing-everglades-39599.herokuapp.com/addReview";

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    alert('Your review has been sent successfully!');
                }
            });
    };

    return (
        <div className='col-md-9 min-h-100 m-0 p-0'>
            <div className='p-3 d-flex justify-content-between sticky-top bg-1 shadow-sm'>
                <h2 className='menu-name ps-3 pt-3 color-4'>Review</h2>
                <div className='d-flex'>
                    <h4 className='user-name pe-3 pt-3 color-4'>{loggedInUser.name}</h4>
                    <img src={loggedInUser.imageURL} alt="..." className='img-fluid rounded-circle' style={{ width: "50px" }} />
                </div>
            </div>

            <div className='min-h-92 bg-1 px-2 py-5 px-md-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='container'>

                    <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                        type="text"
                        defaultValue={loggedInUser.name}
                        name='clientName'
                        placeholder="Your Name" required
                        {...register("clientName")} />

                    <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                        type="email"
                        defaultValue={loggedInUser.email}
                        name='clientEmail'
                        placeholder="Email" required
                        {...register("clientEmail")} />

                    <input className="form-control my-2 w-75 bg-1 color-4 input-text"
                        type="text"
                        defaultValue="Student"
                        name='clientDesignation'
                        placeholder="Designation" required
                        {...register("clientDesignation")} />

                    <textarea className="form-control input-text bg-1 color-4 my-2 w-75"
                        name="clientReview"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Review" required
                        {...register("clientReview")}></textarea>


                    <input type="submit" value='Submit' className='btn btn-brand my-3' />
                </form>


            </div>
        </div>
    );
};

export default Review;