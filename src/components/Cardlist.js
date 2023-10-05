import React, { useEffect, useState } from 'react'
import './Cardlist.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons'


function Cardlist(){

  const [vegs,setvegs] = useState([
    {id:1, name: 'potato'},
    {id:2, name: 'cucumber'},
    {id:3, name: 'carrot'}
  ]);

  const [meats,setmeats] = useState([
    {id:30, name: 'chicken'},
    {id:31, name: 'beef'},
    {id:32, name: 'pork'},
    {id:33, name: 'lamb'}
  ]);

  const [fruits,setfruits] = useState([
    {id:50, name: 'lemon'},
    {id:51, name: 'banana'},
    {id:52, name: 'apple'},
    {id:53, name: 'mango'}
  ]);

  const [selected,setSelected] = useState([]);
  const [recipes,setRecipes] = useState([]);

  const handleChange = (itemId) => {
    const meat = meats.find(item => item.id === itemId)
    const veg = vegs.find(item => item.id === itemId)
    const fruit = fruits.find(item => item.id === itemId)

    if (meat || veg || fruit){
      if (selected.some(sel => sel.id === itemId)){
        setSelected(selected.filter(sel => sel.id !== itemId))
      }
      else {
        setSelected([...selected, meat || veg || fruit]);
      }
    }
  }
//

  const getIngredients = () => {
     //console.log(selected)
     return selected.map(item => item.name).flat()
  }
  const fetchRec = async () => {
    const ingredients = getIngredients()
    console.log(ingredients)

    const check = localStorage.getItem('selected');

    if (check){
        //local storage can only store string values so we use parse() 
        setSelected(JSON.parse(check));
    }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=e8534c82d1a04fc0b255099af98690c8&ingredients=${ingredients.join(",")}&number=2`);
        const data = await api.json();
        localStorage.setItem('selected', JSON.stringify(data))
        setRecipes(data)
        console.log(data)
    }
  }

  // useEffect(() => {
  //   fetchRec()
  // }, [])


//


function CheckCard({title, items, selected, onCheckboxChange}){
  return (
    <div className='filterContainer'>
        <div className='filters'>
          <label className = 'filterText'>{title}</label>
          <div className='cardcontainer'>
              {items.map(item => (
                <div className='fruit-item' key={item.id}>
                    <input type='checkbox'
                    value={item.id}
                    checked={selected.some(sel => sel.id === item.id)}
                    onChange={() => onCheckboxChange(item.id)}/>
                    <span className='fruit-name'>{item.name}</span>
                </div>
              ))}
          </div> 
        </div>
      
    </div>
  )
}



function ListCard({selected}) {
  return (
    <div className='cardcontainer'>
        {selected.map((select) => 
          <div className='fruit-item' key={select.id}>
              <span className='fruit-name'>{select.name}</span>
          </div>
        )}

        <button className='generate' onClick={fetchRec}>Generate</button>    
    </div>

  )
}

return(
  <div className='filters-box'>
      <label className='filter-box-title'>CHOOSE YOUR INGREDIENTS</label>
      <div className='filter-cards'>
      <CheckCard
         title="Vegetables"
         items={vegs}
         selected={selected}
         onCheckboxChange={handleChange}>
      </CheckCard>
      <CheckCard
         title="Meats"
         items={meats}
         selected={selected}
         onCheckboxChange={handleChange}>
      </CheckCard>
      <CheckCard
         title="Fruits"
         items={fruits}
         selected={selected}
         onCheckboxChange={handleChange}>
      </CheckCard>  

      <div className='filterContainer'>
          <div className='filters'>
            <label className = 'filterText'> Selected Items List </label>
              {/* <div>{JSON.stringify(selected,null,2)}</div> */}

              {selected.length > 0 && (
                  <ListCard selected={selected}></ListCard>
              )}
          </div>    
      </div>

   </div>

   {/* dynamically generate a new recipe card for selected ingredients */}

<div className='recBox'>
  {recipes.map((recipe) => {
    return(
    <div key={recipe.id} className='postContainer' id='recCard'>
      <div className='headContainer'>
          <label className='cardTitle'>{recipe.title}</label>
          <FontAwesomeIcon className='faStar' icon={faStar} />
      </div>
      <div className='mainContainer'>
        <img className='cardImg' id='img' src={recipe.image} />
        <div className='ings-container'>
          {recipe.missedIngredients.map((ings) => 
              <label className='ing-name'>{ings.name}</label>
          )}
        </div>
      </div>

     </div>
    )
  })}
 </div>
</div>
)
}

export default Cardlist