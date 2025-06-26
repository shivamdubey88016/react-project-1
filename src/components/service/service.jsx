import React from 'react'
import './service.css'
import arrow_icon from '../../assets/arrow_icon.png'
import Service_Data from '../../assets/service.js'

const Service = () => {
  return (
    <div className='service' id='services'>
        <div className="service-title">
            <h1>MY SERVICES</h1>
        </div>
        <div className="service-container">
            {
                Service_Data.map((service, index) => {
                    return (
                        <div key={index} className="service-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_title}</h2>
                            <p>{service.s_description}</p>
                            <div className="service-readmore">
                                <p>read more</p>
                                <img src={arrow_icon} alt="arrow icon"  height="20px" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Service