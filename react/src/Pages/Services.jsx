import React from 'react'
import "./Services.css"
import img from '../Companent/5.png'
import imge from '../Companent/8.png'
import image from '../Companent/3.png'
import img1 from '../Companent/6.png'
import img2 from '../Companent/0.png'
import img3 from '../Companent/11.png'
import img4 from '../Companent/72.png'
import photo3 from '../Companent/Logo.png'
import pho from '../Companent/Sub.png'


const Services = () => {
  return (
    <div>
      <div className='bifo'>
        <div className='bif'>
          <div>
          <h1>Our Comprehensive Digital Solutions</h1>
          <p>At Catalyst Analytics, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence.</p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        </div>
      </div>

      <div className='sh'>
        <h1>Our Services</h1>
        <p>Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine learning and data engineering</p>
      </div>

      <div className='crad'>

        <div className='krad'>
          <img src={imge} alt="" />
          <h4>Machine Learning Solutions</h4>
          <p>Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.</p>
          <div>
             <p>Deep learning model development</p>
             <p>Computer vision solutions</p>
             <p>Model optimization and scaling</p>
          <div>
            <p>Neural network architecture design</p>
            <p>Natural language processing</p>
          </div>
          </div>
          <button>Book a Call</button>
        </div>

        <div className='krad'>
          <img src={image} alt="" />
          <h4>Blockchain Development</h4>
          <p>End-to-end blockchain solutions from smart contract development to decentralized application architecture.</p>
          <div>
            <p>Smart contract development</p>
            <p>Blockchain integration</p>
            <p>Token implementation</p>
            <div>
              <p>DeFi protocol design</p>
              <p>Web3 development</p>
            </div>
          </div>
          <button>Book a Call</button>
        </div>

         <div className='krad'>
          <img src={img1} alt="" />
          <h4>Algorithmic Trading</h4>
          <p>Advanced trading algorithms and systems leveraging ML for market analysis and automated execution.</p>
          <div>
            <p>Trading strategy development</p>
            <p>Market analysis algorithms</p>
            <p>Performance optimization</p>
            <div>
              <p>High-frequency trading systems</p>
              <p>Risk management systems</p>
            </div>
          </div>
          <button>Book a Call</button>
        </div>
        
         <div className='krad'>
          <img src={img2} alt="" />
          <h4>Data Engineering</h4>
          <p>Build robust data infrastructure that scales with your business needs using modern data engineering practices.</p>
          <div>
            <p>Data pipeline development</p>
            <p>Database optimization</p>
            <p>Data warehouse architecture</p>
            <div>
              <p>Big data processing</p>
              <p>ETL workflow design</p>
            </div>
          </div>
          <button>Book a Call</button>
        </div>

        <div className='krad'>
          <img src={img3} alt="" />
          <h4>Predictive Analytics</h4>
          <p>Transform your data into actionable insights with our advanced predictive modeling and forecasting solutions.</p>
          <div>
            <p>Time series analysis</p>
            <p>Business intelligence</p>
            <p>Data visualization</p>
            <div>
              <p>Predictive modeling</p>
              <p>Statistical analysis</p>
            </div>
          </div>
          <button>Book a Call</button>
        </div>

         <div className='krad'>
          <img src={img4} alt="" />
          <h4>MLOps & Infrastructure</h4>
          <p>Enterprise-grade infrastructure for deploying and managing ML models in production environments.</p>
          <div>
            <p>CI/CD pipeline setup</p>
            <p>Performance monitoring</p>
            <p>DevOps integration</p>
            <div>
              <p>Model deployment automation</p>
              <p>Infrastructure scaling</p>
            </div>
          </div>
          <button>Book a Call</button>
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

export default Services