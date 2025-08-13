import React, { useEffect, useState } from 'react'
import Background from './component/Background'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

const App = () => {

  let herodata =[
    {text1:"Dive into" , text2:"What you do"},
    {text1:"Indulge" , text2:"Your passions"},
    {text1:"Give in to" , text2:"your passions"},
    
  ]

  const [herocount , setherocount] = useState(0)
  const [playstaus , setplaystatus] = useState(false)


  useEffect(()=>{
    setInterval(()=>{
      setherocount((count)=>{return count === 2 ? 0 : count+1})
    },3000)
  },[])


  return (
    <div>
      <Background herocount={herocount} playstaus={playstaus}/>
      <Navbar />
      <Hero herocount={herocount} setherocount={setherocount} playstaus={playstaus} setplaystatus={setplaystatus} herodata={herodata[herocount]}/>
    </div>
  )
}

export default App
