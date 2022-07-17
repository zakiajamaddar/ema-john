import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className='header'>
            <img className ="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
    {user.uid && <span style = {{color : 'white' }}>Hello { user.displayName} </span>}
                {
                     user.uid?
            <button onClick = {logOut}>log out</button>
                        :
                         <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;