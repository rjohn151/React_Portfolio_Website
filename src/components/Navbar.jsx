import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import {faHome, faScrewdriverWrench, faBriefcase, faAddressCard, faFileLines } from '@fortawesome/free-solid-svg-icons'; 
import resume from './RamoneJohnson_FrontEnd.pdf'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='page0' smooth={true}>About</Link>
                </li>

                <li>
                    <Link to='page1' smooth={true}>Experience</Link>
                </li>

                <li>
                    <Link to='page2' smooth={true}>Projects</Link>
                </li>

                <li>
                    <Link to='page3' smooth={true}>Contact</Link>
                </li>

                <li>
                    <a href={resume} download={resume}><button type='submit' className='download-btn'>Download</button></a>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar