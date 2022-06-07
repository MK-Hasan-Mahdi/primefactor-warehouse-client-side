import React from 'react';
import './Footer.css';
import { SiTwitter } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className='bg-dark text-center text-white footer'>
            <div className="text-center p-3">
                <p className="text-white text-decoration-none px-3">copyright @ PRIMEFACTOR</p>
                <div className="">
                    <span> <SiTwitter></SiTwitter> </span>
                    <span><FaFacebookF></FaFacebookF></span>
                    <span><SiLinkedin></SiLinkedin></span>
                </div>
            </div>

        </footer>


    );
};

export default Footer;