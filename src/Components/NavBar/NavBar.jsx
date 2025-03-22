import React, { useRef, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import underLine from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

import theme from '../../assets/theme_pattern.svg'
const NavBar = () => {

  let [menu,setMenu]=useState('home')

  let menuRef=useRef();

  let menuOpen=()=>
  {
         menuRef.current.style.right='0';
  }
  let menuClose=()=>
  {
      menuRef.current.style.right='-350px';
  }
  return (
    <div className='nav-bar'>
        {/* <img src={logo} alt="" />  */}
        <div className="logo-section">
        <h1 className='logo'>uday</h1>
        <img src={theme} alt="" />
        </div>
         
        <img src={menu_open} className='nav-mob-open' alt="" onClick={menuOpen}/>
        
        <ul type='none' className="nav-menu" ref={menuRef}>
        <img src={menu_close} alt=""  className='nav-mob-close' onClick={menuClose}/>
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink><img src={menu==='home'? underLine:<></>} alt="" /></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=>setMenu('aboutme')}>About Me</p></AnchorLink><img src={menu==='aboutme'? underLine:<></>} alt="" /></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>services</p></AnchorLink><img src={menu==='services'? underLine:<></>} alt="" /></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p onClick={()=>setMenu('mywork')}>mywork</p></AnchorLink><img src={menu==='mywork'? underLine:<></>} alt="" /></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink><img src={menu==='contact'? underLine:<></>} alt="" /></li>

        </ul>
     
        
        </div>
  ) 
}

export default NavBar