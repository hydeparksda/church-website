import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookF, FaTwitter, FaInstagram, FaHandHoldingHeart} from 'react-icons/fa';

const Footer = () => {
    return (
       
        <div className="footer">
            <footer>
                <div class="container">
                    <div class="d-flex justify-content-between mb-50">
                        <div>
                            <p class="mb-15"><a href="/">Quick Links</a></p>
                            <p class="mb-15"><a href="/">About Us</a></p>
                            <p class="mb-15"><a href="/">Sermons</a></p>
                            <p class="mb-15"><a href="/">Events</a></p>
                            <p><a href="/">Give</a></p>
                            <p><a href="/">Privacy Policy</a></p>
                        </div>
                        <div>
                            <p class="mb-15"><a href="/">Hyde Park Seventh-day Adventist Church</a></p>
                            <p class="mb-15"><a href="/">6 Webster Street</a></p>
                            <p class="mb-15"><a href="/">Hyde Park, MA 02136</a></p>
                            <p><a href="/">(617) 361-6581</a></p>
                        </div>
                        <ul class="d-flex">
                            <li class="mr-20">
                                <a href="/"> <FaFacebookF/></a>
                            </li>
                            <li class="mr-20">
                                <a href="/"><FaInstagram/></a>
                            </li>
                            <li>
                            <a href="/"><FaTwitter/></a>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <p class="ml-5">&copy; Copyright 2020. All rights reserved.</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <p class="ml-5">Website developed by Derek S. &amp; Rizel B. <FaHandHoldingHeart/></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;