import React from 'react'
import img from '../Companent/55.png'
import './Careers.css'
import ico from '../Companent/77.png'
import icon from '../Companent/IconC.png'
import icon1 from '../Companent/Icon1.png'
import icon2 from '../Companent/Icon2.png'
import icon3 from '../Companent/Icon3.png'
import photo3 from '../Companent/Logo.png'
import pho from '../Companent/Sub.png'

const Careers = () => {
  return (
    <div>
      <div className="afta">
      <div className="career-card">
        <div className="career-text">
          <h1>Build the Future with Us</h1>
          <p>
            We’re a team of builders, thinkers, and explorers using AI,
            machine learning, and blockchain to solve meaningful problems.
          </p>
          <button>Explore Open Positions</button>
        </div>
        <img src={img} alt="Build the Future with Us" />
      </div>
    </div>

    <div className='search'>
      <div className='job'>
        <p>Departments</p>
        <img src={ico} alt="" />
      </div>
      <div className='job'>
        <p>Experience</p>
        <img src={ico} alt="" />
      </div>
       <div className='job'>
        <p>JobType</p>
        <img src={ico} alt="" />
      </div>
       <div className='job'>
        <p>WorkplaceType</p>
        <img src={ico} alt="" />
      </div>
      <div className='xob'>
        <input type="text" placeholder='Search by keywords...' />
      </div>
    </div>

    <div className='h1'>
      <h1>Open Positions</h1>
    </div>

    <div className='web'>

      <div className='cartichka'>
       <div className='skil'>
         <img src={icon} alt="" />
         <h1>Web Designer</h1>
       </div>
       <h4>Salary . $45,000 - $60,000 per year</h4>
       <div className='skill'>
        <p>Experience . 1+ year</p>
        <p>Deadline . 30/09/2025</p>
       </div>
       <h1>Skills</h1>
       <p>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
       <button>Apply Now</button>
      </div>

      <div className='cartichka'>
       <div className='skil'>
         <img src={icon1} alt="" />
         <h1>Mobile App Developer</h1>
       </div>
       <h4>Salary . $55,000 - $75,000 per year</h4>
       <div className='skill'>
        <p>Experience . 2+ year</p>
        <p>Deadline . 15/10/2025</p>
       </div>
       <h1>Skills</h1>
       <p>Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.</p>
       <button>Apply Now</button>
      </div>

      <div className='cartichka'>
       <div className='skil'>
         <img src={icon2} alt="" />
         <h1>Digital Marketing Specialist</h1>
       </div>
       <h4>Salary . $50,000 - $65,000 per year</h4>
       <div className='skill'>
        <p>Experience . 4+ year</p>
        <p>Deadline . 20/11/2025</p>
       </div>
       <h1>Skills</h1>
       <p>Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.</p>
       <button>Apply Now</button>
      </div>

      <div className='cartichka'>
       <div className='skil'>
         <img src={icon3} alt="" />
         <h1>Project Manager</h1>
       </div>
       <h4>Salary . $60,000 - $80,000 per year</h4>
       <div className='skill'>
        <p>Experience . 5+ year</p>
        <p>Deadline . 05/12/2025</p>
       </div>
       <h1>Skills</h1>
       <p>Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.</p>
       <button>Apply Now</button>
      </div>
    </div>

    <div className='get'>
      <div className='git'>
        <h1>Ready to discuss</h1>
        <p>your product needs with <span>Catalyst Analytic</span> experts?</p>
        <button>Get In Touch</button>
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

export default Careers