import React from 'react';
import './MainNav.css'
import ourLogo from '../../Logos/HydeParkLogo-02.png';
import { Link } from "react-router-dom";

const MainNav = () => (
  <div className="main_nav">
    <nav className="navigation">
      <ul>
        <li className="logo_container">
          <Link className="list_link" to={'/'}>
            <img src={ourLogo} />
          </Link>
        </li>
        <li>
          <Link className="list_link" to={'/aboutus'}>About Us</Link>
        </li>
        <li>
          <Link className="list_link" to={'/sermons'}>Sermons</Link></li>
        <li>
          <Link className="list_link" to={'/events'}>Events</Link></li>
        <li><Link className="list_link" to={'/give'}>Give</Link></li>
      </ul>
    </nav>
  </div>
)

export default MainNav;