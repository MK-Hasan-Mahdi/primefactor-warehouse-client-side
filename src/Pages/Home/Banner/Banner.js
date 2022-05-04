import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">

                <div className="container" data-aos="zoom-out" data-aos-delay="100">
                    <div className="row">
                        <div className="col-xl-6">
                            <h1>Bettter experience with primefactor car bike </h1>
                            <h3>Range Rover</h3>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Banner;