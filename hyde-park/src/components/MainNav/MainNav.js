import React from 'react';
import './MainNav.css'
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const MainNav = () => {
  return (
    <div className="main-nav">
      <ul>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a className="active" href="#home">Home</a></li>
      </ul>
    </div>
  )
}

export default MainNav;