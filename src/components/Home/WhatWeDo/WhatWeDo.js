import React from 'react';
import './WhatWeDo.css'

import img1 from '../../../assets/images/img-2.jpg'

const WhatWeDo = () => {
    return (
        <section className='bg-white'>
            <div className="d-flex justify-content-center align-items-center">
                <h2 className='text-center section-title bg-1 color-3 m-0 my-5 py-4 px-5 rounded'>What We Do</h2>
            </div>
            <div className="row mb-5 d-flex justify-content-evenly w-100 mx-0">
                <div className="col-lg-5 px-5 p-md-5 d-flex align-items-center">
                    <img src={img1} alt="..." className="w-100"/>
                </div>
                <div className="col-lg-5 p-5 p-md-5 d-flex align-content-center">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate esse recusandae quas in animi ab, saepe quae vitae totam voluptatum obcaecati eligendi doloribus adipisci ullam consequatur blanditiis iste. Quaerat eligendi eius iure, porro alias rerum modi fuga minus aut ad repellendus odit optio inventore ratione et fugit repellat, enim natus.<br/> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, mollitia. Illo omnis harum veniam voluptas sed quasi, doloribus fuga qui perspiciatis excepturi eaque minima inventore nostrum, iure iste itaque, ab sequi consectetur ipsum! Animi alias totam beatae commodi ad! Molestias suscipit maxime libero minima repellendus explicabo consectetur quis fugit illum sint, omnis dolorem necessitatibus earum odio. Nisi consectetur odit nulla a odio quasi et iste deleniti eligendi, dolores inventore molestiae explicabo error at repudiandae eos repellendus vel minus maxime voluptate voluptatum cumque.</p>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;