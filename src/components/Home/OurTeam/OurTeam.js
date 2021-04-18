import React from 'react';

import img1 from '../../../assets/images/person-1.jpg'
import img2 from '../../../assets/images/person-2.jpg'
import img3 from '../../../assets/images/person-3.jpg'
import img4 from '../../../assets/images/person-4.jpg'
import img5 from '../../../assets/images/person-5.jpg'
import OurTeamCard from '../OurTeamCard/OurTeamCard';

const teamInfo = [
    {
        name: "Lorem Ipsum",
        image: img1
    },
    {
        name: "Lorem Ipsum",
        image: img5
    },
    {
        name: "Lorem Ipsum",
        image: img3
    },
    {
        name: "Lorem Ipsum",
        image: img4
    }
]

const OurTeam = () => {
    return (
        <section className='bg-2 pb-5 min-h-92'>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center mb-5">
                    <h2 className='text-center section-title bg-3 color-1 m-0 my-5 py-4 px-5 rounded'>Meet Our Team</h2>
                </div>
                <div className="row mb-5 d-flex justify-content-evenly w-100 mx-0">
                    <div className="card-group">
                        {
                            teamInfo.map(memberInfo => <OurTeamCard memberInfo={memberInfo}></OurTeamCard>)
                        }


                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;