import React from 'react'
import '../headers/header.css'
const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">Vista</span>
      <span className="headerTitleLg">BLOG</span>
    </div>
    <img
      className="headerImg"
      src="https://www.push10.com/wp-content/uploads/geneva-gloval-website-hero-design.jpg"
      alt=""
    />
  </div>
  )
}

export default Header