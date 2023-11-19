import React from 'react'
import './About.css'
import baby from '../../../../Images/about.png'
import wave from '../../../../Images/wave.png'
import down from '../../../../Images/down.png'
const About = () => {
  return (
    <section className="about" id="about">    
            <div className="container">
                <div className="left">
                <div className="slider">
                    <img src={baby} alt="baby"/>
                    </div>
                </div>
                <div className="right">
                    <h2 className="title">about us :</h2>
                    <p className="paragraph">our passion is driven by the belief that every child deserves an equal opportunity to thrive. Founded by a team deeply committed to supporting parents of children with disabilities, we understand the unique challenges families face. Our platform stands as a beacon of support, offering a wealth of curated information, resources, and access to specialized products designed to cater to the distinct needs of these exceptional children. We are dedicated to empowering parents, fostering a community of understanding, and providing a comprehensive toolkit that equips families to navigate their journey with confidence and resilience. Together, we strive to create a world where every child's potential knows no bounds.</p>
                </div>
                </div>  
                <div className="wave">
                    <img src={wave} alt="wave" />
                </div>
                <div className="down">
                    <img src={down} alt="down" />
                </div>
        </section>
  )
}

export default About