/* File: Navbar.jsx
   Student: Adewale Ibrahim
   StudentID: 301515732
   Date: 2025-09-15
*/

//import necessary modules
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Import your logo image
import './Navbar.css';  // Import CSS file

// Navbar Component function
export default function Navbar() { 
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact Me' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo + Name */}
        <div className="logo-container">
          {/* Image Logo */}
          <img src={logo} alt="Logo" className="logo-img" />

          <div className="logo-text">Adewale Ibrahim</div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="mobile-nav">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`nav-link ${pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}