import React from 'react'
import './Experience.css'

const Experience = () => {
  return (

    <section id="page1" className='timeline-section container-exp'>
        <h1>Experience & Education</h1>
      <div class="bottom-line"></div>
        <div className='timeline-items'>

            <div className='timeline-item'>
                <div className="timeline-dot"></div>
                <div className="timeline-date">August 2019</div>
                <div className="timeline-content box-left">
                    <h3>Miami Dade College</h3>
                    <p className="exp-title">Graduated with Associates</p>
                </div>
            </div>

            <div className='timeline-item'>
                <div className="timeline-dot"></div>
                <div className="timeline-date">Apr 2019 - Jan 2022</div>
                <div className="timeline-content box-right">
                    <h3>Technologist Assistant</h3>
                    <p className="exp-title">Baptist Hospital of South Florida</p>
                    <p className="exp-block">Assisted over 30+ inpatient and outpatient cases daily for the Technicians of CT, X-ray. Totaling an average of over 500 cases monthly for the hospital</p>
                </div>
            </div>

            <div className='timeline-item'>
                <div className="timeline-dot"></div>
                <div className="timeline-date">December 2021</div>
                <div className="timeline-content box-left">
                    <h3>Florida International University</h3>
                    <p className="exp-title">Graduated with B.S in Information Technology</p>
                </div>
            </div>

            <div className='timeline-item'>
                <div className="timeline-dot"></div>
                <div className="timeline-date">Jan 2022 - Apr 2022</div>
                <div className="timeline-content box-right">
                    <h3>Desktop Support Technician</h3>
                    <p className="exp-title">University Of Miami Hospital</p>
                    <p className="exp-block">Maintained and assisted in technical upgrading of entire desktop systems, support in testing and
              deployment
              of
              new applications, trained and guided staff through hardware and software usage</p>
                </div>
            </div>

            <div className='timeline-item'>
                <div className="timeline-dot"></div>
                <div className="timeline-date">Apr 2022 - Current</div>
                <div className="timeline-content box-left">
                    <h3>Customer Support Engineer</h3>
                    <p className="exp-title">Kaseya</p>
                    <p className="exp-block">Assist customers with onboarding of the company's product or service and guide the clients through installation and updating issues as needed by answering questions and troubleshooting technical problems via phone, email, and chat</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Experience