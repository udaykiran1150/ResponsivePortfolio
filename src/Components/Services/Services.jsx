import React from 'react'
import './Services.css';
import theme from '../../assets/theme_pattern.svg'
import ServiceData from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-tittle">
            <h2>My Services</h2>
            <img src={theme} alt="" />
        </div>
        <div className="services-container">
           {ServiceData.map((service,index)=>{
            return <div key ={index} className='services-formate'>
                <h3>{service.s_no}</h3> 
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='services-read-more'>
                    <p>Read More</p>
                    <img src={arrow} alt="" />
                </div>
            </div>
           })} 
        </div>
    </div>
  )
}

export default Services