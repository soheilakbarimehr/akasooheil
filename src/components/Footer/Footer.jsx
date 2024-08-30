import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eaque ducimus, dignissimos voluptate culpa harum. Natus voluptatem eius maxime ratione cumque! Voluptate est, officiis quibusdam voluptatibus dolores tempore. Rem, repudiandae!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>HOME</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+98-9384883403</li>
            <li>ُfolan@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copy-right'>copyright 2024 c Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer