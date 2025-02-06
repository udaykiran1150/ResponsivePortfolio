import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import theme from '../../assets/theme_pattern.svg'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Footer-top">
            <div className="footer-top-left">
                <div className='footer-logo'>
                    <h1>uday</h1>
                    <img src={theme} alt="" />
                </div>
             
             
                <p>An aspiring webdeveloper looking for opportunities to prove.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
               <p> &copy; Uday,All rights are reserved</p> 
            </div>
            <div className="footer-bottom-right">
                <p>Term of service </p>
                <p>Privacy policy</p>
                <p> Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer