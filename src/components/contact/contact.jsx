
import React from 'react'
import './contact.css'
import location from '../../assets/location.webp';

const contact = () => {
  return (
    <div className='contact'id="contact" >
   <div className="contact-title">
    <h1>contact me</h1>

    
    </div> 
    <div className="contact-section">
        <div className="contact-left">
            <h1>let's talk</h1>
            <p>Feel free to reach out if you have any questions, want to collaborate, or just want to say hi!</p>
            
            <div className="contact-detailss">
                 <div className="contact-details">
                <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="phone icon" height="80px" />
                <p>+91 1234567890</p>
            </div>
                        <div className="contact-details">
                <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="email icon" height="80px" />
                <p>email.com</p>
                        </div>
                                    <div className="contact-details">
                <img src={location} alt="location icon" height="80px" />
                <p>India</p>
                                    </div>
                                    
            </div>
            
        </div>
       
      
        </div> 
        
    </div>
  )
}

export default contact
