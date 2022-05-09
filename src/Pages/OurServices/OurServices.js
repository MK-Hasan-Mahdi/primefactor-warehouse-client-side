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
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="d-flex justify-content-center service-image">
                                <img className='img-fluid' src={ourservices} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            {/* <div className=" d-flex align-items-center justify-content-between service-box"> */}


                            <div className="icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                                <div className="icon-box">
                                    <div className="icon"><span> <AiFillCar></AiFillCar> </span></div>
                                    <h4 className="title">Excellent Car Stock</h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><span> <RiMotorbikeFill></RiMotorbikeFill> </span></div>
                                    <h4 className="title">Updated Bike Stock</h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><span> <FaBusAlt></FaBusAlt> </span></div>
                                    <h4 className="title">Coming Soon Bus Stock</h4>
                                    <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                                </div>

                            </div>
                            {/* </div> */}
                        </div>

                    </div>





                </div>
            </section>
        </div>
    );
};

export default OurServices;