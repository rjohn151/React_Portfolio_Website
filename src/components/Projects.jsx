import React from 'react'
import './Projects.css'
import project1 from '../img/SoemCare.png'
import project2 from '../img/MUFC.png'
import project3 from '../img/Project3.png'

const Projects = () => {
  return (

    <section id="page2" className='projects'>
        <h1>Some Projects I've Built</h1>
        <div class="bottom-line"></div>

      <div class="project-gallery">
        
        <div class="project">
            <h2 className='project-title'>SoemCare</h2>
            <a href="https://soemcare.us" target="_blank" rel="noreferrer noopener"> 
            <img src={project1}  className="site" alt="project-1" /></a>
        </div>

        <div class="project">
            <h2 className='project-title'>Mufc App</h2>
            <a href="https://github.com/rjohn151/manchesterUnitedAPI" target="_blank" rel="noreferrer noopener"> 
            <img src={project2}  className="site" alt="project-1" /></a>
        </div>

        <div class="project">
        <h2 className='project-title' >Stock App - Coming Soon!</h2>
            <img src={project3}  className="site-3" alt="project-3" />
        </div>

      </div>

    </section>
  )
}

export default Projects