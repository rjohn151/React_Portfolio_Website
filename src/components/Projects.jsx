import React from 'react'
import './Projects.css'
import project1 from '../img/SoemCare.png'

const Projects = () => {
  return (

    <section id="page2" className='projects'>
        <h1>Some Projects I've Built</h1>
        <div class="bottom-line"></div>

      <div class="project-gallery">
        
        <div class="project">
            <h2 className='project-title'>SoemCare</h2>
            <a href="https://soemcare.us"> 
            <img src={project1}  className="site" alt="project-1" /></a>
        </div>

        <div class="project">
        <h2 className='project-title'>SoemCare</h2>
            <img src={project1}  className="site" alt="project-2" />
        </div>

        <div class="project">
        <h2 className='project-title' >SoemCare</h2>
            <img src={project1}  className="site" alt="project-3" />
        </div>

      </div>

    </section>
  )
}

export default Projects