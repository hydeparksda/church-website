import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css'
import ourLogo from '../../Logos/HydeParkLogo-02.png'

const MainNav = () => (
  <div className="main_nav">
    <nav className="navigation">
      <ul>
       <li className="logo_container"><Link to={'/'}><img src={ourLogo}/></Link></li>
        <li><Link className="list_link" to={'/'}>Home</Link></li>
        <li><Link className="list_link" to={'/aboutus'}>About Us</Link></li>
        <li><Link className="list_link" to={'/sermons'}>Sermons</Link></li>
        <li><Link className="list_link" to={'/events'}>Events</Link></li>
        <li><Link className="list_link" to={'/give'}>Give</Link></li>
      </ul>
    </nav>
  </div>
)

export default MainNav;