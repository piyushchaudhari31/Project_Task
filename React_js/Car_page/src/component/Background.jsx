import React from 'react'
import video1 from '../photos/video1.mp4'
import image1 from '../photos/image1.png'
import image2 from '../photos/image2.png'
import image3 from '../photos/image3.png'
import '../css_file/background.css'


const Background = ({herocount,playstaus}) => {
  if(playstaus){
    return (
        <video className='background' autoPlay loop muted>
            <source src={video1}/>
        </video>
    )
  }
  else if(herocount === 0){
    return <img className='background' src={image1} alt="" />
  }
  else if(herocount === 1){
    return <img className='background' src={image2} alt="" />
  }
  else if(herocount === 2){
    return <img className='background' src={image3} alt="" />
  }
}

export default Background
