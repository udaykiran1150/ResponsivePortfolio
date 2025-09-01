import React from 'react'
import theme from '../../assets/theme_pattern.svg'
import myWorkDate from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'
import mywork_data from '../../assets/mywork_data'
import './Mywork.css'
const Mywork = () => {
  return (
    <div id='home' className='hero' style={{paddingLeft: "12px"}}>
        
        <div className="mywork-tittle">
            <h2> My work</h2>
            <img src={theme} alt="" />
            </div>
        <div className="mywork-container">
             
 
              {
                mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img}></img>
                })
              }
               
        </div>
        <div className="mywork-showmore">
                
                       <p><a href="https://github.com/udaykiran1150?tab=repositories">Go to Git Hub</a></p>
                       <img src={arrow} alt="" />
              </div>
    </div>
  )
}

export default Mywork