import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" />
      </div>
    </div>
  )
}

export default Home
