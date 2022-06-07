import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const navigate = useNavigate();
    const navigateToAbout = () => {
        navigate('/about');
    }
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">

                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-xl-6">
                            <h1>Warehouse experience with Primefactor Car Bike </h1>
                            <h2>Excellent Car and Bike</h2>
                            <button onClick={navigateToAbout} className="btn-get-started scrollto">More Info</button>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default Banner;