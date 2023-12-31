import React from 'react'
import newsletter from './newsletter.css'
export default function Newsletter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclsive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type='email' placeholder='afizou@gmail.com'></input>
        <button>Subscribe</button>
      </div>
    </div>
  )
}
