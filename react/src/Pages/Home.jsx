import React from 'react'
import "./Home.css"
import photo from "../Companent/robot.png"
import photo1 from '../Companent/Com.png'
import img from '../Companent/7.png'
import img1 from '../Companent/2.png'
import img3 from '../Companent/8.png'
import img4 from '../Companent/Cont.png'
import img5 from '../Companent/Icon.png'
import img6 from '../Companent/Conn.png'
import icon from '../Companent/Ico.png'
import Icon from '../Companent/Iconn.png'
import Iconn from '../Companent/inon.png'
import photo3 from '../Companent/Logo.png'
import pho from '../Companent/Sub.png'

const Home = () => {
  return (
    <div>
       <div className='hom'>
        <div>
        <h1>Transforming Data into <span>Decisions</span></h1>
        <p>Leverage the power of machine learning and AI to unlock insights and drive business growth</p>
        <button>Book a Meeting</button>
        <p>Over 100+ clients have worked with us</p>
        </div>
        <div>
            <img src={photo} alt="" />
        </div>
        </div>
        <div className='img2'>
          <img src={photo1} alt="" />
        </div>
        <div className='ash1'>
          <h1 className='ash'>Our Ultimate Set of Services for Your Ideas Implementation</h1>
        </div>

        <div className='kard'>

          <div className='card'>
            <img src={img} alt="" />
            <h3>Predictive Analytics</h3>
            <p>Forecast trends and make data-driven decisions with our advanced ML models.</p>
          </div>
          <div className='card'>
            <img src={img1} alt="" />
            <h3>AI Consulting</h3>
            <p>Expert guidance on implementing AI solutions for your business needs.</p>
          </div>
          <div className='card'>
            <img src={img3} alt="" />
            <h3>Data Engineering</h3>
            <p>Build robust data pipelines and infrastructure for ML operations.</p>
          </div>
        </div>
        <h1 className='aa'>Frequently Asked Questions</h1>

        <div className='cart'>

          <div className='kart'>
            <div>
              <div className='kart1'>
              <img src={img4} alt="" />
              <h4>What services does Catalyst Analytics provide?</h4>
              <img src={img5} alt="" />
            </div>
              <p>Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>
            </div>
          </div>

          <div className='kart'>
            <img src={img6} alt="" />
            <h4>Lorem Ipsum is simply dummy text of the printing </h4>
            <img src={img5} alt="" />
          </div>

          <div className='kart'>
            <img src={icon} alt="" />
            <h4>Lorem Ipsum is simply dummy text of the printing </h4>
            <img src={img5} alt="" />
          </div>
          <div className='kart'>
            <img src={Icon} alt="" />
            <h4>Lorem Ipsum is simply dummy text of the printing </h4>
            <img src={img5} alt="" />
          </div>

          <div className='kart'>
            <img src={Iconn} alt="" />
            <h3>Lorem Ipsum is simply dummy text of the printing </h3>
            <img src={img5} alt="" />
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

export default Home