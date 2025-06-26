import React from 'react'
import mywork_data from '../../assets/mywork'
import arrow from '../../assets/arrow_icon.png'
import './mywork.css'
const mywork = () => {
  return (
    <div className='mywork' id='work'>
        <div className="mywork-title">
            <h1>My latest work</h1>
        </div>
      <div className="mywork-container">
        {
            mywork_data.map((work, index) => {
                return (
                    <div key={index} className="mywork-format">
                        <img src={work.w_img} alt={`Project ${work.w_no}`}height="200px" />
                        <h2>{work.w_title}</h2>
                    </div>
                )
            })
        }


        </div>
      </div>
   
  )
}

export default mywork
