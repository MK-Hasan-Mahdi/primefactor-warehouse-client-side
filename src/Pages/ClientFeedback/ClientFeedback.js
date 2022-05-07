import React from 'react';
import './ClientFeedback.css';
import team1 from '../../images/team/team-1.jpg'
import team2 from '../../images/team/team-3.jpg'
import team3 from '../../images/team/team-3.jpg'
import team4 from '../../images/team/team-1.jpg'

const ClientFeedback = () => {
    return (
        <div>
            <section id="team" className="team">
                <div className="container-fluid">

                    <div className="section-title">
                        <h2>Team</h2>
                        <h3>Our Hard Working <span>Team</span></h3>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
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
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
                                    <div className="member">
                                        <img src={team2} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Sarah Jhonson</h4>
                                                <span>Product Manager</span>
                                            </div>
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
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
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
                                    <div className="member">
                                        <img src={team4} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Amanda Jepson</h4>
                                                <span>Accountant</span>
                                            </div>
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
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

export default ClientFeedback;

