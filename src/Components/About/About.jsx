import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
// import profile from '../../assets/about_profile.svg'
import profile from '../../assets/my-removebg-preview.png';

const About = () => {
  return (
    <div  id='about' className='about'>
        <div className="about-tittle">
            <h1>About me</h1>
            <img src={theme} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="" />
             </div>
            <div className="about-right">
                <div className="about-para">
                <p>Full Stack Developer skilled in the MERN stack, SQL, and Data Structures & Algorithms using Java. </p>
 
                    <p>Passionate about building efficient, scalable web applications with seamless user experiences. Experienced in front-end and back-end development, database management, and API integration. Always eager to learn and adapt to new technologies.</p>
                    </div>
                <div className="about-skills">
                    <div className="about-skill"><p>React JS </p><hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>Node JS </p><hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>Express JS </p><hr style={{width:'80%'}}/></div>
                    <div className="about-skill"><p>Mongo Db and Sql </p><hr style={{width:'50%'}}/></div>

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>DATA BASE</h1>
                <p>SQL</p>
            </div>
            <hr /> 
            <div className="about-achievement">
                <h1>DSA</h1>
                <p>using (JAVA)</p>
                
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Web Development</h1>
                <p>(MERN STACK)</p>
            </div>
        </div>
    </div>
  )
}

export default About