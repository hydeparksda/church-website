import React from 'react';
import './MainNav.css'
import ourLogo from '../../Logos/HydeParkLogo-02.png'

const MainNav = () => (
  <div className="main_nav">
    <nav className="navigation">
      <ul>
       <li className="logo_container"><a href="#"><img src={ourLogo}/></a></li>
        <li><a className="list_link" href="#">About Us</a></li>
        <li><a className="list_link" href="#">Sermons</a></li>
        <li><a className="list_link" href="#">Events</a></li>
        <li><a className="list_link" href="#">Give</a></li>
      </ul>
    </nav>
  </div>
)

export default MainNav;