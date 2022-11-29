import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (<footer><span className='footer-link'>Github</span>
            <span className='footer-link'>Linkedin</span>
            <span className='footer-link'>Resume</span>
        </footer>);
    }
}

export default Footer;
