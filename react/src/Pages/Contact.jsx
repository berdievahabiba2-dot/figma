import React from 'react'
import photo3 from '../Companent/Logo.png'
import pho from '../Companent/Sub.png'
import img from '../Companent/31.png'


const Contact = () => {
  return (
    <div>
      <div className="afta">
            <div className="career-card">
              <div className="career-text">
                <h1>Contact Us</h1>
                <p>
                 Get in touch with our team to discuss how we can help transform your business.
We’re here to help.
                </p>
                <button>Get In Touch Now</button>
              </div>
              <img src={img} alt="Build the Future with Us" />
            </div>
          </div>
       <div className='after'>
                                <img src={photo3} alt="" />
                                <div className='after1'>
                                  <p>Home</p>
                                  <p>Services</p>
                                  <p>Portfolio</p>
                                  <p>About Us</p>
                                  <p>Careers</p>
                                </div>
                                <img className='imag' src={pho} alt="" />
                              </div>
                      
                              <div className='pi'>
                                <p>contact@catalystanalytics.io</p>
                                <p>+1 (469) 712-4672</p>
                                <p>5511 Parkcrest Dr, Suite 103, Austin, TX 78731</p>
                                <div>
                                  <p>Privacy Policy   Terms of Service</p>
                                </div>
                              </div>
                              <p className='pp'>© 2025 Catalyst Analytics. All rights reserved.</p>
                
    </div>
  )
}

export default Contact