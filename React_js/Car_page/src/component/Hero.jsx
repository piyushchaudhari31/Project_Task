import React from 'react'
import '../css_file/hero.css'
import arrow_btn from '../photos/arrow_btn.png'
import pause_icon from '../photos/pause_icon.png'
import play_icon from '../photos/play_icon.png'

const Hero = ({herocount,setherocount,playstaus,setplaystatus,herodata}) => {
  return (
    <div className='hero'>
      <div className="hero_text">
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      <div className="hero_explore">
        <p>Explore the feature</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero_dot_play">
        <div className="hero_dots">
          <li onClick={()=>setherocount(0)} className={herocount === 0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setherocount(1)} className={herocount === 1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setherocount(2)} className={herocount === 2?"hero-dot orange":"hero-dot"}></li>
        </div>
      </div>
      <div className="hero_play">
        <img className='pause_play' onClick={()=>setplaystatus(!playstaus)} src={playstaus?pause_icon:play_icon} alt="" />
        <p>See the video</p>
      </div>
      
    </div>
  )
}

export default Hero
