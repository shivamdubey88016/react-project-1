import React from 'react'
import './about.css'
import protfoloio from '../../assets/logo4.png.jpg'

const About = () => {
  return (
    <div className="About" id='about'>
     <div className="About-title">
        <h1>About me</h1></div>
        <div className="About-section">
            <div className="About-left">
                <img src={protfoloio} alt="portfolio" className='about__img' height="350px" />
            </div>
            <div className="About-right">
                <div className="About-pra">
                    <p>
                        Hello! I'm Shivam Dubey, a passionate web developer with a keen interest in creating dynamic and responsive web applications. I have a strong foundation in HTML, CSS, and JavaScript, and I'm always eager to learn new technologies and improve my skills. My goal is to build user-friendly interfaces that provide an exceptional user experience.
                    </p>
                </div>
                <div className="About-skills">
                    <div className="About-skill">
                        <p>HTML & CSS</p><hr ></hr>
                        
                    </div>
                     <div className="About-skill">
                        <p>REACT JS</p><hr ></hr>
                        
                    </div>
                     <div className="About-skill">
                        <p>NODE & EXPRESS</p><hr></hr>
                        
                    </div>
                     <div className="About-skill">
                        <p>SQL & MONGO DB</p><hr ></hr>
                        
                    </div>
                </div>
            </div>
            </div> 
            <div className="About-achivements">
                <div className="About-achivement">
                    <h1>5+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr></hr><div className="About-achivement">
                    <h1>5+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr></hr>
                <div className="About-achivement">
                    <h1>5+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr></hr>
            </div>
    </div>
  )
}

export default About
