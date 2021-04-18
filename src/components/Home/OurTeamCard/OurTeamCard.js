import React from 'react';
import './OurTeamCard.css'

const OurTeamCard = ({ memberInfo }) => {

    const { name, image } = memberInfo;

    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-center px-md-2">
            <div className="card w-100 member-div border-none px-4 pt-4 pb-2 mb-5 bg-1">
                <img src={image} className="card-img-top team-card-image member-img" alt="..." />
                <div className="card-body d-flex justify-content-center align-items-center">
                    <p className="card-text member-name text-center">{name}</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeamCard;