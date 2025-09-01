import React, { useRef, useState, useEffect } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import underLine from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import theme from '../../assets/theme_pattern.svg'

const NavBar = () => {
  const [menu, setMenu] = useState('home')
  const menuRef = useRef();

  useEffect(() => {
    // Hide menu initially on mobile
    if (window.innerWidth <= 768 && menuRef.current) {
      menuRef.current.style.right = '-350px';
    }
  }, []);

  const menuOpen = () => {
    if (menuRef.current) menuRef.current.style.right = '0';
  }
  const menuClose = () => {
    if (menuRef.current) menuRef.current.style.right = '-350px';
  }

  const handleMenuClick = (section) => {
    setMenu(section);
    if (window.innerWidth <= 768) menuClose();
  }

  return (
    <div className='nav-bar'>
      <div className="logo-section">
        <h1 className='logo'>uday</h1>
        <img src={theme} alt="" />
      </div>

      <img src={menu_open} className='nav-mob-open' alt="Open menu" onClick={menuOpen} />

      <ul type='none' className="nav-menu" ref={menuRef}>
        <img src={menu_close} alt="Close menu" className='nav-mob-close' onClick={menuClose} />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => handleMenuClick('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underLine} alt="" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleMenuClick('aboutme')}>About Me</p>
          </AnchorLink>
          {menu === 'aboutme' && <img src={underLine} alt="" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => handleMenuClick('services')}>services</p>
          </AnchorLink>
          {menu === 'services' && <img src={underLine} alt="" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#mywork'>
            <p onClick={() => handleMenuClick('mywork')}>mywork</p>
          </AnchorLink>
          {menu === 'mywork' && <img src={underLine} alt="" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleMenuClick('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underLine} alt="" />}
        </li>
      </ul>
    </div>
  )
}

export default NavBar