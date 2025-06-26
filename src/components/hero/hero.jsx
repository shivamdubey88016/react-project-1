import React from 'react'
import './hero.css'
import protfoloio from '../../assets/logo4.png.jpg'
const hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={protfoloio} alt="portfolio" className='hero__img' height="350px" />
      <h1>I am shivam dubey</h1>
      <p>web devloper from imsec</p>
      <div className='hero-action'>
        <div className="hero-connect">connect with me</div> 
        <div className="hero-resume">download resume</div>
            </div>
    </div>
  )
}

export default hero
