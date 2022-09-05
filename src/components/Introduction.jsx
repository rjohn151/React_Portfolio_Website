import React from 'react'
import './Introduction.css'
import profile from '../img/profile_pic_square.jpg'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faJs, faCss3, faHtml5, faReact  } from '@fortawesome/free-brands-svg-icons'; /* npm install --save @fortawesome/free-brands-svg-icons   */
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 


const Introduction = () => {
  return (
    <section id='page0' className='introduction container-intro'>

        <div className="intro">
            <h1><span>Hello, my name is</span></h1>
            <h2>Ramone Johnson.</h2>

            <div className='intro-pic1'>
                <img src={profile}  
                className="profile-pic" 
                alt="profile-pic" />
            </div>

            <p className='intro-p'>I'm a Front-End Developer. I found my passion of utilizing Javascript, HTML , and CSS to
                customize and build websites during my studies in college.
                I am currently pushing myself to gain experience and ultimately become an experienced full-stack developer.
            </p>

            <p className='intro-p'>I have a BS in Information Technology from Florida International University.</p>




            <div class="skills-list">
                <h3>Technologies I work with:</h3>
                <ul>

                <li><FontAwesomeIcon size='2x' icon={faCss3}/> CSS</li>
                <li><FontAwesomeIcon size='2x' icon={faHtml5}/> HTML</li>
                <li><FontAwesomeIcon size='2x' icon={faJs}/> JAVASCRIPT </li>
                <li><FontAwesomeIcon size='2x' icon={faReact}/> REACT</li>
                <li><FontAwesomeIcon size='2x' icon={faDatabase}/> SQL</li>
                
                </ul>
            </div>

            <div class="improvement">
                <h3>Currently working on:</h3>
                <p>Improving my skills in, and understanding of advanced JavaScript and React.</p>
            </div>

            <div class="see-work">
                <Link to='page2' smooth={true} class="projects-btn">
                    Check out my Projects! 
                </Link>
            </div>
        </div>

        <div className='intro-pic2'>
            <img src={profile}  
            className="profile-pic" 
            alt="profile-pic" />
        </div>


    </section>
  )
}

export default Introduction