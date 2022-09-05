import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Contact = () => {
  return (
    <>
    <section id='page3' className='contact contact-exp1'>
            <h1>Get in Touch</h1>
            <div class="bottom-line"></div>

        <div class="contact-3">
            <div class="box1">
                {/* <h3>Location</h3> */}
                <FontAwesomeIcon className='icon' size='2x' icon={faLocationDot}/>
                <p>Miami, FL</p>
            </div>

            <div class="box2">
                {/* <h3>Email</h3>  */}
                <FontAwesomeIcon className='icon' size='2x' icon={faEnvelope}/>
                <p>rjohn151@fiu.edu</p>
            </div>

            <div class="box3">
                {/* <h3>Phone</h3>  */}
                <FontAwesomeIcon className='icon' size='2x' icon={faPhone}/>
                <p>(555)-555-555</p>
            </div>

        </div>


      </section>

<section className='contact-form contact-exp'>
<h1>Contact Form</h1>
    <div class="bottom-line"></div>

    <p>Please fill out the form to contact me.</p>

    <form action="POST" data-netlify="true">

      <div class="form-group">
        {/* <label for="name">Name</label> */}
        <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Full Name"/>
      </div>

      <div class="form-group">
        {/* <label for="email">Email</label>  */}
        <input type="email" 
            name="email" 
            id="email" 
            placeholder="Email Address" />
      </div>

      <div class="form-group">
        {/* <label for="message">Message</label>  */}
        <textarea name="message" id="message" placeholder="Message"></textarea>
      </div>

      <div class="form-group">
        <div
        data-netlify-recaptcha="true"></div>
      </div>

      <button type="submit" class="btn">Send Message</button>
    </form>
</section>
    </>

        

  )
}

export default Contact