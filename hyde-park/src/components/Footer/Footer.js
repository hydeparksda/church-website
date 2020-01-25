import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            {/* <h5>Hyde Park Seventh-day Adventist Church</h5>
            <p>6 Webster Street</p>
            <p>Hyde Park, MA 02136</p>
            <p>(617) 361-6581</p>
            <p>	&copy; Copyright 2020</p>
            <p>Website developed Rizel B. & Derek S.</p> */}
             <footer>
      <div class="container">
        <div class="d-flex justify-content-between mb-50">
          <div>
            <p class="mb-15"><a href="/">About Us</a></p>
        <p class="mb-15"><a href="/">Search</a></p>
        <p><a href="/">Contact Information</a></p>
      </div>
      <div>
        <p class="mb-15"><a href="/">Site Map</a></p>
        <p class="mb-15"><a href="/">Private Policy</a></p>
        <p><a href="/">Terms of Use</a></p>
      </div>
      <ul class="d-flex">
        <li class="mr-20">
          <a href="/"><i class="fab fa-instagram large"></i></a>
        </li>
        <li class="mr-20">
          <a href="/"><i class="fab fa-linkedin-in large"></i></a>
        </li>
        <li>
          <a href="/"><i class="fab fa-facebook-f large"></i></a>
        </li>
      </ul>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <i class="far fa-copyright"></i>
      <p class="ml-5">Copyright 2020. All rights reserved.</p>
    </div>
</div>
</footer>
        </div>
    )
}
export default Footer;