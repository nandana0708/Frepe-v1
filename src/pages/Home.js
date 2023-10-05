import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Pic from '../assets/hero-img.png'
import BgImage from '../assets/hero-bg.png'
import Card from '../components/Card'
import Cardlist from '../components/Cardlist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {

  return (
    <div className='home'>

     <Navbar/>

      {/* hero container */}
      <div className='heroContainer' style={{ backgroundImage: `url(${BgImage})`}}>
        <div className='text'>
            <label className='head'>Your one stop for recipes</label>
            <p className='hero-para'> From beginner-friendly dishes to gourmet creations, find recipes tailored to your skill level.
            <br></br>Explore a diverse range of mouthwatering recipes from around the world.
            
            </p>
            <Link to='/recipe'>
                <button className='signup'>Recipes</button>
            </Link>
        </div>
        <div className='image'>
            <img className='img' src={Pic} />
        </div>
      </div>

      {/*search bar*/}
      <div className='searchContainer'>
        <div className='searchbar'>
            <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} />
            <input className='search' placeholder='Search a recipe'/>
        </div>



      </div>

      {/* trending recipes */}
      <div className='trendingContainer'>
        <label className='trendingTitle'>TRENDING RECIPES</label>
            <Card></Card> 
        </div>

        <Cardlist></Cardlist>
    
      
    {/* end of main div */}

    <Footer/>
    </div>
    
  )
}

export default Home
