import './Card.css'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Splide , SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '@splidejs/splide/dist/css/splide.min.css'

function Card() {

const [trending, setTrending] = useState([])

const [tags, setTags] = useState([])

useEffect(() => {
    getTrending();
},[])

//[] used to signify only run function getTrending when the component gets mounted on the webpage

const getTrending = async () => {
    //saving our state to local storage so it doen't fetch from the api everytime
    const check = localStorage.getItem('trending');

    if (check){
        //local storage can only store string values so we use parse() 
        setTrending(JSON.parse(check));
    }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=2e1f3907caf34a23b641e894eb0fe21b&number=6`);
        const data = await api.json();
        localStorage.setItem('trending', JSON.stringify(data.recipes))
        setTrending(data.recipes)
        console.log(data.recipes)

        setTags(data.recipes.keys())
        console.log(data.recipes.keys())
    }
}

  return (
    <div className='bigContainer'>
        <Splide options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '0px'
            }}>
        {trending.map((recipe) => {
            return(
                <SplideSlide key={recipe.id}>
                    <div key={recipe.id} className='postContainer'>
                        <div className='headContainer'>
                            <label className='cardTitle'>{recipe.title}</label>
                            <FontAwesomeIcon className='faStar' icon={faStar} />
                        </div>
                        <div className='mainContainer'>
                            <img className='cardImg' src={recipe.image} />
                            <div className='tagContainer'>
                                <div className='tag' id='tag1'>
                                <FontAwesomeIcon className='faCircle' icon={faCircle} />
                                <label className='tagLabel' id='gluten'>{recipe.diets[0]}</label>
                                </div>
                                <div className='tag' id='tag1'>
                                <FontAwesomeIcon className='faCircle' icon={faCircle} />
                                <label className='tagLabel' id='gluten'>{recipe.dishTypes[0]}</label>
                                </div>
                                <div className='tag'>
                                    <FontAwesomeIcon className='faCircle' icon={faCircle} />
                                    <label className='tagLabel'>300Cal</label>
                                </div> 
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            )
            
        })}
        
      </Splide>
    </div>
    
  )
}

export default Card
