import React from 'react';
import './OurServices.css';
import ourservices from '../../images/ourservices.png';
import { RiMotorbikeFill } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import { FaBusAlt } from 'react-icons/fa';

const OurServices = () => {
    return (
        <div className='back-color-services'>
            <section id="ourServices" className="ourServices">
                <div className="container">

                    <div className="section-title text-center m-5">
                        <h1>SERVICES</h1>
                        <p>Get Exceptional Service For Growth Improve Your Investment Primefactor Warehouse Management System</p>
                    </div>

                    <div className="row d-flex align-items-center justify-content-between service-box">
                        <div className="col-sm-12 col-lg-6 d-flex justify-content-center service-image">
                            <img className='img-fluid' src={ourservices} alt="" />
                        </div>

                        <div className="col-sm-12 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h3>Our Software base fits into the supply chain, Faster implementation</h3>
                            <p>The supply chain can operate only as quickly, accurately and efficiently as warehouse processes permit. Vital role in supply chain management by managing order fulfillment processes, from receiving our imported cars and bike to shipping.</p>

                            <div className="icon-box">
                                <div className="icon"><span> <AiFillCar></AiFillCar> </span></div>
                                <h4 className="title">Excellent Car Stock</h4>
                                <p className="description">Tesla, we also import this largest automaker designs, manufactures, and sells electric vehicles company's car.</p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><span> <RiMotorbikeFill></RiMotorbikeFill> </span></div>
                                <h4 className="title">Updated Bike Stock</h4>
                                <p className="description">Harli Davidson, Bajaj, Bennett, Benelli, Apprillia all types of updated and restock bike from aroun the world. </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><span> <FaBusAlt></FaBusAlt> </span></div>
                                <h4 className="title">Coming Soon Bus Stock</h4>
                                <p className="description">We are arriving new collection CX45E crafted bus stock, emphasis on quality leading electric exceed expectations.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default OurServices;