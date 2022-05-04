import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section id="hero" class="d-flex align-items-center">

                <div class="container" data-aos="zoom-out" data-aos-delay="100">
                    <div class="row">
                        <div class="col-xl-6">
                            <h1>Bettter experience with primefactor car bike </h1>
                            <h3>Range Rover</h3>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <a href="#about" class="btn-get-started scrollto">Get Started</a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Banner;