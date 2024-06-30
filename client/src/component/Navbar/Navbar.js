// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/homepage">Geneaology</Link></li>
        <li><Link to="/page2">History</Link></li>
        <li><Link to="/">Family Tree</Link></li>
        <li><Link to="/page4">Member List</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
