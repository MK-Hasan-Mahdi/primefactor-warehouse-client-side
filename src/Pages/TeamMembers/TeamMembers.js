import React from 'react';
import './TeamMembers.css';
import team1 from '../../images/team/team-1.jpg';
import team2 from '../../images/team/team-2.png';
import team3 from '../../images/team/team-3.jpg';
import team4 from '../../images/team/team-4.png';
import { SiTwitter } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'


const TeamMembers = () => {
    return (
        <div>
            <section id="team" className="team">
                <div className="container-fluid">

                    <div className="section-title text-center m-5">
                        <h3>Our Team</h3>
                        <p>Get Exceptional Service For Growth Improve Your Investment Primefactor Warehouse Management System</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="row">

                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="member">
                                        <img src={team1} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Walter White</h4>
                                                <span>Chief Executive Officer</span>
                                            </div>
                                            <div className="social">
                                                <span> <SiTwitter></SiTwitter> </span>
                                                <span><FaFacebookF></FaFacebookF></span>
                                                <span><SiLinkedin></SiLinkedin></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
                                    <div className="member">
                                        <img src={team2} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Kary Jhonson</h4>
                                                <span>Product Manager</span>
                                            </div>
                                            <div className="social">
                                                <span> <SiTwitter></SiTwitter> </span>
                                                <span><FaFacebookF></FaFacebookF></span>
                                                <span><SiLinkedin></SiLinkedin></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
                                    <div className="member">
                                        <img src={team3} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>William Anderson</h4>
                                                <span>CTO</span>
                                            </div>
                                            <div className="social">
                                                <span> <SiTwitter></SiTwitter> </span>
                                                <span><FaFacebookF></FaFacebookF></span>
                                                <span><SiLinkedin></SiLinkedin></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
                                    <div className="member">
                                        <img src={team4} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Yuaj Cheni</h4>
                                                <span>Accountant</span>
                                            </div>
                                            <div className="social">
                                                <span> <SiTwitter></SiTwitter> </span>
                                                <span><FaFacebookF></FaFacebookF></span>
                                                <span><SiLinkedin></SiLinkedin></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default TeamMembers;

