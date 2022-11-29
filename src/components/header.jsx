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
                    <span className='header-link'>About</span>
                        <span className='header-link'>Contact</span>
                        <span className='header-link'>Portfolio</span>
                        <span className='header-link'>Resume</span>
                        <div className='header-logo-img-cont'>
                            <img src={Logo} alt="Company Logo" className="header-logo-img" />
                        </div>
                        
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
