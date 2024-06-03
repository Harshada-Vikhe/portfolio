import React from 'react'
import './Hero.css'
import profile_img from '../../assets/h5.jpg'


const Hero = () => {
 
  return (
    <div className='hero' >
        <img src={profile_img} alt="" />
        <h1><span className='name' >I'm Harshada Vikhe ,</span> Frontend Developer </h1>
        <p>I'm frontend developer skilled in javaScript,React.js and Next.js. I create engaging websites and apps that are both visualy appealing and user-friendly. 
            Let's collaborate and bring your ideas to life on the web!
        </p>
        <div className="hero-action">
            <div className="hero-connect"><a href='https://www.linkedin.com/in/harshada-vikhe/'>Connect with me</a></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1qQ3GNoJbAdhWL3E3hoZd1T28q_OMyhjz/view?usp=drive_link">Resume</a></div>
        </div>
    </div>
  )
}

export default Hero