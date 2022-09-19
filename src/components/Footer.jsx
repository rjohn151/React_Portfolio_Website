import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  return (
    <footer className='footer'>
        
        <div className="social-icons">

            <a href="https://github.com/rjohn151"
                className='github'
                target="_blank" rel="noreferrer noopener"
            >
            <FontAwesomeIcon size='2x' icon={faGithub}/>
            </a>
            <a href="https://facebook.com"
                className='facebook'
                target="_blank" rel="noreferrer noopener"
            >
            <FontAwesomeIcon size='2x' icon={faFacebook}/>
            </a>
            <a href="https://www.instagram.com/ramoneeej/"
                className='instagram'
                target="_blank" rel="noreferrer noopener"    
            >
            <FontAwesomeIcon size='2x' icon={faInstagram}/>
            </a>
            <a href="https://linkedin.com/in/ramone-johnson"
                className='linkedin'
                target="_blank" rel="noreferrer noopener"
            >
            <FontAwesomeIcon size='2x' icon={faLinkedin}/>
            </a>
        </div>
    
        <p>Designed & Built by Ramone Johnson</p>
        {/* <p>Copyright &copy; 2022 All Rights Reserved</p> */}
  
    </footer>
  )
}

export default Footer