import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <h1>Yeah, it's Navbar!</h1>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/admin"}>Admin page</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;