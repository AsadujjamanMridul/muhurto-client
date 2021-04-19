import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section>
            <div className="header d-flex justify-content-center align-items-center p-5 p-md-0">
                <div className="px-4 py-5 rounded" style={{backgroundColor : "rgba(59, 66, 75, 0.4)"}}>
                    <h2 className="text-dark text-center py-3"><span className='text-1 color-1'>Every moment of your life is </span><br /><span className='text-2 color-5 pt-2'> beautiful</span></h2>

                    <p className="text-center banner-dialogue color-1 px-4 py-3 rounded"><small>Your each movement, each emotion is nothing but a beautiful picture <br />and we just want to hold on those <strong>moments</strong> with our camera <br /> and make it a piece of art with our adroit editing</small></p>
                    
                    <div className="d-flex justify-content-center align-items-center py-3">
                        <button className="btn btn-dark btn-brand ">View Gallery</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;