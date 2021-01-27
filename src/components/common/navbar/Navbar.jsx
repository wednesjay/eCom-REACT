import React from 'react';

import './Navbar.css'

function Navbar () {

    return (
        <section className = 'navbar'>
            <a href="/" className="navbar-item">Home</a>
            <a href="/about" className="navbar-item">Pizzas</a>
            <a href="/portfolio" className="navbar-item">Our Mission</a>
            <a href="/shop" className="navbar-item">Contact Us</a>
        </section>
    )
}

export default Navbar;