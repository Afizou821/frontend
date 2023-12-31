import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import whatsap from '../Assets/whatsapp_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Compagny</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={instagram} alt='instagram' />
        </div>
        <div className='footer-icons-container'>
            <img src={pinterest_icon} alt='instagram' />
        </div>
        <div className='footer-icons-container'>
            <img src={whatsap} alt='instagram' />
        </div>
      </div>
      <div className='footer-coyright'>
        <hr />
        <p> ©2021 Shopper Inc. All rights reserved | Made with{'Afizou '}</p> 
      </div>
    </div>
  )
}
