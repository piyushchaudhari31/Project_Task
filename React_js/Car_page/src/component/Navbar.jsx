import React from 'react'
import '../css_file/Nav.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="car_companyname">
        <h1>Mahindra.</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>explore</li>
        <li><button>contact us</button></li>
      </ul>
    </div>
  )
}

export default Navbar
