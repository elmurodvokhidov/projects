import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const { loggedIn } = useSelector(state => state.user);
    
    return (
        <div>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'register'}>register</NavLink>
            <NavLink to={'login'}>login</NavLink>
        </div>
    )
}

export default Navbar