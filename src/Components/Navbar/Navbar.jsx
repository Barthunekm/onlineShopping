import React from 'react';
import "./Navbar.css"
import logo from "..\Assets\logo.png"
import cart_item from "../Assets/cart_icon.png"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
              <p>SHOPPER</p>
            </div>
            <div>
                <ul className="nav-menu">
                   <li>Shop</li> 
                   <li>Men</li> 
                   <li>Women</li> 
                   <li>kids</li> 
                </ul>
            </div>
        </div>
    );
};

export default Navbar;