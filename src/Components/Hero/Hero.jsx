import React from 'react'
import './Hero.css'
import portfolioImg from '../../assets/my-removebg-preview.png';


import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={portfolioImg} alt="" className='hero-img'/>
        <h1><span> I am uday</span> ,a Fullsatck webdeveloper</h1>
        <p>Passionate Full Stack Developer skilled in building scalable web applications with modern technologies.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
            <div className="hero-resume"><a href="/P.SAI UDAY KIRAN Resume.pdf" download="uday's Resume.pdf">Myresume</a></div>
            

        </div>
    </div>
  )
}

export default Hero