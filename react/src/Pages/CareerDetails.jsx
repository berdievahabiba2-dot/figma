import React from 'react'
import './CareerD.css'
import icon from '../Companent/12.png'
import icono from '../Companent/IconC.png'
import icon1 from '../Companent/Icon1.png'
import icon2 from '../Companent/Icon2.png'
import icon3 from '../Companent/Icon3.png'
import photo3 from '../Companent/Logo.png'
import pho from '../Companent/Sub.png'

const CareerDetails = () => {
  return (
    <div>
      <div className='begrad'>
        <h1>Web Designer</h1>
        <button>Apply Now</button>
      </div>

      <div className='big'>
        <div className='beg'>
          <h2>About this position</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <h2>Responsibilities</h2>
          <p> <img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          <p><img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <p><img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <p><img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          <p><img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <p><img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

          <h2>Requirements</h2>
          <p> <img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          <p><img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <p><img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <p><img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          <p><img src={icon} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

          <h2>Benefits</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>

       <div className='cartichka1'>
              <div className='skil1'>
                <img src={icon} alt="" />
                <h1>Web Designer</h1>
              </div>
              <h4>Salary . $45,000 - $60,000 per year</h4>
              <div className='skill1'>
               <p>Experience . 1+ year</p>
               <p>Deadline . 30/09/2025</p>
              </div>
              <h1>Skills</h1>
              <p>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
              <button>Apply Now</button>
             </div>
      </div>

      <div className='h1'>
            <h1>Open Positions</h1>
          </div>
      
          <div className='web'>
      
            <div className='cartichka'>
             <div className='skil'>
               <img src={icono} alt="" />
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

export default CareerDetails