import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <span><NavLink to={'#'}>About</NavLink></span>
            <span><NavLink to={'#'}>Portfolio</NavLink></span>
            <span><NavLink to={'#'}>Reference</NavLink></span>
            <span><NavLink to={'#'}>Contact</NavLink></span>
        </div>
    );
}

export default Navbar;