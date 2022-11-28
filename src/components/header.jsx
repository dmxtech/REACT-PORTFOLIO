import React, { Component } from 'react';
import Logo from '../assets/png/logo.png';
//import { Link } from 'react-router-dom';
import '../assets/css/header.css';
import '../assets/css/general.css';

class Header extends Component {
    render() { 

        return (
            <header className='header'>
                <div className='header-content'>
                    <div className='header-logo-container'>
                        <div className='header-logo-img-cont'>
                            <img src={Logo} alt="Company Logo" className="header-logo-img" />
                        </div>
                        <span className='header-link'>My Profile</span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
