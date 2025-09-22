/* File: Layout.jsx
   Student: Adewale Ibrahim
   StudentID: 301515732
   Date: 2025-09-15
*/

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.jpg';
import './Layout.css';

export default function Layout() {
    return (
        <>
            <div className="layout-header">
                <img src={logo} alt="Logo" className="layout-logo" />
                <h1 className="layout-title">My Portfolio</h1>
            </div>
            <nav className="layout-nav">
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
            </nav>
            <hr />
        </>
    );
}
