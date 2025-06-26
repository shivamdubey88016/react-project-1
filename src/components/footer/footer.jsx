import React from 'react'
import './footer.css'
import usericon from '../../assets/user_icon.png'

import logo from '../../assets/logo5..jpg'
const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt='logo'  height="200px" />
                <p> i am shivam dubey</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={usericon} alt='user icon'height="60px" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">
                    subscribe to our newsletter
                </div>
            </div>
        </div>
      <hr></hr>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
            0 2023 Shivam Dubey. All rights reserved.
        </p>
<div className="footer-bottom-right">
    <p> Term of service</p>
    <p> Privacy policy</p>
    <p> Contact us</p>
</div>
      </div>
    </div>
  )
}

export default footer
